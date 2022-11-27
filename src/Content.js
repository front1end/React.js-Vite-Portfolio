// import images
import Hero_person from "./assets/images/Hero/person.png";

import git from "./assets/images/Skills/git.png";
import css from "./assets/images/Skills/css.png"
import cloud from "./assets/images/Skills/cloud.png";
import javascript from "./assets/images/Skills/javascript.png";
import sqlserver from "./assets/images/Skills/sqlserver.png";
import reactjs from "./assets/images/Skills/react.png";
import django from "./assets/images/Skills/django.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar.png";
import avatar2 from "./assets/images/Testimonials/avatar.png";
import avatar3 from "./assets/images/Testimonials/avatar.png";
import avatar4 from "./assets/images/Testimonials/avatar.png";

import About_person from "./assets/images/About/person.png";
import About_person2 from "./assets/images/About/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Developer",
    firstName: "MR",
    LastName: "NAME",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "40+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Django",
        para: "Lorem ipsum text  dummy",
        logo: django,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Css",
        para: "Loremler",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: javascript,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
      {
        name: "Sql-Server",
        para: "Lorem ipsum text  dummy",
        logo: sqlserver,
      },
      {
        name: "Cloud Computing",
        para: "Loremler",
        logo: cloud,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Service Name",
        para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        logo: services_logo1,
      },
      {
        title: "Service Name",
        para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        logo: services_logo2,
      },
      {
        title: "Service Name",
        para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY PROJECTS",
    image: person_project,
    project_content: [
      {
        title: "Project Name",
        image: project1,
      },
      {
        title: "Project Name",
        image: project2,
      },
      {
        title: "Project Name",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "CLIENT NAME",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "CLIENT NAME",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "CLIENT NAME",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "CLIENT NAME",
      },
    ],
  },
  About: {
    title: "About Me",
    subtitle: "Who am i?",
    image1: About_person,
    image2: About_person2,
    para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "yourmailaddress@gmail.com",
        icon: GrMail,
        link: "mailto:yourmailaddress@gmail.com",
      },
      {
        text: "+xx xxx xx xx xx",
        icon: MdCall,
        link: "https://wa.me/+xxxxxxx",
      },
      {
        text: "Mr Name",
        icon: BsInstagram,
        link: "https://www.instagram.com/youraccount",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
