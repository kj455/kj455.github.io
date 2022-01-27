import { memo } from 'react';

type Props = {
  isAlive: boolean;
  onClick: () => void;
};

export const Cell = memo<Props>(({ isAlive, onClick }) => {
  const colorStyle = isAlive
    ? 'bg-blue-300 dark:bg-blue-900'
    : 'bg-[#d4dce0] dark:bg-[#0f172b]';
  return (
    <div
      className={`w-3 h-3 flex-shrink-0 ${colorStyle}`}
      onClick={onClick}
    ></div>
  );
});
