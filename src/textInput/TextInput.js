import React from "react";
import { useRecoilState } from "recoil";
import textState from "./textState";

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => setText(event.target.value);
  return (
    <>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </>
  );
}

export default TextInput;
