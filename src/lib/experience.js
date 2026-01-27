export const experience = [
  {
    slug: "embedded-cybersecurity-engineer-toro",
    title: "Embedded Cybersecurity Engineer (Internship)",
    company: "The Toro Company",
    period: "May 2025 – Aug. 2025",
    image: "/images/experience/toro.png",
    images: [
      {
        src: "/images/experience/toro-security.png",
        caption: "As a cybersecurity engineer, I was a part of the software team, developing secure communication protocol and network monitoring."
      },
      {
        src: "/images/experience/bt_capture.png",
        caption: "Overall BLE capture showing advertising, connection establishment, and attribute access during normal operation."
      },
      {
        src: "/images/experience/bt_no_enc.png",
        caption: "Finding: Unencrypted Bluetooth Traffic. Specific BLE packet showing unencrypted payload data and exposed device attributes."
      },
      {
        src: "/images/experience/after_encryption.png",
        caption: "Solution: Encrypted Bluetooth Communication. BLE packet capture after encryption implementation, showing protected payload data."
      },
      {
        src: "/images/experience/portscan.png",
        caption: "Network Exposure Assessment: Port scan results showing listening services and accessible network interfaces."
      },
      {
        src: "/images/experience/jtr_bruteforce.png",
        caption: "Controlled Access Testing: Credential brute-force testing to evaluate access controls."
      },
      {
        src: "/images/experience/reverse_shell_terminal.png",
        caption: "Exploitation Testing: Reverse shell in emulated environment to validate detection and response."
      },
      {
        src: "/images/experience/yocto_custom_layer.png",
        caption: "Embedded Linux Validation: Custom Yocto layer for security functionality and validation hooks."
      },
      {
        src: "/images/experience/yocto_layer_flags.png",
        caption: "Build System Validation: Build flags affecting runtime behavior and security posture."
      },
      {
        src: "/images/experience/network_log.png",
        caption: "Network Monitoring: Activity captured after implementing custom logging layers to provide forensic evidence."
      },
      {
        src: "/images/experience/database_protection.png",
        caption: "Database Security: Configuration showing Row Level Security (RLS) policies and access controls to protect stored data."
      }
    ],
    summary: "Interned as an embedded security engineer where I developed secure microcontroller communications and implemented defensive solutions following rigorous vulnerability analysis.",
    tech: ["C/C++", "STM32", "ESP32", "TI Simplelink", "Yocto Project", "Embedded Linux", "Python", "Networking", "BLE", "Supabase"],
    moreDetails: `
- Developed and optimized communication protocols for STM32, ESP32, and TI Simplelink microcontrollers to ensure reliable data transfer
- Conducted deep-dive security analysis of embedded firmware to identify vulnerabilities in wireless stacks and network interfaces
- Implemented practical cybersecurity solutions, including encrypted communication channels and authenticated pairing, to mitigate identified threats
- Engineered custom Yocto layers to integrate security monitoring tools like tcpdump into the embedded Linux build system
- Validated system-wide security by performing controlled exploitation testing, including reverse shells and credential brute-forcing
- Strengthened backend data integrity by configuring Row Level Security (RLS) and encryption for sensitive IoT device data
    `,
    link: "https://www.toro.com"
  },
  {
    slug: "ai-integrated-tutoring-web-application",
    title: "AI Integrated Tutoring Web Application",
    company: "SAT Math Tutoring",
    period: "Jan. 2024 – May 2025",
    image: "/images/experience/ai-tutor.png",
    images: [
      {
        src: "/images/experience/ai-tutor-1.png",
        caption: "This is the main worksheet page. The previews are built using client-side components and called into this server-rendered page."
      },
      {
        src: "/images/experience/ai-tutor-2.png",
        caption: "Python with OpenAI is used for problem generation. The prompt is crafted carefully to ensure database compatibility."
      },
      {
        src: "/images/experience/ai-tutor-3.png",
        caption: "Example of a lesson output using markdown and inline text for math and chemistry expressions."
      },
      {
        src: "/images/experience/ai-tutor-4.png",
        caption: "Dynamically generated lesson page for quadratic equations using Next.js for high performance."
      },
      {
        src: "/images/experience/ai-tutor-5.png",
        caption: "Question sets grouped by subsection, resulting in over 900 static, SEO-friendly pages."
      },
      {
        src: "/images/experience/ai-tutor-6.png",
        caption: "Digital modules with built-in timers and scoring to track student progress."
      },
      {
        src: "/images/experience/ai-tutor-7.png",
        caption: "Authentication and user data management implemented via Supabase and Google OAuth."
      },
      {
        src: "/images/experience/ai-tutor-8.png",
        caption: "Database schema design optimized for scale and data integrity using PostgreSQL."
      }
    ],
    summary: "Built a full-stack tutoring web app with dynamic question generation.",
    tech: ["Python", "Next.js", "OpenAI", "Supabase", "EmailJS"],
    moreDetails: `
- Generated 1800+ questions using OpenAI in Python with answer choices to dynamically populate modules
- Utilized Supabase (PostgreSQL) for authentication to track progress and store 10,000+ questions
- Dynamically rendered data into pages using Next.js framework and ORM SQL queries
- Built a modular educational site to manage tutoring students and content
    `,
    link: "https://www.stillymathpro.com"
  },
  {
    slug: "hackathon-chatbot-language-model-ai",
    title: "Hackathon Chatbot Language Model AI",
    company: "Fetii Hackathon with Agentic AI",
    period: "Sept. 2025",
    image: "/images/experience/hackathon.png",
    images: [
      { src: "/images/experience/hackathon-1.png", caption: "Demo of the AI chatbot." },
      { src: "/images/experience/hackathon-2.png", caption: "Backend code hosted on Render using Pandas DataFrame Agent." },
      { src: "/images/experience/hackathon-3.png", caption: "Backend of the dataframe agent where data is processed for analysis." },
      { src: "/images/experience/hackathon-4.png", caption: "Prompting logic matching dataframe columns using FastAPI." },
      { src: "/images/experience/hackathon-5.png", caption: "Properly formatted UI/UX rendering tables from AI results." }
    ],
    summary: "Developed an AI chatbot for analyzing rideshare data.",
    tech: ["Python", "OpenAI", "Pandas", "Next.js"],
    moreDetails: `
- Built a full-stack web application using real rideshare data to provide insightful responses
- Utilized Python backend and a Pandas dataframe agent to interact with the SQL database for analysis/predictions
- Implemented querying from human language without hallucination, achieving 90% accuracy
- Deployed backend on Render and frontend on Vercel
    `,
    link: "https://rideshareai.vercel.app"
  },
  {
    slug: "soccer-field-directory",
    title: "Soccer Field Directory",
    company: "Personal Project",
    period: "2025",
    image: "/images/experience/soccer-directory.png",
    images: [
      { src: "/images/experience/soccer-directory-1.png", caption: "Home page with search and browse functionality." },
      { src: "/images/experience/soccer-directory-2.png", caption: "Interactive map view using Leaflet and geocoding." },
      { src: "/images/experience/soccer-directory-3.png", caption: "Field card showing availability and pricing." },
      { src: "/images/experience/soccer-directory-4.png", caption: "Firebase database and Cloudinary integration for field management." }
    ],
    summary: "Built a soccer field directory to solve local booking and discovery issues.",
    tech: ["Next.js", "Firebase", "Leaflet", "Cloudinary", "Admin Panel"],
    moreDetails: `
- Built a full-stack web application using Next.js and Firebase for dynamic field management
- Implemented filter functionality to search by location, amenities, and availability
- Integrated interactive map with Leaflet and photo uploads via Cloudinary
- Built admin functions for managing fields, approvals, and user interactions
    `,
    link: "https://soccerfieldrental.net",
    github: "https://github.com/yourusername/soccer-directory"
  }
];