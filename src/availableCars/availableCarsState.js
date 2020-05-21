import { allCarsState } from "../allCars";
import { selector } from "recoil";

const availableCarsState = selector({
  key: "availableCarsState",
  get({ get }) {
    const allCars = get(allCarsState);
    return allCars.filter(({ selected }) => !selected);
  },
});

export default availableCarsState;
