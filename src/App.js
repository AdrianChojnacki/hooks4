import { useState } from "react";

const App = () => {
  const [value, setValue] = useState('');

  const handleOnChange = event => setValue(event.target.value.toUpperCase());
  const handleClick = () => setValue('');

  return (
    <>
      <input
        value={value}
        placeholder="wpisz..."
        onChange={handleOnChange}
        type="text"
      />
      <button onClick={handleClick}>Reset</button>
      <h1 className="title">{value}</h1>
    </>
  );
};

export default App;
