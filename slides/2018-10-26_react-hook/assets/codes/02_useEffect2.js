() => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = _.throttle(() => {
      setWidth(window.innerWidth)
    }, 200)

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => window.removeEventListener(
      'resize',
      handleResize
    )
  })

  return <p>{width}</p>
}
