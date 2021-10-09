import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleOnClick = () => setText(`${text}A`);

  return (
    <>
      <button onClick={handleOnClick}>Dodaj "A"</button>
      <h1>{text}</h1>
    </>
  );
};

export default App;
