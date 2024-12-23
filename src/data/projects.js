export const allProjects = [
  {
    name: "GNN-Driven Drug Interaction Predictor",
    category: "Machine Learning",
    year: "2023",
    description: "A comprehensive platform leveraging Graph Neural Networks to predict drug-drug interactions and potential side effects, helping researchers streamline the drug discovery process.",
    longDescription: "This platform leverages Graph Neural Networks (GNNs) to predict drug-drug interactions and potential side effects, transforming the drug discovery process. By representing drugs as graphs—where atoms are nodes and bonds are edges—the GNN learns complex molecular patterns to identify interactions with high accuracy. It processes molecular data from SMILES strings and uses advanced modeling techniques to streamline drug development, reducing costs and risks.",
    technologies: ["Python", "PyTorch", "NetworkX", "scikit-learn", "RDKit", "Docker"],
    link: "https://github.com/rverma6/drug-interaction-gnn.git",
    preview: "/images/gnn-preview.svg",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    name: "How Can I Relate This Back to Hardware?",
    category: "AI/ML",
    year: "2023",
    description: "A fun project inspired by my meche friend who relates everything to hardware. Give it a topic, and it'll find a way to bring it back to hardware engineering!",
    longDescription: "Created an entertaining AI-powered application that mimics my mechanical engineering friend's unique ability to connect any topic back to hardware engineering. Users can input any subject, and the system generates creative, often humorous explanations drawing parallels to mechanical engineering concepts and hardware design principles.",
    technologies: ["Python", "OpenAI API", "Flask", "React", "MongoDB", "Docker"],
    link: "#",
    preview: "/images/hardware-preview.svg",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "Recidivism Prediction with Fairness Assessment",
    category: "Machine Learning",
    year: "2023",
    description: "Built machine learning models to predict recidivism while evaluating and mitigating algorithmic bias across demographic groups.",
    longDescription: "Developed neural networks and random forest models to predict recidivism using demographic and criminal data, with a focus on fairness metrics. Implemented both baseline and adversarial models to assess and mitigate potential biases related to race and gender. Used SMOTE for class imbalance and achieved 70.64% accuracy while reducing demographic parity difference from 0.5751 to 0.4866.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "SMOTE", "Pandas", "NumPy"],
    link: "https://github.com/rverma6/recidivism-prediction-champaign",
    preview: "/images/recidivism-preview.svg",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    name: "Fake Schema Generator",
    category: "Web Development",
    year: "2023",
    description: "AI-powered platform that generates realistic test data based on user-defined database schemas with real-time editing capabilities.",
    longDescription: "Built a dynamic schema generation tool that creates and populates database tables with realistic test data. Users can input queries to generate skeleton schemas, which are then populated with customizable test data. Integrated OpenAI for intelligent data generation and Redis for caching, with a Supabase backend for real-time collaboration.",
    technologies: ["JavaScript", "OpenAI API", "Redis", "Supabase", "React", "Node.js"],
    link: "#",
    preview: "/images/schema-preview.svg",
    color: "from-orange-500/20 to-rose-500/20"
  },
  {
    name: "Smart Room Cleanup Assistant",
    category: "Computer Vision",
    year: "2023",
    description: "Computer vision application that analyzes room photos to create personalized, step-by-step cleaning guides.",
    longDescription: "Developed an AI-powered application that uses YOLO object detection to analyze photos of messy rooms and generate prioritized cleaning instructions. The system identifies objects, assesses clutter patterns, and creates customized cleaning plans to help users tackle organization without feeling overwhelmed.",
    technologies: ["Python", "YOLO", "OpenCV", "TensorFlow", "Flask", "React"],
    link: "#",
    preview: "/images/smart-room-cleanup-assistant-preview.svg",
    color: "from-pink-500/20 to-purple-500/20"
  },
  {
    name: "Destination Wedding Travel Platform",
    category: "Full Stack",
    year: "2023",
    description: "Comprehensive travel coordination platform for destination wedding planning, streamlining guest travel arrangements.",
    longDescription: "Created an all-in-one platform that simplifies destination wedding travel coordination. The system enables wedding planners to communicate with guests efficiently while providing integrated booking capabilities for flights and accommodations. Features real-time updates and collaborative planning tools.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS", "Stripe API"],
    link: "#",
    preview: "/images/destination-wedding-travel-platform-preview.svg",
    color: "from-cyan-500/20 to-blue-500/20"
  }
]; 