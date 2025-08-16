const projects = [
  {
    id: "stock-prediction",
    title: "Machine Learning for Stock Return Prediction",
    date: "Jun 2025",
    summary: "Built a model via feature engineering and multi-algorithm experimentation (ranked 2 / 960 teams)",
    details: "Developed a comprehensive machine learning model for stock return prediction as part of the Qube Research & Technologies Data Challenge. The project involved extensive feature engineering, testing multiple algorithms, and optimizing model performance. Successfully ranked 2nd out of 960 participating teams through innovative approaches to financial time series prediction and risk modeling.",
    tags: ["Python", "Scikit-learn", "Feature Engineering", "Finance"],
    github: "#",
    pdf: "attached_assets/PAPER_TITLE_1755376771851.pdf"
  },
  {
    id: "vc-saas",
    title: "AI-Powered SaaS for VC Knowledge Management",
    date: "Sep – Nov 2025",
    summary: "Ideated and prototyped an AI-driven SaaS platform for venture capital insights",
    details: "Conceptualized and developed a prototype for an AI-powered SaaS platform designed to revolutionize knowledge management in the venture capital industry. The platform leverages natural language processing and machine learning to analyze market trends, investment opportunities, and portfolio performance. This entrepreneurship project showcased the potential of AI in financial services.",
    tags: ["AI/ML", "SaaS", "NLP", "Entrepreneurship"],
    github: "#",
    pdf: "#"
  },
  {
    id: "wbc-classification",
    title: "Deep Learning for White Blood Cell Classification",
    date: "Mar – Jun 2024",
    summary: "Built and deployed CNN for classifying WBC subtypes using PyTorch, TensorFlow, and Streamlit",
    details: "Developed a comprehensive deep learning solution for automated white blood cell classification using convolutional neural networks. The project involved creating a robust CNN architecture capable of accurately identifying different WBC subtypes from microscopic images. Implemented the solution using both PyTorch and TensorFlow frameworks, and deployed the model as a user-friendly web application using Streamlit.",
    tags: ["PyTorch", "TensorFlow", "Streamlit", "Computer Vision"],
    github: "#",
    pdf: "#"
  },
  {
    id: "coral-bleaching",
    title: "Coral Bleaching Detection using ML and Ray Tracing",
    date: "Nov – Dec 2023",
    summary: "Simulated coral reef images using ray tracing and trained ML models to detect bleached corals",
    details: "Collaborated with CRC Lab, Ifremer, and Airbus to develop an innovative approach for coral bleaching detection. The project combined advanced ray tracing techniques to simulate realistic coral reef environments with machine learning models trained to identify bleaching patterns. This interdisciplinary work contributed to marine conservation efforts.",
    tags: ["Machine Learning", "Ray Tracing", "Computer Vision", "Environment"],
    github: "#",
    pdf: "#"
  },
  {
    id: "surfactant-optimization",
    title: "Deep RL for Surfactant Therapy Optimization",
    date: "Dec 2024 – Jun 2025",
    summary: "Developed Deep Reinforcement Learning pipeline to optimize surfactant injection parameters",
    details: "Created a comprehensive Deep Reinforcement Learning system to optimize surfactant replacement therapy for adult respiratory distress syndrome. The project involved building a physics-based 1D simulation of pulmonary surfactant propagation and designing a sophisticated RL environment. Implemented both single and multi-step RL algorithms to determine optimal injection parameters.",
    tags: ["Deep Reinforcement Learning", "Physics Simulation", "Medical AI"],
    github: "#",
    pdf: "#"
  }
];

const publications = [
  {
    id: "surfactant-journal",
    title: "Optimizing surfactant replacement therapy for large respiratory systems: a coupled modeling and AI approach",
    authors: "P. Meligat, G. Roncin, E. Hachem",
    venue: "Journal Publication (in preparation)",
    year: 2025,
    description: "This paper presents a novel approach combining physics-based modeling with artificial intelligence to optimize surfactant replacement therapy in adult respiratory systems. The work demonstrates how Deep Reinforcement Learning can be applied to medical treatment optimization, contributing to potentially life-saving treatments for adult respiratory distress syndrome.",
    link: "https://google.com",
    status: "In Preparation"
  },
  {
    id: "surfactant-esb",
    title: "Optimizing surfactant replacement therapy for large respiratory systems: a coupled modeling and AI approach",
    authors: "P. Meligat, G. Roncin, E. Hachem",
    venue: "30th Congress of the European Society of Biomechanics, Zurich, Switzerland",
    year: 2025,
    description: "Conference presentation at the 30th Congress of the European Society of Biomechanics, showcasing our AI-driven approach to respiratory therapy optimization. This work highlights the interdisciplinary collaboration between computational mechanics and artificial intelligence in medical applications.",
    link: "https://google.com",
    status: "Accepted"
  },
  {
    id: "surfactant-biomech",
    title: "A combined modeling and AI-driven optimization approach to enhance surfactant replacement therapy in adult lungs",
    authors: "P. Meligat, G. Roncin, E. Hachem",
    venue: "50ème Congrès de la Société de Biomécanique, Marseille, France",
    year: 2025,
    description: "Presentation at the French Society of Biomechanics congress, demonstrating the application of combined mathematical modeling and artificial intelligence for medical treatment enhancement. This research contributes to the development of personalized treatment strategies for respiratory therapy.",
    link: "https://google.com",
    status: "Accepted"
  }
];

