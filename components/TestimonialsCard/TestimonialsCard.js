import styled from "styled-components";

const TestimonialsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TestimonialsCardTitle = styled.div`
  position: absolute;
  top: 0.5rem;
  font-weight: bold;
  color: var(--color-secondary);
  user-select: none;
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
    <TestimonialsCardContainer role="region" aria-label="Testimonials">
      <TestimonialsCardTitle>Testimonials</TestimonialsCardTitle>
      <Marquee>
        <MarqueeContent role="list">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} role="listitem">
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
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
