export const ANTIGRAVITY_ROLES = [
    "Frontend Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "Unity Game Developer",
    ".NET Engineer",
    "Data Scientist",
    "DevOps Engineer"
];

export const TECH_TAGS = [
    "React", "Vue", "TypeScript", "Tailwind CSS",
    "Three.js", "React Three Fiber", "WebGL",
    "Unity", "C#", ".NET Core", "MSSQL",
    "Python", "Node.js", "Next.js", "Docker", "Kubernetes",
    "WPF", "MaterialDesignInXaml", "HandyControl", "CommunityToolkit.Mvvm"
];

export const DEPLOYMENT_TAGS = [
    "Frontend", "Backend", "Local",
    "Cloud", "Docker", "Windows", "Linux"
];

export const ANTIGRAVITY_RULES = [
    // Core Philosophy
    "KISS Principle: Keep It Simple, Stupid. Prefer the most direct and stable implementation.",
    "First Principles: Analyze problems from First Principles.",
    "Fact-Based: Facts are the highest standard. Technical hazards (e.g., TCP sticking) must be addressed frankly.",

    // Process & Workflow
    "Progressive Development: Core flow first (Upload -> List -> Push), then details.",
    "Structured Process: Follow 'Ideation -> Review -> Task Breakdown'.",
    "Contract First: Establish Swagger interfaces and TCP command formats before development.",
    "Git: Follow Conventional Commits (feat/fix/docs/refactor)",

    // Architecture & Design Patterns
    "Layered Architecture: Strictly follow View -> Logic -> Data one-way dependency flow.",
    "Componentization: Follow Single Responsibility Principle. Separate UI and Logic (Container/Presentational).",
    "Decoupling: Strictly separate business logic from hardware communication layers.",
    "Event-Driven: Use Pub/Sub for complex interactions to reduce coupling.",
    "Dependency Inversion: Core logic should not depend on concrete implementations; use Dependency Injection.",

    // Coding Standards
    "State Management: Avoid Prop Drilling. Clearly define global vs. local state.",
    "Functional Programming: Prefer pure functions and composition. Reduce side effects.",
    "Error Handling: Backend APIs must catch exceptions and return standard JSON.",
    "Comments: Critical logic (TCP/Sharding) must have detailed comments.",
    "Avoid Long Files: Avoid files > 400 lines. Split functionality.",

    // WPF Specific Rules
    "WPF Architecture: Strictly follow MVVM. No business logic in View (Code-Behind Zero).",
    "WPF Performance: Enable UI Virtualization for long lists. Async image loading.",
    "WPF Threads: No heavy operations on UI thread. Use Task/Async/Await.",
    "WPF Resources: Prefer StaticResource. Use DynamicResource only for theming.",
    "WPF Debugging: Enable DataBinding debugging. Fix binding warnings immediately.",

    // Performance & Security
    "Performance: Avoid unnecessary re-renders (React.memo/useMemo). Virtualize large lists.",
    "Large Files: Implement chunked streaming for files > 1GB.",
    "Security: All external inputs must be validated and sanitized.",
    "UI/UX: Follow the 'Three-Column Layout' and Ant Design style."
];
