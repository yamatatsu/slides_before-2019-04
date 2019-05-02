const FancyInput = forwardRef((props, ref) => {
  const inputARef = useRef();
  const inputBRef = useRef();
  useImperativeMethods(ref, () => ({
    focusFancyInputA: () =>
      inputARef.current.focus(),
    focusFancyInputB: () =>
      inputBRef.current.focus(),
  }))
  return (
    <>
      <input {...props} ref={inputARef} />
      <input {...props} ref={inputBRef} />
    </>
  )
});

() => {
  const inputEl = useRef(null);
  const onButtonClickA = () =>
    inputEl.current.focusFancyInputA();
  const onButtonClickB = () =>
    inputEl.current.focusFancyInputB();
  return (
    <>
      <FancyInput ref={inputEl} type="text" />
      <button onClick={onButtonClickA}>Focus the input</button>
      <button onClick={onButtonClickB}>Focus the input</button>
    </>
  );
}
