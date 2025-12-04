import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sarthak Gupta",
  initials: "SG",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://shorturl.at/inYQi",
  description:
    "Junior Software Engineer. I love building things and create innovative solutions.",
  summary:
    "Software Developer with expertise in [MERN stack] and [React Native], skilled in designing and developing innovative solutions, optimizing performance, and ensuring system security. Experienced in collaborating with R&D teams and leveraging cutting-edge technologies to deliver high-quality results",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Graphql",
    "Material UI",
    "Typescript",
    "Docker",
    "Java",
    "Kubernetes",
    "C++",
    "Data Structure and Algorithms",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sarthakgupta1376@gmail.com",
    tel: "+91 8178315745",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sarthak-503/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://shorturl.at/nyzsr",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/GuptaSarth74327",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Makunai Global Technologies Pvt Ltd",
      href: "https://www.makunaiglobal.ai/",
      badges: [],
      location: "Noida, India",
      title: "Software Developer Engineer",
      logoUrl:"/makunai_global.png",
      start: "Sep 2024",
      end: "Nov 2025",
      description:" Developing and maintaining a full-featured WhatsApp Business Sass Platform enabling customer engagement,campaigns, and communication management. Implemented real-time chat synchronization, message templating, and audience segmentation using WebSocket and REST APIs. Designed dynamic dashboards and data tables with advanced search, filtering, and column customization using TanStack Table. Familiarity with video chat implementations and WebRTC for real-time communication features. Wrote comprehensive unit and integration test cases using testing libraries to ensure code reliability and implemented push notification system for real-time user alerts."
    },
    {
      company: "Enablero Private Ltd",
      href: "https://enablero.com/",
      badges: [],
      location: "Remote",
      title: "Software Developer Trainee",
      logoUrl: "/enablero.png",
      start: "June 2024",
      end: "August 2025",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Avalon Information Private Limited",
      badges: [],
      href: "https://www.avaloninfosys.com/",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/avalon.png",
      start: "March 2023",
      end: "Oct 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Bhagwan Parshuram Institute Of Technology",
      href: "https://bpitindia.com/",
      degree: "Bachelors Of Technology",
      logoUrl: "/bpit.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "High School(Class 12th)",
      href: "",
      degree: "High Schhol",
      logoUrl: "/waterloo.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Khetripal Consulting Company",
      href: "https://www.khetrapalconsulting.com/",
      dates: "Mar 2025 - April 2024",
      active: true,
      description:
        "A sleek, corporate website designed for a consulting firm, emphasizing credibility, user engagement, and seamless access to services. The site combines a professional aesthetic with intuitive navigation to cater to clients and stakeholders.",
      technologies: [
        "Next.js",
        "Typescript",
        "Material UI",
        "Form Integration",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.khetrapalconsulting.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video/Khetripal.mp4",
    },
    {
      title: "Bharadwaj Super Tools",
      href: "https://bst.net.in/en-US",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "A dynamic and user-friendly website designed to showcase services, products, or information with a clean, modern interface. Built with a focus on responsive design, seamless navigation, and optimal performance, this project demonstrates expertise in front-end development, UI/UX principles, and web accessibility.",
      technologies: [
        "Next.js",
        "Typescript",
        "Dynamic Routing",
        "Context API",
        "Material UI",
        "Form Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:"/video/BST.mp4",
    },
    {
      title: "ICMC",
      href: "https://dev.icmc.net.in/en-US",
      dates: "August 2025 - September 2025",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "Material UI",
        "Context API",
        "Dynamic Routing",
        "Cloudflare Workers",
        "Form Integration",
        "Amazon S3",
      ],
      links: [
        {
          type: "Website",
          href: "https://dev.icmc.net.in/en-US",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video/ICMC.mp4",
    },
    {
      title: "NLF Gyms",
      href: "https://gym-dev.enablero.com/",
      dates: "Jan 2025 - Jun 2025",
      active: true,
      description:
        "A Dynamic, user-centric website designed for fitness enthusiasts, gyms, or personal trainers. The platform combines motivational design with practical tools to showcase workouts, memberships, or training programs, fostering engagement and conversions. It is having seamless experience across devices (ideal for gym-goers on the move).",
      technologies: [
        "React.js",
        "Typescript",
        "Material UI",
        "Prisma",
        "React-Table",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
       "/video/GYM.mp4",
    },
  ],
  hackathons: [
    {
      title: "Web IT Up",
      dates: "July 23rd - 23th, 2022",
      location: "BPIT,New Delhi, India",
      description:
        "Developed a web application which delivered bedtime stories to children using augmented reality.",
      image:
        "",
      mlh: "",
      links: [],
    },
  ],
} as const;
