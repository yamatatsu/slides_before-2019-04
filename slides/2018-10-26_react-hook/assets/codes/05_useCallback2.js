const memoKey = 'hoge';
() => {
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)

  useEffect(
    () => console.log('Hi!!', count),
    [memoKey],
  );
  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>increment</button>
    </>
  )
}
