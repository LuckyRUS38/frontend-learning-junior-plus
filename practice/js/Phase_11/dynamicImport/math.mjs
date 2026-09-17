let isAdd = true;

if (isAdd) {
  const { Add } = await import('./heavy.mjs');
  const result = Add(6, 2);
  console.log(result);
}
