export const soloProjects = {
  fullstack: [
    {
      name: "ChainForge",
      tag: "Full-stack · MERN",
      description:
        "Habit tracker that builds daily streaks, visualises progress with charts and a calendar heatmap, and keeps your chains unbroken.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com/Mahira-k06",
      demo: "https://chainforge-five.vercel.app",
    },
    {
      name: "SyncBoard",
      tag: "Full-stack · Real-time",
      description:
        "Real-time collaborative Kanban board with live presence indicators, optimistic UI, LexoRank ordering, and atomic race-condition prevention for concurrent edits.",
      stack: ["Next.js", "Socket.io", "MongoDB", "TanStack Query", "@dnd-kit"],
      github: "https://github.com/Mahira-k06",
      demo: null,
    },
    {
      name: "Krino",
      tag: "Full-stack · AI",
      description:
        "AI legal training platform — courtroom simulations, IRAC reasoning, rubric-graded feedback across 6 legal domains, and an instructor mode for scenario management.",
      stack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "JWT"],
      github: "https://github.com/Mahira-k06",
      demo: "https://krino-law.vercel.app",
    },

  ],
  frontend: [
    {
      name: "Lumentrace",
      tag: "Frontend · Dashboard",
      description:
        "Real-time analytics dashboard streaming live events via WebSocket with LTTB downsampling, anomaly detection, and react-window virtualisation. Lighthouse 90+, LCP < 2.5s, CLS 0.",
      stack: ["React 18", "TypeScript", "WebSocket", "Chart.js", "TimescaleDB", "Docker"],
      github: "https://github.com/Mahira-k06",
      demo: null,
    },
  ],
  systems: [
    {
      name: "VeloxDB",
      tag: "Systems · Java",
      description:
        "Redis-inspired in-memory key-value store in Java — TTL expiry, LRU eviction, thread-safe concurrency, and file persistence. Built to understand how real databases work under the hood.",
      stack: ["Java", "ConcurrentHashMap", "Multithreading", "File I/O", "LRU Eviction"],
      github: "https://github.com/Mahira-k06/VeloxDB",
      demo: null,
    },
    {
      name: "Rate Limiter",
      tag: "Systems · Java",
      description:
        "Thread-safe API rate limiter in Java — per-user isolation, fixed-window algorithm, ConcurrentHashMap + AtomicInteger, simulating real-world concurrent API traffic at scale.",
      stack: ["Java", "ConcurrentHashMap", "AtomicInteger", "Multithreading", "Synchronization"],
      github: "https://github.com/Mahira-k06/ThreadSafe-RateLimiter",
      demo: null,
    },
    {
      name: "LRU Cache",
      tag: "Systems · C++",
      description:
        "LRU Cache simulator in C++ — O(1) get/put via doubly linked list + unordered_map, automatic LRU eviction, hit/miss tracking, generic template support, and Rule of 5 memory safety.",
      stack: ["C++17", "Doubly Linked List", "unordered_map", "Templates", "Rule of 5"],
      github: "https://github.com/Mahira-k06",
      demo: null,
    },
  ],
};


export const groupProjects = [
{
    name: "Astitva",
    tag: "Hackster 2025 · Team GAMA4CE",
    description:
      "An AI-powered life companion that unifies mental health, career, and personal growth into a living, visual 'Life Tree'. Uses Mirror AI to look at past user data, analyze emotional patterns, and offer tailored, reflective feedback.",
    stack: ["React", "Node.js", "Firebase", "Python", "TensorFlow", "OpenAI API"],
    github: "https://github.com/Mahira-k06/Astitva",
    demo: "https://astitva-nine.vercel.app", 
  },
  {
    name: "CampusHustle",
    tag: "Code For Bharat S2 · Team GAMA4CE",
    description:
      "Built for Code For Bharat Season 2 Hackathon. A digital ecosystem empowering students to bridge classroom learning with real-world exposure via a freelance marketplace, smart skill-matching, and team-building hubs.",
    stack: ["React", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/Mahira-k06/CampusHustle",
    demo: "https://campushustle-og.vercel.app", 
  },
  {
    name: "Ithikosh",
    tag: "SIH 2025 · Team GAMA4CE",
    description:
      "Built for the Smart India Hackathon (SIH) 2025. An interactive platform designed for timeline curation, mapping, and historical documentation, leveraging a modular architecture and real-time database syncing.",
    stack: ["React", "Firebase", "CSS Modules"],
    github: "https://github.com/Mahira-k06/Ithikosh",
    demo: "https://ithikosh.vercel.app",
  },
];
