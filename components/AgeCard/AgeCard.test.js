import React from "react";
import { render } from "@testing-library/react";
import AgeCard from "./AgeCard";

test("renders AgeCard component without crashing", () => {
  render(<AgeCard ageOfDeveloper={33} />);
});
