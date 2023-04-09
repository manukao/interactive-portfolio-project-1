import { render, screen } from "@testing-library/react";
import ProjectsCard from "./ProjectsCard";
import developer from "../developer";

test("renders ProjectsCard component", () => {
  render(<ProjectsCard projects={developer.projects} />);

  const image = screen.getByTestId("project-image");
  const title = screen.getByTestId("project-title");
  const description = screen.getByTestId("project-description");
  const website = screen.getByTestId("project-website");
  const status = screen.getByTestId("project-status");
  const stack = screen.getByTestId("project-stack");

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(website).toBeInTheDocument();
  expect(status).toBeInTheDocument();
  expect(stack).toBeInTheDocument();
});
