const Employees = [
  {
    id: 1,
    email: "abdul.hamid@company.com",
    password: "123",
    tasks: [
      {
        title: "Design Dashboard UI",
        description:
          "Create modern responsive dashboard layout using TailwindCSS and React.",
        date: "2025-10-25",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Update Logo & Branding",
        description: "Revise logo design and adjust brand color palette.",
        date: "2025-10-28",
        category: "Branding",
        active: false,
        newTask: true,
        completed: false,
      },
      {
        title: "Client Feedback Review",
        description:
          "Review design feedback and implement necessary UI improvements.",
        date: "2025-10-30",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
      },
    ],
  },
  {
    id: 2,
    email: "sara.khan@company.com",
    password: "123",
    tasks: [
      {
        title: "Testing Login Module",
        description:
          "Test all login and signup features in staging environment.",
        date: "2025-10-23",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Fix UI Bugs",
        description:
          "Resolve responsive issues in employee dashboard on mobile screens.",
        date: "2025-10-24",
        category: "Frontend",
        active: false,
        newTask: true,
        completed: false,
      },
      {
        title: "Generate Test Reports",
        description: "Prepare report on the latest round of QA test cases.",
        date: "2025-10-26",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Accessibility Audit",
        description:
          "Run accessibility audit for color contrast and keyboard navigation.",
        date: "2025-10-28",
        category: "QA",
        active: false,
        newTask: true,
        completed: false,
      },
    ],
  },
  {
    id: 3,
    email: "john.doe@company.com",
    password: "123",
    tasks: [
      {
        title: "API Integration",
        description: "Integrate backend REST API with React frontend.",
        date: "2025-10-25",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Refactor Auth Logic",
        description: "Optimize Firebase authentication for faster response.",
        date: "2025-10-27",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Deploy on Vercel",
        description:
          "Deploy frontend project to Vercel and verify environment variables.",
        date: "2025-10-28",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
      },
      {
        title: "Setup Error Logging",
        description: "Implement Sentry for error tracking and reporting.",
        date: "2025-10-29",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
      },
    ],
  },
  {
    id: 4,
    email: "fahim.uddin@company.com",
    password: "123",
    tasks: [
      {
        title: "Database Optimization",
        description: "Optimize MongoDB queries for faster response time.",
        date: "2025-10-24",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Create Backup Script",
        description:
          "Write automated backup scripts for daily database snapshots.",
        date: "2025-10-25",
        category: "Backend",
        active: false,
        newTask: true,
        completed: false,
      },
      {
        title: "Security Audit",
        description:
          "Check for potential injection vulnerabilities in the backend APIs.",
        date: "2025-10-27",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Integrate JWT Auth",
        description: "Add JSON Web Token authentication for user sessions.",
        date: "2025-10-29",
        category: "Backend",
        active: false,
        newTask: true,
        completed: false,
      },
    ],
  },
  {
    id: 5,
    email: "mariam.noor@company.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Design slides for the weekly progress meeting.",
        date: "2025-10-23",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
      },
      {
        title: "Organize Team Files",
        description:
          "Rearrange shared Google Drive folders for the design team.",
        date: "2025-10-25",
        category: "Organization",
        active: false,
        newTask: true,
        completed: false,
      },
      {
        title: "Weekly Report",
        description: "Compile team updates into a single weekly report.",
        date: "2025-10-27",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
      },
      {
        title: "Plan Meeting Schedule",
        description: "Create the next week’s meeting calendar.",
        date: "2025-10-29",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
      },
    ],
  },
];

const Admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123",
  },
];

export { Employees, Admin };
