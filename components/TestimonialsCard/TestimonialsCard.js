import styled from "styled-components";

const TestimonialsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  border: 1px solid gray;
  height: fit-content;
`;

const Marquee = styled.div`
  --gap: 1rem;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
`;

const MarqueeContent = styled.ul`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  gap: var(--gap);
  animation: scroll 15s linear infinite;
`;

const TestimonialCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  padding: 4px 8px;
  font-size: 0.8rem;
  width: 240px;
`;

const TestimonialText = styled.div`
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  font-weight: bold;
  margin-top: 4px;
`;

export default function TestimonialsCard({ testimonials }) {
  return (
    <TestimonialsCardContainer data-testid="testimonials-card">
      <Marquee>
        <MarqueeContent>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} data-testid="testimonial-card">
              <TestimonialText data-testid="testimonial-text">
                {testimonial.text}
              </TestimonialText>
              <TestimonialAuthor data-testid="testimonial-author">
                {testimonial.name}
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </MarqueeContent>
        <MarqueeContent aria-hidden="true">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </MarqueeContent>
      </Marquee>
    </TestimonialsCardContainer>
  );
}
