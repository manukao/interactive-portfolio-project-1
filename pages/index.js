import developer from "../components/developer";
import Head from "next/head";
import PanoramaViewer from "../components/Three/scenes/PanoramaBackground";
import MemojiScene from "../components/Three/scenes/MemojiScene";
import UnamPushUpScene from "../components/Three/scenes/UnamPushUpScene";
import UnamKungFu from "../components/Three/scenes/UnamKungFuScene";
import BioCard from "../components/BioCard/BioCard.js";
import LocationCard from "../components/LocationCard/LocationCard";
import TechStackCard from "../components/TechStackCard/TechStackCard";
import AgeCard from "../components/AgeCard/AgeCard";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import TestimonialsCard from "../components/TestimonialsCard/TestimonialsCard";
import ContactCardForm from "../components/ContactCard/ContactCardForm";
import {
  MainContainer,
  MainBox,
  ScrollContainer,
  CardSection,
  CardWrapper,
} from "../components/IndexStyles/IndexStyles";
import { useState, useRef, useEffect } from "react";
import UnamKungFuScene from "../components/Three/scenes/UnamKungFuScene";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState("about");
  const [currentScene, setCurrentScene] = useState("memoji");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((sectionRef) => {
      observer.observe(sectionRef);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (currentSection === "skills") {
      setCurrentScene("pushups");
    } else if (currentSection === "age") {
      setCurrentScene("kungfu");
    } else {
      setCurrentScene("memoji");
    }
  }, [currentSection]);

  return (
    <>
      <Head>
        <title>Unam</title>
        <meta
          name="description"
          content="Hi, I am Manu - Web dev adventurer and dad with a passion for all things tech. Check out my portfolio and get in touch!"
        />
      </Head>
      <PanoramaViewer />
      <MainContainer>
        {currentScene === "memoji" && <MemojiScene />}
        {currentScene === "pushups" && <UnamPushUpScene />}
        {currentScene === "kungfu" && <UnamKungFuScene />}
        <MainBox>
          <ScrollContainer>
            <CardSection id="about" ref={(el) => (sectionRefs.current[0] = el)}>
              <BioCard developer={developer} />
            </CardSection>
            <CardSection
              id="skills"
              ref={(el) => (sectionRefs.current[1] = el)}
            >
              <TechStackCard techSkills={developer.techSkills} />
            </CardSection>
            <CardSection
              id="location"
              ref={(el) => (sectionRefs.current[2] = el)}
            >
              <CardWrapper>
                <LocationCard location={developer.location} />
              </CardWrapper>
            </CardSection>
            <CardSection id="age" ref={(el) => (sectionRefs.current[3] = el)}>
              <CardWrapper>
                <AgeCard ageOfDeveloper={developer.age} />
              </CardWrapper>
            </CardSection>
            <CardSection
              id="projects"
              ref={(el) => (sectionRefs.current[4] = el)}
            >
              <ProjectsCard projects={developer.projects} />
            </CardSection>
            <CardSection
              id="testimonials"
              ref={(el) => (sectionRefs.current[5] = el)}
            >
              <TestimonialsCard testimonials={developer.testimonials} />
            </CardSection>
            <CardSection
              id="contact"
              ref={(el) => (sectionRefs.current[6] = el)}
            >
              <ContactCardForm />
            </CardSection>
          </ScrollContainer>
        </MainBox>
      </MainContainer>
    </>
  );
}
