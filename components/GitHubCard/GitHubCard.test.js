import { render } from "@testing-library/react";
import GitHubCard from "./GitHubCard";

test("renders GitHub link", () => {
  const gitHubLink = "https://github.com/manukao";
  const { getByTestId } = render(<GitHubCard gitHubLink={gitHubLink} />);
  const gitHubLinkElement = getByTestId("github-link");
  expect(gitHubLinkElement).toBeInTheDocument();
  expect(gitHubLinkElement.getAttribute("href")).toBe(gitHubLink);
});
