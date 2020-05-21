import { selector } from "recoil";
import { allCarsState } from "../allCars";

const myCarsState = selector({
  key: "myCarsState",
  get({ get }) {
    const allCars = get(allCarsState);
    return allCars.filter(({ selected }) => selected);
  },
});

export default myCarsState;
