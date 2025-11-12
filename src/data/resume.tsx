import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Clément Peleman",
  initials: "CP",
  url: "https://clementpeleman.be",
  location: "Ghent, Belgium",
  locationLink: "https://www.google.com/maps/place/ghent",
  description:
    "Engineer with a background in embedded systems and product design.",
  summary:
    "Engineer with a background in product and hardware design. I work across the stack, combining technical problem-solving with a strong sense for product. This mix keeps me curious about both how things work and how people experience them. Currently based in Ghent, studying [Embedded Systems at UGent](https://studiekiezer.ugent.be/2022/master-of-science-in-electronics-and-ict-engineering-technology-embedded-systems/).",
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "FastAPI",
    "SQL",
    "TypeScript",
    "Ruby on Rails",
    "Node.js",
    "React/Next.js",
    "Langchain",
    "VHDL",
    "KiCad",
    "Siemens NX",
    "AWS",
    "Supabase",
    "Docker",
    "Git",
    "UX/CX",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "clementpeleman@outlook.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/clementpeleman",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/clement-peleman-a0b852212",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:clementpeleman@outlook.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "LVQ Wine",
      href: "https://www.lvq.wine",
      badges: [],
      location: "Ghent, Belgium",
      title: "Web developer",
      logoUrl: "/lvq_logo.svg",
      start: "2025",
      end: "2025",
      description:
        "Development and design of Le vin quotidien website.",
    },
    {
      company: "H16",
      href: "https://www.h16.be",
      badges: [],
      location: "Oosterzele, Belgium",
      title: "Web developer",
      logoUrl: "/h16_logo.webp",
      start: "2022",
      end: "2023",
      description:
        "Development and design of H16 website.",
    },
    {
      company: "Delhaize Ronse",
      href: "https://www.delhaize.be/",
      badges: [],
      location: "Ronse, Belgium",
      title: "Student worker",
      logoUrl: "/delhaize.png",
      start: "2017",
      end: "2019",
      description:
        "Worked in retail operations during summer break.",
    },
  ],
  education: [
    {
      school: "UGent",
      href: "https://studiekiezer.ugent.be/2022/master-of-science-in-electronics-and-ict-engineering-technology-embedded-systems/",
      degree: "Master of Science in Embedded Systems",
      logoUrl: "/logo_ugent.svg",
      start: "2023",
      end: "present",
    },
    {
      school: "UGent (Kortrijk)",
      href: "https://www.ugent.be/campus-kortrijk/nl/opleidingen/industrieel-ontwerpen",
      degree: "Master of Science in Industrial Design",
      logoUrl: "/logo_ugent.svg",
      start: "2019",
      end: "2023",
    },
    {
      school: "Katholiek Secundair Onderwijs Ronse",
      href: "https://www.ksogr.be/",
      degree: "Math Science",
      logoUrl: "/kso.png",
      start: "2013",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Tipple - Wine Pairing AI",
      href: "https://tipple.wine/",
      dates: "2024 - Present",
      active: true,
      description:
        "An innovative platform that leverages artificial intelligence to simplify and enhance the wine pairing experience. By analyzing dish ingredients and flavor profiles, Tipple AI provides instant, personalized wine recommendations. Uses a semi-agentic flow with kNN trained on thousands of dishes and grape varieties.",
      tags: [
        "Next.js",
        "TypeScript",
        "AI/ML",
        "kNN",
        "RAG",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://tipple.wine/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Blog",
          href: "https://tipple.wine/blog/introducing-tipple",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/tipple/thumbnail.jpg",
      video: "",
      images: [
        "/projects/tipple/thumbnail.jpg",
        "/projects/tipple/main.png",
        "/projects/tipple/dashboard.png",
      ],
    },
    {
      title: "LVQ - Wine Shop Website",
      href: "https://lvq.wine",
      dates: "2025 - Present",
      active: true,
      description:
        "A website for a local wine shop based in Oosterzele. Built with Webflow with custom code for features such as the top banner and shopping cart logic. Full CMS integration with filtering.",
      tags: [
        "Webflow",
        "JavaScript",
        "Custom Code",
        "CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://lvq.wine",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/lvq/thumbnail.png",
      video: "",
      images: [
        "/projects/lvq/thumbnail.png",
        "/projects/lvq/example.png",
      ],
    },
    {
      title: "PaperMind",
      href: "https://github.com/clementpeleman/PaperMind",
      dates: "2025 - Present",
      active: true,
      description:
        "A modern web application designed to help users manage, analyze, and interact with academic papers and research data. Features AI-powered analysis, Zotero integration for seamless reference management and quick analyses for time-saving purposes.",
      tags: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Zotero",
        "AI/ML",
        "React",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/clementpeleman/PaperMind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/papermind/thumbnail.png",
      video: "",
      images: [
        "/projects/papermind/thumbnail.png",
        "/projects/papermind/demo.gif",
        "/projects/papermind/Zotero.png",
      ],
    },
    {
      title: "H16 Website",
      href: "https://www.h16.be",
      dates: "2022 - Present",
      active: true,
      description:
        "Frontend and backend development for H16.be, creating a stunning online experience. Focus on both frontend and backend development, delivering a seamless, responsive, and engaging website supported by AWS EC2 and RDS infrastructure. Logo and typography by chilli.be.",
      tags: [
        "React",
        "Node.js",
        "AWS EC2",
        "AWS RDS",
        "CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.h16.be",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/h16/thumbnail.png",
      video: "",
      images: [
        "/projects/h16/thumbnail.png",
        "/projects/h16/main.png",
        "/projects/h16/first.png",
        "/projects/h16/second.png",
        "/projects/h16/third.png",
      ],
    },
    {
      title: "ESP32 Dev Board",
      href: "",
      dates: "2024",
      active: false,
      description:
        "A compact and versatile ESP32 development board with integrated Wi-Fi and Bluetooth capabilities. Ideal for IoT projects where space and connectivity are key. Features USB-C for power and UART pinout for programming.",
      tags: [
        "KiCad",
        "PCB Design",
        "ESP32",
        "Hardware Design",
      ],
      links: [],
      image: "/projects/esp32/esp32-v2.png",
      video: "",
      images: [
        "/projects/esp32/esp32-v2.png",
        "/projects/esp32/esp32-v2.2.png",
        "/projects/esp32/esp32-v2.3.png",
        "/projects/esp32/esp32-v2.4.png",
      ],
    },
    {
      title: "ICON Bike Light",
      href: "",
      dates: "2023",
      active: false,
      description:
        "A user-centered bike light design with special attention to the user journey. Features magnetic attachment for seamless on/off functionality, ensuring secure placement during rides while making it easy to remove when leaving the bike or recharging.",
      tags: [
        "Product Design",
        "UX Design",
        "Siemens NX",
        "Industrial Design",
      ],
      links: [],
      image: "/projects/ICON/mockup1.jpg",
      video: "",
      images: [
        "/projects/ICON/mockup1.jpg",
        "/projects/ICON/mockup5.jpg",
        "/projects/ICON/mockup8.jpg",
        "/projects/ICON/Ontwerpdossier12.jpg",
        "/projects/ICON/Ontwerpdossier14.jpg",
      ],
    },
    {
      title: "Multi-Jet Fusion Add-on",
      href: "",
      dates: "2023",
      active: false,
      description:
        "Master's thesis project exploring Multi Jet Fusion (MJF) production within a corporate setting. Identified and analyzed existing bottlenecks impeding efficiency and devised solutions to enhance the MJF production process. Includes a wearable PM exposure monitoring device.",
      tags: [
        "Product Design",
        "MJF Technology",
        "Industrial Design",
        "Research",
      ],
      links: [],
      image: "/projects/MJF/poster.png",
      video: "",
      images: [
        "/projects/MJF/poster.png",
        "/projects/MJF/MJF.jpg",
        "/projects/MJF/wearable.png",
        "/projects/MJF/sideview.png",
        "/projects/MJF/1_story.jpg",
        "/projects/MJF/2_story.jpg",
      ],
    },
    {
      title: "ROVER - Autonomous Construction Vehicle",
      href: "",
      dates: "2023",
      active: false,
      description:
        "An autonomous, tracked construction vehicle designed to streamline material handling on construction sites. Features robust build and advanced navigation for transporting heavy loads in rugged terrains. Branding emphasizes strength and reliability with clean lines and high-contrast color scheme.",
      tags: [
        "Product Design",
        "Autonomous Systems",
        "Brand Design",
        "Industrial Design",
      ],
      links: [],
      image: "/projects/ROVER/thumbnail.png",
      video: "",
      images: [
        "/projects/ROVER/thumbnail.png",
        "/projects/ROVER/2.png",
        "/projects/ROVER/3.png",
        "/projects/ROVER/4.png",
      ],
    },
  ],
  hackathons: [
    {
      title: "AI Sports Coach",
      dates: "2025",
      location: "Ghent, Belgium",
      description:
        "An intelligent sports coaching system powered by LangGraph that integrates with Garmin wearables to provide personalized training advice via Telegram. Features AI-powered conversation agents, automatic activity sync, smart profiling, and custom workout generation that syncs with Garmin.",
      image: "/projects/bartcoachbot/thumbnail.png",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/clementpeleman/coach-v2",
        },
      ],
    },
    {
      title: "Onyx AI Knowledge Base",
      dates: "2025",
      location: "Remote",
      description:
        "Extensive experience in finetuning and setting up self-hosted instances of Onyx - an open-source AI platform connected to company docs, apps, and people. Learned about vector databases, embeddings, document retrieval, and RAG pipelines.",
      image: "/sides/onyxconnectorsilentdemo.gif",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/onyx-dot-app/onyx",
        },
      ],
    },
    {
      title: "FPV Drone",
      dates: "2025",
      location: "Ghent, Belgium",
      description:
        "Custom-built FPV racing drone with 3D printed GoPro mount. FPV (First-Person-View) flying with realtime video feed to goggles. Built from scratch with custom designed and 3D-printed components.",
      image: "/sides/img_5237.jpeg",
      links: [
        {
          title: "Onboard Video",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=U9iR7y6CbX8",
        },
      ],
    },
    {
      title: "Red Bull F1",
      dates: "2024",
      location: "Milton Keynes, UK",
      description:
        "F1 and car enthusiast with a passion for the engineering and tags used. Visited the Red Bull F1 factory in Milton Keynes.",
      image: "/sides/img_1696.jpeg",
      links: [],
    },
    {
      title: "Pulse Global Programming Challenge",
      dates: "2024",
      location: "International",
      description:
        "Successfully completed the Pulse Global Programming challenge, demonstrating advanced programming skills and problem-solving abilities.",
      image: "/competitions/pulse.png",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/company/pulseglobal/?originalSubdomain=be",
        },
      ],
    },
    {
      title: "Dekimo Embedded Contest",
      dates: "2023",
      location: "Belgium",
      description:
        "Succeeded first course with fast lap time in the Dekimo Embedded Contest - an embedded systems competition focused on autonomous racing vehicles.",
      image: "/competitions/dekimo.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.dekimo.com/challenge/",
        },
      ],
    },
    {
      title: "3D Printing",
      dates: "2015",
      location: "Ghent, Belgium",
      description:
        "Passionate about 3D printing using Ender 3 Pro and Bambulab A1 mini. Bought first Ender when I was 14 years old - still works today. Amazed by how easy and far the 3D printing industry has gotten in such little time.",
      image: "/sides/2006109452.avif",
      links: [],
    },
  ],
} as const;
