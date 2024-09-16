import React from "react";
import aks from "../../images/img_aks.jpg";
import "./styles/About.css";
import { Education } from "../Data";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine, RiNextjsFill, RiNodejsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { PiMicrosoftWordLogo, PiMicrosoftExcelLogo, PiMicrosoftPowerpointLogo  } from "react-icons/pi";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <>
      <div className="DIV_ABT_AKS">
        <p className="DIV_ABT_AKS_P">
          I’m Atish Kumar Sahu, a highly driven Full-Stack Web Developer from
          Odisha, India, with a solid academic background in computer science
          and an unrelenting passion for technology. My strong coding background
          and passion for innovation make me a valuable asset for any team.
        </p>
        <img src={aks} alt="Atish Kumar Sahu" className="IMG_DIV" />
      </div>
      <div className="DIV_ABT_EDU_AKS">
        <h1 className="DIV_ABT_EDU_AKS_H1">Educational Profile</h1>
        {Education.map((edu) => (
          <details className="DIV_ABT_EDU_AKS_DT" key={edu.id} id={edu.id} name="accordion">
            <summary>{edu.name}</summary>
            <p><strong className="DIV_ABT_EDU_AKS_DT_S">College Name: </strong>{edu.college}</p>
            <p><strong className="DIV_ABT_EDU_AKS_DT_S">C.G.P.A/Percentage:{" "}</strong>{edu.cgpa}</p>
            <p><strong className="DIV_ABT_EDU_AKS_DT_S">Time Period: </strong>{edu.year}</p>
            <p className="DIV_ABT_EDU_AKS_DT_PP">{edu.des}</p>
          </details>
        ))}
      </div>
      <div className="DIV_ABT_TECH_ORG_SKL">
        <h1 className="DIV_ABT_EDU_AKS_H1">Technical Skills & Organizational Skills</h1>
        <p className="DIV_ABT_TECH_ORG_SKL_P">Throughout my career, I have honed a wide range of technical skills, excelling in both <strong className="DIV_ABT_EDU_AKS_DT_S">front-end and back-end</strong> web development. My expertise includes <strong className="DIV_ABT_EDU_AKS_DT_S">Java, HTML5, CSS3, JavaScript (ES6)</strong>, and full-stack frameworks like <strong className="DIV_ABT_EDU_AKS_DT_S">React JS, Next JS, Node JS, and Express JS</strong>. I have extensive experience managing databases such as <strong className="DIV_ABT_EDU_AKS_DT_S">MySQL, MongoDB, and Firebase</strong>, enabling me to build efficient, scalable applications. Additionally, I’m well-versed in <strong className="DIV_ABT_EDU_AKS_DT_S">GitHub for version control and collaboration</strong>, ensuring smooth development workflows. My proficiency in tools like <strong className="DIV_ABT_EDU_AKS_DT_S">Microsoft Office and Google Suite</strong> further enhances my ability to manage projects and streamline communication.</p>
        <p className="DIV_ABT_TECH_ORG_SKL_P">In addition to my technical capabilities, I bring a set of strong organizational and interpersonal skills that are crucial in a collaborative environment. I excel in effective <strong className="DIV_ABT_EDU_AKS_DT_S">communication, critical thinking, and problem-solving</strong>, allowing me to navigate complex challenges and provide innovative solutions. I am a natural <strong className="DIV_ABT_EDU_AKS_DT_S">collaborator and team player</strong>, capable of managing teams and fostering productive working environments. My willingness to take <strong className="DIV_ABT_EDU_AKS_DT_S">risks</strong>, coupled with a disciplined approach to team management, ensures that I contribute not only to technical success but also to the overall cohesion and progress of any project or team I am part of.</p>
      </div>
      <div className="DIV_ABT_SKLS_ICN">
        <div className="DIV_ABT_SKLS_ICN_MAR">
          <FaHtml5 size={50} color="orange" />
          <FaCss3Alt size={50} color="blue" />
          <IoLogoJavascript size={50} color="yellow" />
          <RiReactjsLine size={50} color="blue" />
          <RiNextjsFill size={50} color="grey" />
          <RiNodejsLine size={50} color="darkgreen" />
          <SiExpress size={50} color="darkgreen" />
          <IoLogoFirebase size={50} color="orange" />
          <SiMongodb size={50} color="darkgreen" />
          <SiMysql size={50} color="orange" />
          <FaGithub size={50} color="black" />
          <PiMicrosoftWordLogo size={50} color="blue" />
          <PiMicrosoftExcelLogo size={50} color="green" />
          <PiMicrosoftPowerpointLogo size={50} color="orange" />

          <FaHtml5 size={50} color="orange" />
          <FaCss3Alt size={50} color="blue" />
          <IoLogoJavascript size={50} color="yellow" />
          <RiReactjsLine size={50} color="blue" />
          <RiNextjsFill size={50} color="grey" />
          <RiNodejsLine size={50} color="darkgreen" />
          <SiExpress size={50} color="darkgreen" />
          <IoLogoFirebase size={50} color="orange" />
          <SiMongodb size={50} color="darkgreen" />
          <SiMysql size={50} color="orange" />
          <FaGithub size={50} color="black" />
          <PiMicrosoftWordLogo size={50} color="blue" />
          <PiMicrosoftExcelLogo size={50} color="green" />
          <PiMicrosoftPowerpointLogo size={50} color="orange" />
        </div>
      </div>
      <div className="DIV_PRO_LNK">
        <Link to="/project" className="DIV_PRO_LNK_LINK">Projects</Link>
      </div>
    </>
  );
};