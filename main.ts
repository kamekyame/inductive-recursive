// a[1] = 1
// a[n] = 2a[n-1] + 1

function inductive(num: number) {
  if (num < 1) throw Error("'num' is not more than 0");
  let n = 1;
  for (let i = 2; i <= num; i++) {
    n = 2 * n + 1;
  }
  return n;
}

function recursive(num: number): number {
  if (num < 1) throw Error("'num' is not more than 0");
  if (num === 1) return 1;
  else return 2 * recursive(num - 1) + 1;
}

for (let i = 1; i <= 15; i++) {
  console.log(i, inductive(i), recursive(i));
}
