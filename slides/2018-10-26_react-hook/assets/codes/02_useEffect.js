() => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1)

  useEffect(() => {
    const id = setInterval(inc, 1000)

    // ここを消す
    // 怖い！と感じたらブラウザ再描画！
    return () => clearInterval(id)
  })

  return <p>{count}</p>
}
