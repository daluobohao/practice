import React from "react";
interface Props {
  arr: number[];
}
const QuickSort: React.FC<Props> = (props) => {
  const { arr = [] } = props;
  const quickSort = (arr: number[]): any => {
    const tmpArr = [...arr];
    if (tmpArr.length < 2) {
      return tmpArr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const [left, right] = tmpArr.reduce(
      (acc: any, val: number, index) => {
        if (val < pivot || (val === pivot && index !== pivotIndex)) {
          acc[0].push(val);
        } else if (val > pivot) {
          acc[1].push(val);
        }
        return acc;
      },
      [[], []]
    );
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  return (
    <div>
      <p>arr: [2,4,9,1,6,73,43,11,55,22,12]</p>
      <p>result: {JSON.stringify(quickSort(arr))}</p>
    </div>
  );
};
export default QuickSort;
