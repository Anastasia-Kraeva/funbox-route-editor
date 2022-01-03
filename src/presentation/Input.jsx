function Input({inputValue, onChange, onSubmit}) {

  return (
    <form onSubmit={onSubmit}>
      <input value={inputValue} onChange={onChange}/>
    </form>
  );
}

export default Input;