const experience = [
  {
    role: "Machine Learning Intern",
    org: "MIRACL.ai, AP-HP Lariboisière, Paris, France",
    period: "Sep 2025 – Feb 2026",
    details: "Built ML models to predict cardiovascular events using clinical, biological and imaging data. Contributed to cardiovascular risk prevention tools."
  },
  {
    role: "Research Intern - Python Developer",
    org: "CEMEF Laboratory, CNRS, Sophia Antipolis, France",
    period: "Dec 2024 – Jun 2025",
    details: "Contributed to research for treating adult respiratory distress by developing optimized surfactant delivery methods. Built a physics-based 1D simulation from scratch in Python and designed a full Deep Reinforcement Learning pipeline."
  }
];

const education = [
  {
    school: "École des Mines de Paris, France",
    period: "Sep 2023 – Sep 2027",
    details: "Major: Artificial Intelligence Engineering (Master's Degree). Expected: M2 MVA – Mathematical Vision and Learning, ENS Paris-Saclay (2027)"
  },
  {
    school: "Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio), Brazil",
    period: "Feb – Jun 2025",
    details: "Academic Exchange Semester. Courses: Statistical Learning, Cognitive Science, Entrepreneurship"
  },
  {
    school: "CPGE (MPSI – PSI*), Lycée Descartes, Tours, France",
    period: "Sep 2021 – Jul 2023",
    details: "Competitive preparatory classes for French Grandes Écoles. Top 40 national rank (Mines-Ponts 36th, CentraleSupélec 31st)"
  }
];

const languages = ["French (Native)", "English (C1)", "Portuguese (B1)", "Spanish (B1)"];
const programming = ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "Streamlit", "GitHub", "C++", "HTML/CSS"];

// Navigation function
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Render projects
function renderProjects() {
  const container = document.getElementById("projectList");
  container.innerHTML = "";
  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p><em>${p.date}</em></p>
      <p>${p.summary}</p>
      <div style="margin: 10px 0;">
        ${p.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}
      </div>
      <button onclick="showProjectDetail('${p.id}')">Learn more</button>
    `;
    container.appendChild(card);
  });
}

// Show project detail
function showProjectDetail(id) {
  const project = projects.find(p => p.id === id);
  const detailDiv = document.getElementById("projectDetail");
  detailDiv.innerHTML = `
    <button onclick="hideProjectDetail()">← Back to Projects</button>
    <h3>${project.title}</h3>
    <p><em>${project.date}</em></p>
    <p>${project.details}</p>
    <div style="margin: 15px 0;">
      ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}
    </div>
    <div class="buttons">
      ${project.github !== "#" ? `<a href="${project.github}" target="_blank" class="btn-outline">GitHub Repository</a>` : ""}
      ${project.pdf !== "#" ? `<a href="${project.pdf}" target="_blank" class="btn-outline">View Presentation</a>` : ""}
    </div>
  `;
  detailDiv.classList.remove("hidden");
  document.getElementById("projectList").classList.add("hidden");
}

// Hide project detail
function hideProjectDetail() {
  document.getElementById("projectDetail").classList.add("hidden");
  document.getElementById("projectList").classList.remove("hidden");
}

// Filter projects
function filterProjects() {
  const searchTerm = document.getElementById("searchProject").value.toLowerCase();
  const cards = document.querySelectorAll("#projectList .card");
  
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Render publications
function renderPublications() {
  const container = document.getElementById("pubList");
  container.innerHTML = "";
  publications.forEach(pub => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${pub.title}</h3>
      <p><strong>Authors:</strong> ${pub.authors}</p>
      <p><strong>Venue:</strong> ${pub.venue}</p>
      <p><strong>Status:</strong> ${pub.status}</p>
      <p><em>${pub.year}</em></p>
      <button onclick="showPublicationDetail('${pub.id}')">Learn more</button>
    `;
    container.appendChild(card);
  });
}

// Show publication detail
function showPublicationDetail(id) {
  const publication = publications.find(p => p.id === id);
  const detailDiv = document.getElementById("publicationDetail");
  detailDiv.innerHTML = `
    <button onclick="hidePublicationDetail()">← Back to Publications</button>
    <h3>${publication.title}</h3>
    <p><strong>Authors:</strong> ${publication.authors}</p>
    <p><strong>Venue:</strong> ${publication.venue}</p>
    <p><strong>Status:</strong> ${publication.status}</p>
    <p><em>${publication.year}</em></p>
    <p>${publication.description}</p>
    <div class="buttons">
      <a href="${publication.link}" target="_blank" class="btn-outline">View Publication</a>
    </div>
  `;
  detailDiv.classList.remove("hidden");
  document.getElementById("pubList").classList.add("hidden");
}

// Hide publication detail
function hidePublicationDetail() {
  document.getElementById("publicationDetail").classList.add("hidden");
  document.getElementById("pubList").classList.remove("hidden");
}

// Render about section
function renderAbout() {
  // Education
  const eduList = document.getElementById("eduList");
  education.forEach(edu => {
    const div = document.createElement("div");
    div.className = "cv-entry";
    div.innerHTML = `
      <div class="cv-entry-title">${edu.school}</div>
      <div class="cv-entry-period">${edu.period}</div>
      <div class="cv-entry-details">${edu.details}</div>
    `;
    eduList.appendChild(div);
  });

  // Experience
  const expList = document.getElementById("expList");
  experience.forEach(exp => {
    const div = document.createElement("div");
    div.className = "cv-entry";
    div.innerHTML = `
      <div class="cv-entry-title">${exp.role}</div>
      <div class="cv-entry-org">${exp.org}</div>
      <div class="cv-entry-period">${exp.period}</div>
      <div class="cv-entry-details">${exp.details}</div>
    `;
    expList.appendChild(div);
  });

  // Programming skills
  const progSkills = document.getElementById("progSkills");
  progSkills.textContent = programming.join(", ");

  // Languages
  const langSkills = document.getElementById("langSkills");
  langSkills.textContent = languages.join(", ");
}

// Initialize
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderProjects();
  renderPublications();
  renderAbout();
});

// Show home section by default
showSection('home');