import { render } from "@testing-library/react";
import BioCard from "./BioCard";
import developer from "../developer";

describe("BioCard component", () => {
  test("renders the developer's information correctly", () => {
    const { getByText, getByAltText } = render(
      <BioCard developer={developer} />
    );

    // Check that the image is rendered
    const avatarImage = getByAltText(developer.name);
    expect(avatarImage).toBeInTheDocument();

    // Check that the developer's name and info text are rendered
    expect(
      getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "p" &&
          content.includes(`Hi, I am ${developer.name}`)
        );
      })
    ).toBeInTheDocument();
    expect(
      getByText((content, element) => {
        return (
          element.tagName.toLowerCase() === "p" &&
          content.includes(developer.infoText)
        );
      })
    ).toBeInTheDocument();

    // Check that all info tags are rendered
    developer.infoTags.forEach((tag) => {
      expect(getByText(tag)).toBeInTheDocument();
    });
  });
});
