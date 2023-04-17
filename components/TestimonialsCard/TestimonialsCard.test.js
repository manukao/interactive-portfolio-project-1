import React from "react";
import { render } from "@testing-library/react";
import TestimonialsCard from "./TestimonialsCard";
import developer from "../developer";

describe("TestimonialsCard", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <TestimonialsCard testimonials={developer.testimonials} />
    );
    expect(getByTestId("testimonials-card")).toBeInTheDocument();
  });

  it("renders the correct number of testimonials", () => {
    const { getAllByTestId } = render(
      <TestimonialsCard testimonials={developer.testimonials} />
    );
    const testimonialCards = getAllByTestId("testimonial-card");
    expect(testimonialCards.length).toBe(developer.testimonials.length);
  });

  it("renders testimonial elements with correct ids", () => {
    const { getAllByTestId } = render(
      <TestimonialsCard testimonials={developer.testimonials} />
    );
    const testimonialTexts = getAllByTestId("testimonial-text");
    const testimonialAuthors = getAllByTestId("testimonial-author");
    expect(testimonialTexts.length).toBe(developer.testimonials.length);
    expect(testimonialAuthors.length).toBe(developer.testimonials.length);
  });
});
