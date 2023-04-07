import { render } from "@testing-library/react";
import LinkedInCard from "./LinkedInCard";

test("renders LinkedIn link", () => {
  const linkedInLink = "https://www.linkedin.com/in/manuel-kao-aa4923178/";
  const { getByTestId } = render(<LinkedInCard linkedInLink={linkedInLink} />);
  const linkedInLinkElement = getByTestId("linkedin-link");
  expect(linkedInLinkElement).toBeInTheDocument();
  expect(linkedInLinkElement.getAttribute("href")).toBe(linkedInLink);
});
