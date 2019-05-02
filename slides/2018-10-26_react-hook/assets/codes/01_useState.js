() => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1)

  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>
        increment
      </button>
    </>
  );
}
