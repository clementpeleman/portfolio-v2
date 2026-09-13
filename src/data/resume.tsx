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
    "Engineer with a background in product and hardware design. I work across the stack and care as much about how a product feels as about how it works. That mix keeps me curious about both the internals and the people using them. Currently RAN Expert at [Citymesh](https://www.citymesh.com/).",
  avatarUrl: "/me.jpeg",
  // Skills marked here render a small accent dot in the UI to signal what
  // I'm actively building with right now.
  currentSkills: ["Python", "React/Next.js", "Claude Code"],
  skills: [
    {
      category: "Languages",
      accent: false,
      items: ["Python", "TypeScript", "SQL"],
    },
    {
      category: "Web & Backend",
      accent: false,
      items: ["React/Next.js", "Node.js", "Supabase"],
    },
    {
      category: "AI & LLMs",
      accent: true,
      items: ["Langchain", "RAG", "Claude Code"],
    },
    {
      category: "Cloud & Tooling",
      accent: false,
      items: ["AWS", "Docker", "Git"],
    },
    {
      category: "Hardware & Design",
      accent: false,
      items: ["FPGA", "KiCad", "CAD", "UX/CX"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", notification: false },
    // Flip `notification` to false once the latest post is no longer "new".
    { href: "/blog", icon: NotebookIcon, label: "Blog", notification: true },
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
        "I design, stage, and field-test private mobile networks, from 5G down to 0G, at sites of very different sizes. That covers network planning, tuning deployments, and checking performance against field measurements.",
    },
        {
      company: "Self-employed ",
      href: "mailto:clementpeleman@outlook.com",
      badges: [],
      location: "Ghent, Belgium",
      title: "Digital Product Engineer",
      logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E💻%3C/text%3E%3C/svg%3E",
      start: "2025",
      end: "Present",
      description:
        "Freelance product development for local businesses: custom websites and web apps, frontend and backend, CMS setups, and AI features where they make sense.",
    },
    {
      company: "LVQ Wine",
      href: "https://www.lvq.wine",
      badges: [],
      location: "Ghent, Belgium",
      title: "Developer (as student worker)",
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
      title: "Developer (as student worker)",
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
      end: "2025",
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
      title: "Tack - Visual Feedback for Preview Sites",
      href: "https://tack.peleman.io",
      dates: "2026 - Present",
      active: true,
      description:
        "Open-source feedback tool for agencies that review preview sites with clients. A reviewer clicks an element on the page and leaves a comment, without needing an account. The comment lands in an inbox together with the element, its CSS selector, a screenshot, the viewport and the browser, so nobody has to ask what was meant. Review links proxy any preview with the widget already injected, and a browser extension covers sites you can't edit. Self-hosted with Docker and SQLite, with an optional AI inbox that labels comments and groups duplicates.",
      tags: [
        "TanStack Start",
        "React",
        "TypeScript",
        "Drizzle ORM",
        "SQLite",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://tack.peleman.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/clementpeleman/tack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/tack/thumbnail.png",
      video: "",
      images: [
        "/projects/tack/thumbnail.png",
        "/projects/tack/steps.png",
        "/projects/tack/context.png",
        "/projects/tack/selfhost.png",
      ],
    },
    {
      title: "Floating Coach - AI Sports Coach",
      href: "https://coach.peleman.io",
      dates: "2026",
      active: true,
      description:
        "A personal AI sports coach that reads training data from a Garmin wearable and gives advice that takes recovery into account. A LangGraph agent handles the conversation, scores recovery each day, analyses new activities as they come in, and builds custom workouts that sync back to Garmin. Runs as a web dashboard and as a Telegram bot.",
      tags: [
        "LangGraph",
        "Next.js",
        "Python",
        "Garmin API",
        "Telegram API",
      ],
      links: [
        {
          type: "Website",
          href: "https://coach.peleman.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/clementpeleman/coach-v2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/floating-coach/mainpage.png",
      video: "",
      images: [
        "/projects/floating-coach/mainpage.png",
        "/projects/floating-coach/ai_chat.png",
        "/projects/floating-coach/activitygenerator.png",
        "/projects/floating-coach/recoveryscore.png",
      ],
    },
    {
      title: "Nimbo - Cloud Platform",
      href: "https://getnimbo.peleman.io",
      dates: "2025 - Present",
      active: true,
      description:
        "A Belgian cloud platform with invoicing, CRM, document management and secure file storage in one workspace. Made for small businesses that want their data hosted in Belgium and GDPR compliant. Has a marketplace for integrations and works in multiple languages.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "next-intl",
      ],
      links: [
        {
          type: "Website",
          href: "https://getnimbo.peleman.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/nimbo/thumbnail.png",
      video: "",
      images: [
        "/projects/nimbo/thumbnail.png",
        "/projects/nimbo/hero.png",
        "/projects/nimbo/packages.png",
        "/projects/nimbo/cloudscan.png",
      ],
    },
    {
      title: "Tipple - Restaurant Wine Management",
      href: "https://tipple.wine/",
      dates: "2025",
      active: true,
      description:
        "A wine management platform for restaurants. Upload a menu and get AI wine pairings, track inventory and cost, generate wine cards from several templates, and order from suppliers, all from one dashboard. Menu scanning runs on the Google Vision API; the pairings come from a custom kNN model.",
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
        "/projects/tipple-v2/landing-full.png",
        "/projects/tipple-v2/dashboard.png",
        "/projects/tipple-v2/winecards.png",
      ],
    },
    {
      title: "LVQ - Wine Shop Website",
      href: "https://lvq.wine",
      dates: "2025",
      active: true,
      description:
        "Website for a wine shop in Oosterzele. Built in Webflow, with custom code for the top banner and the shopping cart logic, and a CMS with filtering.",
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
    // {
    //   title: "PaperMind",
    //   href: "https://github.com/clementpeleman/PaperMind",
    //   dates: "2025 - Present",
    //   active: true,
    //   description:
    //     "A modern web application designed to help users manage, analyze, and interact with academic papers and research data. Features AI-powered analysis, Zotero integration for seamless reference management and quick analyses for time-saving purposes.",
    //   tags: [
    //     "Next.js",
    //     "TypeScript",
    //     "Supabase",
    //     "Zotero",
    //     "AI/ML",
    //     "React",
    //   ],
    //   links: [
    //     {
    //       type: "GitHub",
    //       href: "https://github.com/clementpeleman/PaperMind",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/projects/papermind/thumbnail.png",
    //   video: "",
    //   images: [
    //     "/projects/papermind/thumbnail.png",
    //     "/projects/papermind/demo.gif",
    //     "/projects/papermind/Zotero.png",
    //   ],
    // },
    {
      title: "H16 Website",
      href: "https://www.h16.be",
      dates: "2022",
      active: true,
      description:
        "Frontend and backend for H16.be: a responsive site with a CMS, hosted on AWS EC2 with an RDS database. Logo and typography by chilli.be.",
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
        "/projects/h16/first.png",
        "/projects/h16/main.png",
        "/projects/h16/second.png",
      ],
    },
    {
      title: "ESP32 Dev Board",
      href: "",
      dates: "2024",
      active: false,
      description:
        "A compact ESP32 development board with Wi-Fi and Bluetooth, meant for IoT projects where board space is tight. USB-C for power and a UART pinout for programming.",
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
        "A bike light designed around the full user journey. It attaches magnetically, so it stays put while riding but comes off in one motion when you leave the bike or need to charge it.",
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
        "Master's thesis on Multi Jet Fusion (MJF) production in a company setting. I mapped the bottlenecks in the production process and designed fixes for them, including a wearable PM exposure monitor.",
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
        "FPV (first-person view) racing drone built from scratch, with a live video feed to goggles. The GoPro mount and several other parts are my own designs, 3D printed.",
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
        "F1 and car fan, mostly for the engineering. Visited the Red Bull F1 factory in Milton Keynes.",
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
        "Ran a Helium hotspot on my student dorm balcony as part of the decentralized LoRa network. A good excuse to learn how LoRa and long-range IoT connectivity work.",
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
        "I print on an Ender 3 Pro and a Bambulab A1 mini. Bought the Ender when I was 14 and it still works. It's striking how much easier printing has become since then.",
      image: "/sides/2006109452.avif",
      links: [],
    },
  ],
} as const;
