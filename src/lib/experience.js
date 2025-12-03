export const experience = [
  
  {
    slug: "ai-integrated-tutoring-web-application",
    title: "AI Integrated Tutoring Web Application",
    company: "SAT Math Tutoring",
    period: "Jan. 2024 – May 2025",
    image: "/images/experience/ai-tutor.png",
    images: [
      {
        src: "/images/experience/ai-tutor-1.png",
        caption: "This is the main worksheet page. The previews are built using client-side components and called into this server-rendered page. The server rendered page dynamically fetches all courses, sections, and subsections from the PostgreSQL database."
      },
      {
        src: "/images/experience/ai-tutor-2.png",
        caption: `Python with OpenAI is used for problem generation. However, it is not just simple generation.
        To ensure of quality generation and compatibility with the database and the front end, the prompt is 
        crafted very carefully to save into a CSV.`
      },
      {
        src: "/images/experience/ai-tutor-3.png",
        caption: `This is an example of a lesson output. It properly uses markdown format and inline text for math and chemistry expressions.`
      },
      {
        src: "/images/experience/ai-tutor-4.png",
        caption: `Here is an example of one of the lesson pages, specifically about quadratic equations.
        It is very important to format the square roots, fractions, and other expressions.
        All the lesson pages are dynamically generated using Next.js into its own static, server-rendered page.`
      },
      {
        src: "/images/experience/ai-tutor-5.png",
        caption: `Similar to the lessons. These are questions that are generated. 
        Every 10 is grouped into a set. These are also dynmaically rendered to create it own set.
        Each subsection has 5 sets, so there are around 900 static pages currently.`
      },
      {
        src: "/images/experience/ai-tutor-6.png",
        caption: `With the same questions, I made digital modules also an option to track the time and scores.`
      },
      {
        src: "/images/experience/ai-tutor-7.png",
        caption: `Authentication was implemented with the help of Supabase. Google OAuth is also added for convenience.`
      },
      {
        src: "/images/experience/ai-tutor-8.png",
        caption: `This is small snapshot of the database design. It is designed to reduce redundancies as much as possible
        and follow best practices.`
      }
    ],
    summary: "Built a full-stack tutoring web app with dynamic question generation.",
    tech: ["Python", "Next.js", "OpenAI", "Supabase", "EmailJS"],
    moreDetails: `
- Generated 1800+ questions using OpenAI in Python with answer choices to dynamically populate modules based on course, sections, and subsections
- Utilized Supabase (PostgreSQL) for authentication to track progress and store 10,000+ questions, user data, session logs, and subscriptions
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
      {
        src: "/images/experience/hackathon-1.png",
        caption: `Demo of the AI chatbot.`
      },
      {
        src: "/images/experience/hackathon-2.png",
        caption: `This image is the backend code that is hosted on Render. Backend is built with Python.
        Pandas DataFrame Agent is used. The green is the agent thinking, based on the input. Then it interacts
        with the dataset to produce the necessary result. It is important to have proper error handling to
        not use outside data.`
      },
      {
        src: "/images/experience/hackathon-3.png",
        caption: `The code shows the backend of the dataframe agent. The data is first processed for better analysis,
        then fed into the agent along with the llm, which in this was OpenAI.`
      },
      {
        src: "/images/experience/hackathon-4.png",
        caption: `This is the prompt that it was given, which matches with the columns of the dataframe.
        Some common and helpful questions were incorporated. FastAPI was used to interact with the Next.js frontend.`
      },
      {
        src: "/images/experience/hackathon-5.png",
        caption: `The result was checked again to be sure, and rendered in proper format for UI/UX.
        Tables were also rendered as you can see in the demo.`
      }
    ],
    summary: "Developed an AI chatbot for analyzing rideshare data.",
    tech: ["Python", "OpenAI", "Pandas", "Next.js"],
    moreDetails: `
- Built a full-stack web application using real rideshare data to provide insightful responses when prompted
- Utilized Python backend to build ML/AI models and a Pandas dataframe agent to interact with the SQL database for analysis/predictions
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
      {
        src: "/images/experience/soccer-directory-1.png",
        caption: `This is the home page for the soccer fields. You can search or goto the browse page
        directly. Or, you can scroll down to see featured fields as well.`
      },
      {
        src: "/images/experience/soccer-directory-2.png",
        caption: `I use leaflet and geocoding to display the fields on the map.
        Once the user clicks on a card, it jumps to that field for an interactive view.`
      },
      {
        src: "/images/experience/soccer-directory-3.png",
        caption: `This is the card for each field. You can view availability to book, or prices if the ownder wants to share.`
      },
      {
        src: "/images/experience/soccer-directory-4.png",
        caption: `This is just a simple firebase database that dynamically adds the new fields. The images 
        were uploaded using Cloudinary.`
      }
    ],
    summary: `I am very passionate about soccer in my personal life, and play weekly.
        One common issue that we ran into was looking for a field and booking it.
        Therefore, as a fun project, I built this site!`,
    tech: ["Next.js", "Firebase", "Leaflet", "Cloudinary", "Admin Panel"],
    moreDetails: `
- Built a full-stack web application using Next.js and Firebase for dynamic field management
- Implemented filter functionality to search by location, amenities, and availability
- Added "Claim Field" feature for field owners to submit ownership requests
- Integrated interactive map with Leaflet and "jump to location" functionality
- Enabled photo uploads via Cloudinary
- Built admin functions for managing fields, approvals, and user interactions
    `,
    link: "https://soccerfieldrental.net",
    github: "https://github.com/yourusername/soccer-directory"
  },
  // Add more projects here following the same structure

];