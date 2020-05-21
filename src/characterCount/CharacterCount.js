import React from "react";
import { useRecoilValue } from "recoil";
import charCountState from "./charCountState";

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Character count: {count}</>;
}

export default CharacterCount;
