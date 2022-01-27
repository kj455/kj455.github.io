import React from 'react';

export const Footer: React.VFC = () => {
  return (
    <div className="flex flex-col gap-4 text-right text-slate-200">
      <a className="flex-grow-0" href="https://zenn.dev/kj455">
        Zenn
      </a>
      <a className="flex-grow-0" href="https://github.com/kj455">
        Github
      </a>
      <a className="flex-grow-0" href="https://twitter.com/kj4555">
        Twitter
      </a>
      <h1 className="text-slate-100 text-3xl">Ibuki Kaji</h1>
    </div>
  );
};
