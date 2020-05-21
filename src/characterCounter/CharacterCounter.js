import React from "react";
import { CharacterCount } from "../characterCount";
import { TextInput } from "../textInput";

function CharacterCounter() {
  return (
    <>
      <TextInput /><br/>
      <CharacterCount />
    </>
  );
}

export default CharacterCounter;
