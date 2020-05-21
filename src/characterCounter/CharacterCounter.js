import React from "react";
import { CharacterCount } from "../characterCount";
import { TextInput } from "../textInput";

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;
