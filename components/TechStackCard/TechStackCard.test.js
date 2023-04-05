import React from "react";
import { render, screen } from "@testing-library/react";
import TechStackCard from "./TechStackCard";
import developer from "../developer";

describe("TechStackCard", () => {
  test("renders a list of tech skills from the developer object", () => {
    render(<TechStackCard techSkills={developer.techSkills} />);

    developer.techSkills.forEach((skill) => {
      const skillElement = screen.getByText(skill);
      expect(skillElement).toBeInTheDocument();
      expect(skillElement).toHaveAttribute("data-testid", "tech-skill");
    });

    const skillElements = screen.getAllByTestId("tech-skill");
    expect(skillElements.length).toBe(developer.techSkills.length);
  });

  test("renders an empty list if no skills are provided", () => {
    render(<TechStackCard techSkills={[]} />);
    const skillElements = screen.queryAllByTestId("tech-skill");
    expect(skillElements.length).toBe(0);
  });
});
