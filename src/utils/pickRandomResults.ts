export default function pickRandomResults<Type>(
  list: Array<Type>,
  amount: number
): Array<Type> {
  const results: Array<Type> = [];

  for (let i = 0; i < amount; i++) {
    results.push(list[Math.floor(Math.random() * list.length)]);
  }

  return results;
}
