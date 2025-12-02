export const experience = [
  {
    title: "Software/Cybersecurity Engineer",
    company: "The Toro Company | Intern",
    period: "May 2025 – Aug. 2025",
    image: "/images/experience/toro.png", // optional logo
    summary: "Developed cryptographic algorithms and communication protocols for embedded systems.",
    tech: ["C/C++", "SQL", "Qt", "STM32", "Yocto"],
    moreDetails: `
- Developed and benchmarked cryptographic algorithms (AES, ChaCha20) in C/C++ across multiple STM32 microcontrollers, improving performance by 5x
- Assisted in developing a communication protocol across all interfaces, implementing object-oriented design and data structures for performance and scalability
- Encrypted data at rest by sanitizing SQL queries and managed the database through SQLite ensuring proper storage and schema design
- Utilized Qt framework to develop GUI on top of Yocto and called APIs to initiate network and Bluetooth connections, increasing compliance by 60%
- Maintained SQL based database systems and transferred from SQLite to SQL Cipher for implementation
`,
    link: null
  },
  {
    title: "AI Integrated Tutoring Web Application",
    slug: "ai-integrated-tutoring-web-application",
    company: "SAT Math Tutoring",
    period: "Jan. 2024 – May 2025",
    image: "/images/experience/ai-tutor.png",
    summary: "Built a full-stack tutoring web app with dynamic question generation.",
    tech: ["Python", "Next.js", "OpenAI", "Supabase", "EmailJS"],
    moreDetails: `
- Generated 1800+ questions using OpenAI in Python with answer choices to dynamically populate modules based on course, sections, and subsections
- Utilized Supabase (PostgreSQL) for authentication to track progress and store 10,000+ questions, user data, session logs, and subscriptions
- Dynamically rendered data into pages using Next.js framework and ORM SQL queries
- Built a modular educational site to manage tutoring students and content
`,
    link: null
  },
  {
    title: "Hackathon Chatbot Language Model AI",
    company: "Fetii Hackathon with Agentic AI",
    period: "Sept. 2025",
    image: "/images/experience/hackathon.png",
    summary: "Developed an AI chatbot for analyzing rideshare data.",
    tech: ["Python", "OpenAI", "Pandas", "Next.js"],
    moreDetails: `
- Built a full-stack web application using real rideshare data to provide insightful responses when prompted
- Utilized Python backend to build ML/AI models and a Pandas dataframe agent to interact with the SQL database for analysis/predictions
- Implemented querying from human language without hallucination, achieving 90% accuracy
- Deployed backend on Render and frontend on Vercel
`,
    link: null
  },
  {
    title: "Machine Learning Assistant",
    company: "Texas A&M University Chemistry Department | Data Science Assistant",
    period: "Jan. 2019 – May. 2022",
    image: "/images/experience/ml-assistant.png",
    summary: "Applied ML to predict chemical reactions and analyze data.",
    tech: ["Python", "PyTorch", "Scikit-learn", "NLP", "Pandas", "NumPy"],
    moreDetails: `
- Utilized ML models (linear regression, random forests, naive Bayes) to predict chemical reactions based on published data
- Performed data mining on published articles to extract experimental data
- Implemented feature engineering algorithms and data cleaning, improving accuracy by 30%
- Leveraged Python libraries and tools such as PyTorch, Scikit-learn, NLP, Pandas, and NumPy
`,
    link: null
  }
];
