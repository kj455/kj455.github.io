import { memo } from 'react';

type Props = {
  isAlive: boolean;
  onClick: () => void;
};

export const Cell = memo<Props>(({ isAlive, onClick }) => {
  const colorStyle = isAlive ? 'bg-blue-300' : 'bg-gray-300';
  return (
    <div
      className={`w-3 h-3 flex-shrink-0 ${colorStyle}`}
      onClick={onClick}
    ></div>
  );
});
