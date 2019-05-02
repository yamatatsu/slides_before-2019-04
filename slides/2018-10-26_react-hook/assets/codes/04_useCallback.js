const memoKey = 'hoge';
() => {
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)

  const sayHi = useCallback(
    () => console.log('Hi!!', count),
    [memoKey],
  );
  // const sayHi = () => console.log('Hi!!', count)
  useEffect(sayHi);
  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>increment</button>
    </>
  )
}
