export const siteConfig = {
  name: "Hannah Zhang",
  title: "CS @ Rice University",
  description: "Personal website of Hannah Zhang",
  accentColor: "#1d4ed8",
  social: {
    email: "hannahjzhang@gmail.com",
    linkedin: "https://linkedin.com/in/hjz",
    github: "https://github.com/hannahjzhang",
  },
  aboutMe: `
    <p>I’m Hannah Zhang, a Computer Science major at Rice University with minors in Business and Asian Studies. I like building software that’s helpful and easy to use. I also enjoy the product side of figuring out what to build and why it matters to people.</p> <br>
    <p>I’ve worked on ad features at Pinterest, internal tech tools at Emerson Collective, and web apps for nonprofits at RiceApps. Nice to e-meet you!</p>
  `,
  skills: ["Swift", "React", "Python", "Java", "Obj-c"],
  experience: [
    {
      company: "Pinterest",
      title: "Software Engineering Intern",
      dateRange: "May 2024 - Aug 2025",
      groups: [
        {
          heading: "Ad Formats Platform Team | 2025",
          bullets: [
            "Architected a modular creative overlay system, enabling advertisers to layer custom images on ad pins",
            "Integrated local inventory signals into ad metadata, increasing high-quality clicks from in-market pinners",
            "Refactored legacy Objective-C UI into SwiftUI modules, improving iOS consistency and reducing maintenance",
          ],
        },
        {
          heading: "Visual Search Team | 2024",
          bullets: [
            "Launched iPadOS expansion of \"Shop the Look\", boosting engagement through increased conversions",
            "Built infinite-scroll landing page with category filters, merging shopping and organic for seamless discovery",
          ],
        },
      ],
    },
    {
      company: "Emerson Collective",
      title: "Technical Product Management Intern",
      dateRange: "Jun 2023 - Sept 2023",
      bullets: [
        "Engineered an Airtable, Okta, Salesforce integration, reducing 30-min workflows to under 1 min for 300+ staff",
        "Directed two end-to-end product improvement cycles for the Internal Directory and Event Calendar, drafting PRDs, orchestrating cross-functional teams, and refining UX through stakeholder interviews",
      ],
    },
  ],
  projectCategories: [
    {
      name: "RiceApps",
      projects: [
        {
          name: "UTHealth Houston",
          description: "Mobile app for personalized exercise programs and clinical tracking for patients with inflammatory myopathies",
          link: "/uploads/uthealth.pdf",
          skills: ["Mobile Dev", "React Native", "Supabase", "Node.js"],
          dateRange: "Sept 2024 – May 2025",
        },
        {
          name: "United Way Houston", 
          description: "Donor dashboard providing insights for 27K+ stakeholders",
          link: "/uploads/unitedway.pdf",
          skills: ["Web Dev", "React.js", "Next.js", "Vite", "Tailwind"],
          dateRange: "Aug 2023 – Apr 2024",
        },
        {
          name: "Sammy's House", 
          description: "Campus event platform for Rice University, matching students to events by interest",
          link: "/uploads/sammyshouse.pdf",
          skills: ["React Native", "Expo", "MongoDB"],
          dateRange: "Sept 2022 – May 2023",
        },
      ],
    },
    {
      name: "Class Projects",
      projects: [
        {
          name: "SLB Game Engine & Editor",
          description: "Text-based game engine and no-code editor for creating interactive training modules at work",
          skills: ["CosmosDB", "React", "Typescript"],
          dateRange: "Jan 2025 – May 2025",
        },
        {
          name: "OwlDB Concurrent NoSQL Database",
          description: "Thread-safe NoSQL database using skip lists, SSE, and goroutines for real-time updates", 
          skills: ["Go", "REST APIs", "Postman"],
          dateRange: "Aug 2024 – Oct 2024",
        },
        {
          name: "Real-Time Messaging Client",
          description: "Slack-style web app with login, markdown, live updates, and top-tier accessibility", 
          skills: ["Typescript", "JSON", "HTML/CSS"],
          dateRange: "Oct 2024 – Dec 2024",
        },
      ],
    },
    {
      name: "Leadership",
      projects: [
        {
          name: "External Vice President, Team Lead",
          organization: "Rice 180 Degrees Consulting",
          bullets: [
            "Cultivated partnerships with nonprofit executives, aligning them with analysts",
            "Led a university-wide case competition with Accenture",
            "Built a data reporting toolkit that boosted partner engagement by 20%"
          ],
          dateRange: "Jan 2023 – Dec 2024",
        },
        {
          name: "Events Lead",
          organization: "Rice Women in Computer Science (CSters)",
          bullets: [
            "Host 15+ events including lunches and company workshops",
            "Mentored underclassmen on career planning and course selection"
          ],
          dateRange: "Jan 2023 - May 2025",
        },
        {
          name: "Teaching Assistant",
          organization: "Rice University Computer Science",
          bullets: [
            "Mentored 15+ students on Java and SOLID principles",
            "Reviewed 100+ assignments with in-line feedback to ensure rigor and clarity"
          ],
          dateRange: "Aug 2024 - Dec 2024",
        },
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
