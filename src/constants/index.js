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
      description: ["Conference Coordinator (2021-2022)   ", "VP Operations (2022-2023)", "Community Distribution Team (2023-Present)"],
  },
    {
      title: "Forumla Electric",
      description: ["Software and Vehicle Control Team Member (2021-2023)"],
    },
    {
      title: "Engineers of Tomorrow",
      description: ["Future City Experience Volunteer (2020)"],
    },
    {
      title: "Battery Workforce Challenge",
      description: ["McMaster Software Algorithms Team Member (2023-Present)"],
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
        "Designed and developed a RESTful API for a shopping cart/planning platform, catering to power planners overseeing central office management. Leveraged Django Rest Framework for scalable and secure API development, resulting in increased efficiency and streamlined operations for over 1000 users.",
        "Optimized the MySQL database infrastructure to streamline data management within the platform, reducing planning time and annual request volume while ensuring seamless scalability.",
        "Enhanced Python code functionality across Telus-managed sites, predicting reserve times for batteries and integrating Lithium battery behaviour alongside lead-acid batteries. Thee optimizations significantly strengthened critical infrastructure management, ensuring uninterrupted services for Telus customers.",
        "Collaborated with a cross-functional team to develop an AI model for emergency response, harnessing insights from diverse data sources. This initiative not only enhanced emergency response capabilities but also strengthened Telus’s resilience in managing unforeseen events impacting central offices. "
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
        "Engineered intuitive HMI screens, enhancing user experience and facilitating seamless navigation, contributing to optimization goals.",
        "Utilized Ignition SCADA software and Connected Components Workbench to streamline automation processes, foresting efficiency and productivity.",
        "Played a pivotal role in the successful execution of an Air Knife device installation Project at an Amazon facility, ensuring precise installation, PLC program implementation, and camera configuration for sensor functionality.",
        "Acquired valuable insights into the company’s sales and marketing strategies, enhancing understanding of the business cycle and contributing to informed decision-making.",
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
        "Created a pacemaker system with Simulink for hardware simulation and a Python GUI. The GUI supports multiple users, enabling simultaneous monitoring and control. Utilized serial communication for seamless interaction between GUI and hardware, offering real-time data plotting and parameter programming.",

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
        "Engineered an ASIP with Verilog on an Intel Cyclone V FPGA to oversee stepper motor operations, featuring a 14-module datapath, control FSM, and motor driver interface with an SN754410 Half-H Driver chip; utilized Quartus Prime for comprehensive simulation and assembly test program development.",
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
        "Designed and implemented a digital circuit to display my student number using sequential logic design principles. Constructed a physical model with a SoulBay power supply and transistor for clock signal generation. Encountered challenges during simulation and construction due to circuit complexity, resolved using a Hantek oscilloscope for diagnostics, ensuring project integrity.",
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