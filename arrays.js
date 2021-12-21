'use strict';

// 1. printIndices
function printIndices(items) {
  for (const item in items){
    console.log(`${items[item]}, ${item}`);
  };
};

// 2. everyOtherItem
function everyOtherItem(items) {
  const everySecondItem=[];
  for (const i in items) {
    if (i % 2 === 0){
      everySecondItem.push(items[i])
    };
  };
  return everySecondItem
};

// 3. smallestNItems
function smallestNItems(items, n) {
  const sorted = items.sort((a,b) => {
    return a-b;
  });
  
  const sortedN = sorted.slice(0, n);
  const sortedReversed = sortedN.reverse();
  return sortedReversed
}
