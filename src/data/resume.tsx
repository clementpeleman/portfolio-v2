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
    "Engineer with a background in product and hardware design. I work across the stack, combining technical problem-solving with a strong sense for product. This mix keeps me curious about both how things work and how people experience them. Currently working as RAN-Expert at [Citymesh](https://www.citymesh.com/).",
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "SQL",
    "TypeScript",
    "React/Next.js",
    "Langchain",
    "FPGA",
    "KiCad",
    "CAD",
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
      company: "Citymesh",
      href: "https://www.citymesh.com/",
      badges: [],
      location: "Oostkamp, Belgium",
      title: "RAN Expert",
      logoUrl: "/citymesh_logo.png",
      start: "2026",
      end: "Present",
      description:
        "Responsible for designing, staging, and field-testing private mobile networks, from 5G to 0G, across diverse environments and scales. Involved in network planning, deployment optimization, and performance validation through data-driven field measurements.",
    },
        {
      company: "Self-employed ",
      href: "mailto:clementpeleman@outlook.com",
      badges: [],
      location: "Ghent, Belgium",
      title: "Web Developer & Consultant",
      logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E💻%3C/text%3E%3C/svg%3E",
      start: "2025",
      end: "Present",
      description:
        "Freelance web development and consulting, specializing in building custom websites and applications for local businesses. Services include frontend and backend development, CMS integration, and AI-powered features.",
    },
    {
      company: "LVQ Wine",
      href: "https://www.lvq.wine",
      badges: [],
      location: "Ghent, Belgium",
      title: "Web developer (as student worker)",
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
      title: "Web developer (as student worker)",
      logoUrl: "/h16_logo.webp",
      start: "2022",
      end: "2023",
      description:
        "Development and design of H16 website.",
    },
    // {
    //   company: "Delhaize Ronse",
    //   href: "https://www.delhaize.be/",
    //   badges: [],
    //   location: "Ronse, Belgium",
    //   title: "Student worker",
    //   logoUrl: "/delhaize.png",
    //   start: "2017",
    //   end: "2019",
    //   description:
    //     "Worked in retail operations during summer break.",
    // },
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
    // {
    //   school: "Secundair Onderwijs Ronse",
    //   href: "https://www.ksogr.be/",
    //   degree: "Math Science",
    //   logoUrl: "/kso.png",
    //   start: "2013",
    //   end: "2019",
    // },
  ],
  projects: [
    {
      title: "Nimbo - Cloud Platform",
      href: "",
      dates: "2025 - Present",
      active: true,
      description:
        "A Belgian cloud platform offering invoicing, CRM, document management, and secure storage in one workspace. Built for small businesses that want their data hosted locally in Belgium with GDPR compliance. Features a marketplace for integrations and multi-language support.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "next-intl",
      ],
      links: [],
      image: "/projects/nimbo/thumbnail.png",
      video: "",
      images: [
        "/projects/nimbo/thumbnail.png",
        "/projects/nimbo/hero.png",
        "/projects/nimbo/packages.png",
      ],
    },
    {
      title: "Leth - Plumbing & Heating",
      href: "https://leth.be",
      dates: "2026",
      active: true,
      description:
        "Website for LETH, a licensed plumbing and heating technician serving Ghent, Deinze, and Sint-Martens-Latem. Built with React and TinaCMS for easy content management. Features service pages, online quote requests, and 24/7 emergency contact.",
      tags: [
        "React",
        "TypeScript",
        "TinaCMS",
        "Vite",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://leth.be",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/leth/thumbnail.png",
      video: "",
      images: [
        "/projects/leth/thumbnail.png",
        "/projects/leth/diensten.png",
      ],
    },
    {
      title: "Tipple - Restaurant Wine Management",
      href: "https://tipple.wine/",
      dates: "2024 - Present",
      active: true,
      description:
        "A full wine management platform for restaurants. Restaurants can upload their menu and get AI-generated wine pairings, manage their inventory with cost tracking, generate wine cards in multiple templates, and order from suppliers — all from one dashboard. Integrates Google Vision API for menu scanning and Gemini for AI pairings.",
      tags: [
        "React",
        "TypeScript",
        "Supabase",
        "Google Vision API",
        "Gemini API",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://tipple.wine/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/tipple-v2/thumbnail.png",
      video: "",
      images: [
        "/projects/tipple-v2/thumbnail.png",
        "/projects/tipple-v2/dashboard.png",
        "/projects/tipple-v2/winecards.png",
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
    // {
    //   title: "ROVER - Autonomous Construction Vehicle",
    //   href: "",
    //   dates: "2023",
    //   active: false,
    //   description:
    //     "An autonomous, tracked construction vehicle designed to streamline material handling on construction sites. Features robust build and advanced navigation for transporting heavy loads in rugged terrains. Branding emphasizes strength and reliability with clean lines and high-contrast color scheme.",
    //   tags: [
    //     "Product Design",
    //     "Autonomous Systems",
    //     "Brand Design",
    //     "Industrial Design",
    //   ],
    //   links: [],
    //   image: "/projects/ROVER/thumbnail.png",
    //   video: "",
    //   images: [
    //     "/projects/ROVER/thumbnail.png",
    //     "/projects/ROVER/2.png",
    //     "/projects/ROVER/3.png",
    //     "/projects/ROVER/4.png",
    //   ],
    // },
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
    // {
    //   title: "Onyx AI Knowledge Base",
    //   dates: "2025",
    //   location: "Remote",
    //   description:
    //     "Extensive experience in finetuning and setting up self-hosted instances of Onyx - an open-source AI platform connected to company docs, apps, and people. Learned about vector databases, embeddings, document retrieval, and RAG pipelines.",
    //   image: "/sides/onyxconnectorsilentdemo.gif",
    //   links: [
    //     {
    //       title: "GitHub",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/onyx-dot-app/onyx",
    //     },
    //   ],
    // },
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
    // {
    //   title: "Pulse Global Programming Challenge",
    //   dates: "2024",
    //   location: "International",
    //   description:
    //     "Successfully completed the Pulse Global Programming challenge, demonstrating advanced programming skills and problem-solving abilities.",
    //   image: "/competitions/pulse.png",
    //   links: [
    //     {
    //       title: "LinkedIn",
    //       icon: <Icons.linkedin className="h-4 w-4" />,
    //       href: "https://www.linkedin.com/company/pulseglobal/?originalSubdomain=be",
    //     },
    //   ],
    // },
    // {
    //   title: "Dekimo Embedded Contest",
    //   dates: "2023",
    //   location: "Belgium",
    //   description:
    //     "Succeeded first course with fast lap time in the Dekimo Embedded Contest - an embedded systems competition focused on autonomous racing vehicles.",
    //   image: "/sides/dekimo.png",
    //   links: [
    //     {
    //       title: "Website",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://www.dekimo.com/challenge/",
    //     },
    //   ],
    // },
    {
      title: "Helium Network",
      dates: "2021",
      location: "Ghent, Belgium",
      description:
        "Set up a Helium hotspot on my student dorm balcony to contribute to the decentralized Helium LoRa network. Learned extensively about LoRa technology, long-range IoT connectivity, and decentralized wireless infrastructure.",
      image: "/sides/helium.png",
      links: [
        {
          title: "Helium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.helium.com/",
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
