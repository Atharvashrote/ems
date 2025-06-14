const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completeTask: false,
        failedTask: false,
        title: "Design homepage UI",
        category: "Design",
        description: "Create wireframes and mockups for the homepage.",
        date: "2025-06-12"
      },
      {
        active: false,
        newTask: false,
        completeTask: true,
        failedTask: false,
        title: "Fix login bug",
        category: "Development",
        description: "Resolve the issue with user authentication failure.",
        date: "2025-06-10"
      },
      {
        active: false,
        newTask: false,
        completeTask: false,
        failedTask: true,
        title: "Write unit tests",
        category: "Testing",
        description: "Write unit tests for the payment module.",
        date: "2025-06-08"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completeTask: false,
        failedTask: false,
        title: "Optimize database",
        category: "Database",
        description: "Improve performance by indexing key columns.",
        date: "2025-06-11"
      },
      {
        active: false,
        newTask: false,
        completeTask: true,
        failedTask: false,
        title: "Create admin panel",
        category: "Development",
        description: "Develop a dashboard for administrators.",
        date: "2025-06-09"
      },
      {
        active: true,
        newTask: false,
        completeTask: false,
        failedTask: false,
        title: "Schedule user interviews",
        category: "Research",
        description: "Plan interviews to gather feedback on the new feature.",
        date: "2025-06-10"
      },
      {
        active: false,
        newTask: false,
        completeTask: true,
        failedTask: false,
        title: "Deploy app to staging",
        category: "DevOps",
        description: "Push current build to the staging environment.",
        date: "2025-06-07"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completeTask: true,
        failedTask: false,
        title: "Write API documentation",
        category: "Documentation",
        description: "Document all public API endpoints.",
        date: "2025-06-05"
      },
      {
        active: true,
        newTask: true,
        completeTask: false,
        failedTask: false,
        title: "Update user profile page",
        category: "Frontend",
        description: "Add new fields and improve layout responsiveness.",
        date: "2025-06-13"
      },
      {
        active: false,
        newTask: false,
        completeTask: false,
        failedTask: true,
        title: "Fix image upload issue",
        category: "Bug Fix",
        description: "Handle incorrect file types and improve UX.",
        date: "2025-06-08"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completeTask: false,
        failedTask: false,
        title: "Design product icons",
        category: "Design",
        description: "Create icons for new product categories.",
        date: "2025-06-13"
      },
      {
        active: false,
        newTask: false,
        completeTask: true,
        failedTask: false,
        title: "Conduct usability testing",
        category: "UX",
        description: "Run A/B tests on checkout flow.",
        date: "2025-06-09"
      },
      {
        active: false,
        newTask: false,
        completeTask: false,
        failedTask: true,
        title: "Create onboarding email flow",
        category: "Marketing",
        description: "Draft and schedule emails for new users.",
        date: "2025-06-10"
      },
      {
        active: true,
        newTask: false,
        completeTask: false,
        failedTask: false,
        title: "Add analytics to dashboard",
        category: "Development",
        description: "Integrate Google Analytics to admin panel.",
        date: "2025-06-12"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completeTask: false,
        failedTask: false,
        title: "Develop mobile layout",
        category: "Frontend",
        description: "Ensure responsive design for mobile devices.",
        date: "2025-06-13"
      },
      {
        active: false,
        newTask: false,
        completeTask: true,
        failedTask: false,
        title: "Fix cart price rounding bug",
        category: "Bug Fix",
        description: "Correct currency rounding errors in cart.",
        date: "2025-06-06"
      },
      {
        active: false,
        newTask: false,
        completeTask: false,
        failedTask: true,
        title: "Research competitor pricing",
        category: "Analysis",
        description: "Compare pricing models of 3 competitors.",
        date: "2025-06-10"
      },
      {
        active: true,
        newTask: false,
        completeTask: false,
        failedTask: false,
        title: "Write blog post on new features",
        category: "Content",
        description: "Explain latest update in a blog post.",
        date: "2025-06-12"
      },
      {
        active: false,
        newTask: false,
        completeTask: true,
        failedTask: false,
        title: "Prepare release notes",
        category: "Documentation",
        description: "Summarize updates for version 2.3 release.",
        date: "2025-06-09"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// Get data from localStorage
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees') || 'null');
  const admin = JSON.parse(localStorage.getItem('admin') || 'null');
  return { employees, admin };
};

