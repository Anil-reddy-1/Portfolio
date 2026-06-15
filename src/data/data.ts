export const personalInfo = {
  name: "Patti Anil Reddy",
  role: "Computer Science Undergraduate",
  tagline: "Full-Stack Developer | Real-Time Systems | AI-Powered Applications",
  cgpa: "9.4",
  summary: `Computer Science undergraduate with hands-on experience in Full-Stack Development, Real-Time Systems, and AI-powered applications. Proficient in Next.js, React, React Native, Node.js, Express.js, TypeScript, Firebase, MongoDB, and modern web technologies. Passionate about building innovative products, solving complex engineering challenges, and leveraging AI to create impactful user experiences.`,
};

export const skillsData = {
  "Languages": ["TypeScript", "JavaScript (ES6+)", "Java", "Python"],
  "Frontend": ["React.js", "Next.js", "React Native", "HTML5 / CSS3", "Responsive Design"],
  "Backend": ["Node.js", "Express.js", "Firebase", "MongoDB"],
  "AI & Data": ["Generative AI", "RAG Pipeline", "Vector Databases", "Semantic Search"],
  "Systems": ["WebRTC", "Socket.IO", "System Design", "REST APIs", "Cloud Services"],
};

export const projectsData = [
  {
    id: "agent-ascend",
    title: "Agent Ascend",
    shortDescription: "Multi-model AI orchestration platform with intelligent routing.",
    description: "A multi-model AI orchestration platform that intelligently routes tasks across OpenAI, Anthropic Claude, and Google Gemini models using prompt classification, task decomposition, and cost optimization. Includes token analytics, secure AES-256 encrypted API key management, fallback mechanisms, and interactive execution visualization.",
    tech: ["React", "Node.js", "GenAI", "AES-256 Encryption"],
    github: "https://github.com/Anil-reddy-1", 
    demo: "#"
  },
  {
    id: "jrguide",
    title: "JrGuide",
    shortDescription: "Enterprise employee onboarding platform with an AI assistant.",
    description: "Enterprise employee onboarding platform featuring role-based access control, automated onboarding workflows, document verification, analytics dashboards, real-time notifications, and automated email reminders. Includes a RAG-powered AI assistant leveraging Google Gemini, embeddings, semantic search, and Firestore vector databases.",
    tech: ["Next.js", "Firebase", "Google Gemini", "Vector DB"],
    github: "https://github.com/Anil-reddy-1",
    demo: "#"
  },
  {
    id: "peernova",
    title: "PeerNova",
    shortDescription: "Full-stack tutoring platform with custom WebRTC video calls.",
    description: "A full-stack tutoring platform supporting tutor discovery, session scheduling, and real-time chat. Features custom WebRTC-based peer-to-peer video communication with Socket.IO signaling, STUN/TURN infrastructure, screen sharing, and Firebase authentication.",
    tech: ["React", "Node.js", "WebRTC", "Socket.IO", "Firebase"],
    github: "https://github.com/Anil-reddy-1",
    demo: "#"
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Full Stack Development Intern",
    company: "SkillGuru Foundation",
    duration: "Present", 
    description: [
      "Contributed to referral systems, REST API development, and user profile management.",
      "Implemented real-time communication using Socket.IO, dashboard analytics, and student leaderboards.",
      "Engineered educational diagram generation and AI-powered quiz generation using Generative AI and Retrieval-Augmented Generation (RAG).",
      "Explored and integrated vector databases, semantic search, and AI retrieval systems for ed-tech applications."
    ]
  }
];

export const journeySteps = [
  "Built foundational software engineering skills and mastered Data Structures & Algorithms (9.4 CGPA).",
  "Developed robust Full-Stack applications using React, Node.js, and MongoDB.",
  "Engineered real-time communication systems leveraging WebRTC and Socket.IO.",
  "Integrated advanced AI models (Gemini, Claude, OpenAI) into complex orchestration platforms.",
  "Built enterprise-level applications with RAG pipelines, vector databases, and semantic search capabilities."
];
