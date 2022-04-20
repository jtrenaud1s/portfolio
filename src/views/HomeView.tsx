import React from "react";
import { CodeSlash, Server, Terminal } from "react-bootstrap-icons";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Section from "../components/Section";
import Skillset from "../components/Skillset";
import { backendSkills, devOpsSkills, frontendSkills } from "../data/skills";
import MainLayout from "../layout/MainLayout";
import { projects } from "../data/projects";
import Footer from "../components/Footer";

const HomeView = () => {
  return (
    <MainLayout>
      <Section>
        <Profile />
      </Section>
      <Section title="Skillsets" className="container mx-auto px-2">
        <div className="text-center mx-auto md:mx-52 -mt-5 mb-5 px-2">
          I started learning about programming and computer technology before
          junior high as a result of an injury that left me in a wheelchair for
          a few months with nothing but time! Immediately, I knew what I wanted
          to do for the rest of my life. Since then, I’ve developed my skills as
          an engineer through self-taught experience and have earned my degree
          in computer science.
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-4">
          <Skillset title="Frontend" icon={CodeSlash} skills={frontendSkills} />
          <Skillset title="Backend" icon={Server} skills={backendSkills} />
          <Skillset title="DevOps" icon={Terminal} skills={devOpsSkills} />
        </div>
      </Section>
      <Section title="Featured Projects" className="container mx-auto px-2">
        <div className="md:grid md:grid-cols-3 md:gap-4">
          {projects.map((project, id) => {
            return (
              <Project
                key={id}
                name={project.name}
                tags={project.tags}
                image={project.image}
                summary={project.summary}
                link={project.link}
              />
            );
          })}
        </div>
      </Section>
      <Footer />
    </MainLayout>
  );
};

export default HomeView;
