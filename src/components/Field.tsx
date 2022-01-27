import { useCallback, useEffect, useState, VFC } from 'react';
import { useCellNum } from '../hooks/useCellNums';
import { Cell } from './Cell';

const INITIAL_ALIVE_RATIO = 0.1;
const INTERVAL = 1000;

type Field = boolean[][];

const generate2DArray = (m: number, n: number, val = false): Field => {
  return [...Array(m)].map((_) => Array(n).fill(val));
};

const generate2DArrayRandom = (m: number, n: number): Field => {
  const array = generate2DArray(m, n);
  return array.map((row) =>
    row.map((_) => Math.random() > 1 - INITIAL_ALIVE_RATIO)
  );
};

const countAliveNeighbors = (arr: Field, i: number, j: number): number => {
  return (
    // prettier-ignore
    Number(arr[i - 1]?.[j - 1] ? true : false) +
    Number(arr[i - 1]?.[j    ] ? true : false) +
    Number(arr[i - 1]?.[j + 1] ? true : false) +
    Number(arr[i    ]?.[j - 1] ? true : false) +
    Number(arr[i    ]?.[j + 1] ? true : false) +
    Number(arr[i + 1]?.[j - 1] ? true : false) +
    Number(arr[i + 1]?.[j    ] ? true : false) +
    Number(arr[i + 1]?.[j + 1] ? true : false)
  );
};

const nextCells = (array: Field): Field => {
  const next = [...array];
  array.forEach((row, i) => {
    row.forEach((currentCell, j) => {
      const neighbors = countAliveNeighbors(next, i, j);
      next[i][j] = currentCell
        ? neighbors === 2 || neighbors === 3
        : neighbors === 3;
    });
  });
  return next;
};

export const Field: VFC = () => {
  const { rows, columns } = useCellNum();
  const [cells, setCells] = useState(generate2DArrayRandom(rows, columns));

  const handleClickCell = useCallback(
    (i: number, j: number) => {
      const cellsCopy = [...cells];
      cellsCopy[i][j] = !cellsCopy[i][j];
      setCells(cellsCopy);
    },
    [cells]
  );

  useEffect(() => {
    setInterval(() => {
      setCells((cells) => nextCells(cells));
    }, INTERVAL);
  }, []);

  return (
    <div>
      {cells.map((row, i) => (
        <div key={i} className="flex flex-row">
          {row.map((cell, j) => (
            <Cell
              key={j}
              isAlive={cell}
              onClick={() => handleClickCell(i, j)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
