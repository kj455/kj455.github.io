variable "project_id" {
  type = string
}

variable "project_name" {
  type = string
}

variable "project_region" {
  default = "asia-northeast1"
  type    = string
}

provider "google" {
  project     = var.project_id
  region      = var.project_region
  credentials = "credentials.json"
}

variable "cloudbuild_sa_id" {
  type = string
}

variable "gcp_service_list" {
  type = list(string)
  default = [
    "cloudbuild.googleapis.com",
    "containerregistry.googleapis.com",
    "run.googleapis.com",
    "cloudresourcemanager.googleapis.com"
  ]
}

resource "google_project_service" "activate_gcp_services" {
  for_each = toset(var.gcp_service_list)
  service  = each.key
}

resource "google_project_iam_member" "cloudbuild_iam" {
  for_each = toset([
    "roles/run.developer",
    "roles/iam.serviceAccountUser"
  ])
  role    = each.key
  member  = "serviceAccount:${var.cloudbuild_sa_id}@cloudbuild.gserviceaccount.com"
  project = var.project_id
}

resource "google_cloudbuild_trigger" "cloudbuild_run_trigger" {
  location = var.project_region
  name     = "cloudbuild-run-trigger"
  filename = "cloudbuild.yaml"

  github {
    owner = "kj455"
    name  = "kj455.github.io"
    push {
      branch = "^main$"
    }
  }
}

resource "google_cloud_run_service" "default" {
  name                       = "terraformed-run"
  location                   = var.project_region
  autogenerate_revision_name = true

  template {
    spec {
      timeout_seconds = 300
      containers {
        image = "gcr.io/${var.project_id}/${var.project_name}:b940a892808fbb4f9a2d6eeb1ef8fdb7e571d285"
        resources {
          limits = {
            "memory" : "256Mi",
            "cpu" : "1"
          }
        }
      }
    }
    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" : "0"
        "autoscaling.knative.dev/maxScale" : "1"
      }
    }
  }
}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "noauth" {
  location = google_cloud_run_service.default.location
  project  = google_cloud_run_service.default.project
  service  = google_cloud_run_service.default.name

  policy_data = data.google_iam_policy.noauth.policy_data
}