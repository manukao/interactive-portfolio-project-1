import developer from "../components/developer";
import Head from "next/head";
import MemojiScene from "../components/Three/scenes/MemojiScene";
import BioCard from "../components/BioCard/BioCard.js";
import LocationCard from "../components/LocationCard/LocationCard";
import TechStackCard from "../components/TechStackCard/TechStackCard";
import Modal from "../components/modal";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import TestimonialsCard from "../components/TestimonialsCard/TestimonialsCard";
import ContactCardForm from "../components/ContactCard/ContactCardForm";
import Sidebar from "../components/SideBar/SideBar";
import {
  MainContainer,
  MainBox,
  ScrollContainer,
  CardSection,
  CardWrapper,
} from "../components/IndexStyles/IndexStyles";
import { useState } from "react";
import LifeCalendar from "../components/LifeCalendarCard/LifeCalendar";
import LifeCalendarModal from "../components/LifeCalendarCard/LifeCalendarModal";

export default function HomePage() {
  const [birthdate, setBirthdate] = useState(developer.birthdate);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveBirthdate = (newBirthdate) => {
    setBirthdate(newBirthdate.birthdate);
  };

  const handleResetBirthdate = () => {
    setBirthdate(developer.birthdate);
  };

  return (
    <>
      <Head>
        <title>Unam</title>
        <meta
          name="description"
          content="Hi, I am Manu - Web dev adventurer on a mission to create meaningful digital experiences. Check out my portfolio and get in touch!"
        />
      </Head>
      <MainContainer>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <LifeCalendarModal
            birthdate={birthdate}
            onClose={handleCloseModal}
            onSave={handleSaveBirthdate}
            onReset={handleResetBirthdate}
          />
        </Modal>
        <Sidebar />
        <MemojiScene />
        <MainBox>
          <ScrollContainer>
            <CardSection id="about">
              <BioCard developer={developer} />
            </CardSection>
            <CardSection id="skills">
              <TechStackCard techSkills={developer.techSkills} />
            </CardSection>
            <CardSection id="location">
              <LocationCard location={developer.location} />
            </CardSection>
            <CardSection id="age">
              <CardWrapper>
                <LifeCalendar
                  birthdate={birthdate}
                  onOpenModal={handleOpenModal}
                  onReset={handleResetBirthdate}
                />
              </CardWrapper>
            </CardSection>
            <CardSection id="projects">
              <ProjectsCard projects={developer.projects} />
            </CardSection>
            <CardSection id="testimonials">
              <TestimonialsCard testimonials={developer.testimonials} />
            </CardSection>
            <CardSection id="contact">
              <ContactCardForm />
            </CardSection>
          </ScrollContainer>
        </MainBox>
      </MainContainer>
    </>
  );
}
