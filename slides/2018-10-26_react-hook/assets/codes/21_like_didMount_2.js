const Hoge = () => {
  const [count, setCount] = useState(0)
  const [word, say] = useState()

  useEffect(() => {
    console.log('Hi!!')
    setTimeout(() => say('Hi!!'), 1000)
  }, ['key']);

  return (
    <>
      <p>{word || 'say?'}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

() => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        reflesh !!!!
      </button>
      <Hoge />
    </>
  )
}
