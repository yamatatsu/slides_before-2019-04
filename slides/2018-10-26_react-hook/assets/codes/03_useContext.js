const Context = React.createContext()
const { Provider, Consumer } = Context

const Counter = () => {
  const { count, inc } = useContext(Context)
  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>increment</button>
    </>
  )
}

() => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1)
  return (
    <Provider value={{ count, inc }}>
      <Counter />
    </Provider>
  )
}
