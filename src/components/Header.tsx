import React from 'react';

export const Header: React.VFC = () => {
  return (
    <div className="flex flex-col gap-4 text-left text-gray-700 dark:text-slate-100">
      <p className="text-3xl font-bold">Web developer.</p>
      <p className="dark:text-slate-200 font-semibold">Like: TypeScript</p>
      <p className="dark:text-slate-200 font-semibold">@ Cyberagent</p>
      <p className="dark:text-slate-200 font-semibold">@ Trusthub</p>
    </div>
  );
};
