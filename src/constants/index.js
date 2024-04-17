import {
    mobile,
    backend,
    creator,
    robot,
    control,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    sol,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    code,
    docker,
    meta,
    starbucks,
    control_eng,
    telus,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "activities",
      title: "Activities",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const extra = [
    {
      title: "Engineers Without Borders",
      description: [
        "Facilitated seamless communication between EWB chapters in Ontario.", 
        "Fostered collaboration and knowledge exchange among engineers from diverse backgrounds.", 
        "Contributed to the organization's mission of leveraging engineering for positive social change."],
  },
    {
      title: "Forumla Electric",
      description: ["Developed and implemented communication protocols and conducted comprehensive CAN testing for an electric vehicle."],
    },
    {
      title: "Engineers of Tomorrow",
      description: ["Mentored a seventh-grade class through interactive virtual meetings, providing guidance and support as they tackled various engineering challenges."],
    },
    {
      title: "Battery Workforce Challenge",
      description: ["Contributed to the design, testing, and integration of advanced battery packs for a competitive environment, driving innovation in battery technology.", "Gained critical project management, teamwork, and problem-solving skills through hands-on experience."],
    },
  ];
  
  const services = [
    {
      title: "Control Systems",
      icon: control,
    },
    {
      title: "Robotics",
      icon: robot,
    },
    {
      title: "Software Development",
      icon: code,
    },
    {
      title: "Hardware-Software Solutions",
      icon: sol,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: html,
    },
    {
      name: "C/C++",
      icon: css,
    },
    {
      name: "Django",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "SQL/MySQL",
      icon: docker,
    },
    {
      name: "Matlab/Simulink",
      icon: figma,
    },
    {
      name: "Verilog",
      icon: redux,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Linux",
      icon: mongodb,
    },
    {
      name: "Node Js",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    
    {
      title: "Software Engineering Intern - Network Efficiency Team @ Telus",
      company_name: "Tesla",
      company_website: "https://www.telus.com/en/about/careers/graduate-technology-leadership-program",
      location: "(Hybrid) Toronto, Canada",
      icon: telus,
      tags: ["Python", "Django", "RESTful API", "MySQL", "Numerical Methods", "Machine Learning"],
      iconBg: "#E6DEDD",
      date: "May 2023 - May 2024",
      points: [
        "Designed and developed a user-friendly RESTful API for a power planning platform using Django Rest Framework , significantly improving efficiency and productivity for over 1000+ users.",
        "Developed comprehensive API test cases using JSON and Postman to ensure reliability and functionality.",
        "Strategically optimized the MySQL database infrastructure to facilitate streamlined data management, reducing planning time and annual request volume.",
        "Enhanced Python code across Telus-managed sites, leading to improvements in critical infrastructure management, ensuring uninterrupted services for Telus customers.",
        "Collaborated on an AI model aimed at strengthening emergency response capabilities, hence enhancing resilience and readiness for unforeseen events within central office environments."
      ],
    },
    {
      title: "Automation and Control Engineering Intern @ Control Engineering Inc.",
      location: "(Remote) California, USA",
      company_name: "Control Engineering Inc.",
      icon: control_eng,
      company_website: "https://www.controlengineering.com/",
      iconBg: "#383E56",
      date: "May 2022 - Aug 2022",
      tags: ["SQL", "Ignition SCADA", "HMI Development", "PLC Programming", "Sales & Marketing"],
      points: [
        "Engineered intuitive HMI screens, enhancing user experience and navigation, aligning with optimization goals.",
        "Utilized Ignition SCADA software and Connected Components Workbench to streamline automation processes, fostering efficiency and productivity.",
        "Played a pivotal role in successfully executing an Air Knife device installation project in an amazon facility, ensuring precise installation and functionality of PLC programs and cameras.",
        "Acquired valuable insights into the company's sales and marketing strategies, contributing to informed decision-making and a deeper understanding of the business cycle."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pacemaker + GUI Integration",
      description:
      "Engaged in collaborative research, development, and testing of a real-time safety-critical system, notably crafting a pacemaker. Leveraging MATLAB Simulink and Visual Basic, constructed a functional device control module. Key features included user support, serial communication, and real-time plotting of pacemaker data, all aimed at ensuring robust performance and compliance with safety standards.",
      tags: [
        {
          name: "Python",
          color: "purple-text",
        },
        {
          name: "Simulink",
          color: "blue-text",
        },
        {
          name: "Serial-Communication",
          color: "pink-text",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "ASIP Stepper Motor + SDRAM Controller",
      description:
        "Crafted an Application-Specific Instruction Set Processor (ASIP) using Verilog on an Intel Cyclone V FPGA, complete with a 14-module data path and control Finite State Machine (FSM) to regulate a stepper motor. Integrated a motor driver interface circuit employing an SN754410 Half-H Driver chip for seamless communication with the motor. Conducted simulation and testing using Quartus Prime, and developed assembly test programs to validate functionality and optimize performance.",
      tags: [
        {
          name: "Verilog",
          color: "purple-text",
        },
        {
          name: "Assembly",
          color: "blue-text",
        },
        {
          name: "Embedded-Systems",
          color: "pink-text",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Finite State Machine",
      description:
      "Developed a digital circuit to continuously showcase my student number on a seven-segment display. Utilized logic gate chips to build sequential logic, meticulously debugging the system with an oscilloscope to guarantee precise functionality and timing accuracy.",
      tags: [
        {
          name: "Multisim",
          color: "purple-text",
        },
        {
          name: "Oscilloscope",
          color: "blue-text",
        },
        {
          name: "Circuit-Design",
          color: "pink-text",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, extra };