const Context = React.createContext()
const { Provider, Consumer } = Context

class Suspense extends React.Component {
  state = { hasError: false, data: null }
  componentDidCatch(error) {
    console.log('componentDidCatch', error.then)
    if (!error.then) throw error

    this.setState({ hasError: true })
    error.then(data => {
      // this.setState({ hasError: false, data})
    })
  }
  render() {
    if (this.state.hasError) return "Loading...";

    return (
      <Provider value={this.state.data}>
        {this.props.children}
      </Provider>
    )
  }
}

const wait = ms => new Promise(r => setTimeout(r, ms));
function useData(fn) {
  const data = useContext(Context)

  return useMemo(() => {
    if (data == null) {
      throw wait(1000).then(() => 'Hi!!!')
    }
    return data
  }, [data])
}

function SayHi() {
  const data = useData()
  console.log({data})
  return <p>{data}</p>
}

() => {
  return (
    <Suspense>
      <SayHi/>
    </Suspense>
  )
}
