import { atom } from "recoil";

const allCarsState = atom({
  key: "allCarsState",
  default: [],
});

export default allCarsState;
