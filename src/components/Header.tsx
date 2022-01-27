import React from 'react';

type Props = {};

export const Header: React.VFC = () => {
  return (
    <div className="flex flex-col gap-4 text-left text-slate-100">
      <p className="text-3xl">Web developer.</p>
      <p className="text-slate-200">like: TypeScript</p>
      <p className="text-slate-200">@ Cyberagent</p>
      <p className="text-slate-200">@ Trusthub</p>
    </div>
  );
};
