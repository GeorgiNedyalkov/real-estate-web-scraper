export function calcMarketCap(apartments) {
  const marketCap = apartments.reduce(
    (prev, next) => prev + Number(next.price),
    0
  );
  return marketCap.toLocaleString();
}

export function calcAverage(key, objArr) {
  console.log(key);
  const total = objArr.reduce(
    (prev, next) => Number(prev) + Number(next[key]),
    0
  );

  console.log(total);
  return total / objArr.length;
}

export function findMode(objArr, key) {
  // we need to take into consideration two or more modes
  const mode = {};
  let max = 0;
  let count = 0;

  for (let i = 0; i < objArr.length; i++) {
    const item = objArr[i][key];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return max;
}

export function findMedian(objArr, key) {
  let midIndex;
  const sortedArr = objArr.sort((a, b) => Number(b[key]) - Number(a[key]));
  const count = objArr.length;
  if (count % 2 == 0) {
    midIndex = objArr.length / 2;
  } else {
    midIndex = Math.ceil(count / 2);
  }

  return sortedArr[midIndex][key];
}
