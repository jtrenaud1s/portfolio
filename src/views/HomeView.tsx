import React from "react";
import { CodeSlash, Server, Terminal } from "react-bootstrap-icons";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Section from "../components/Section";
import Skillset from "../components/Skillset";
import { backendSkills, devOpsSkills, frontendSkills } from "../data/skills";
import MainLayout from "../layout/MainLayout";
import prsImage from "../assets/PRS.png";

const HomeView = () => {
  return (
    <MainLayout>
      <Section>
        <Profile />
      </Section>
      <Section title="Skillsets" className="pl-2 pr-2">
        <Skillset title="Frontend" icon={CodeSlash} skills={frontendSkills} />
        <Skillset title="Backend" icon={Server} skills={backendSkills} />
        <Skillset title="DevOps" icon={Terminal} skills={devOpsSkills} />
      </Section>
      <Section title="Featured Projects" className="pl-2 pr-2">
        <Project
          name="Page Replacement Algorithm Simulator"
          tags={["JQuery", "Materialize.css", "HTML5"]}
          image={prsImage}
        />
      </Section>
    </MainLayout>
  );
};

export default HomeView;
