const projects = [
  {id: "stocks", title: "Machine Learning for Stock Return Prediction", date: "Jun 2025", summary: "Ranked 2nd / 960 teams in QRT Data Challenge.", details: "Built a model via feature engineering and multi-algorithm experimentation.", tags: ["ML", "Finance"], github: "#", pdf: "#"},
  {id: "vc-saas", title: "AI-Powered SaaS for VC Knowledge Management", date: "Sep–Nov 2025", summary: "Prototyped an AI-driven SaaS for venture capital insights.", details: "Developed ingestion, retrieval, prompting, and insight generation workflow.", tags: ["AI", "SaaS"], github: "#", pdf: "#"},
  {id: "wbc", title: "Deep Learning for White Blood Cell Classification", date: "Mar–Jun 2024", summary: "CNN model deployed via Streamlit for WBC classification.", details: "Designed data pipeline and trained models in PyTorch/TensorFlow.", tags: ["Deep Learning", "Healthcare"], github: "#", pdf: "#"},
  {id: "coral", title: "Coral Bleaching Detection using ML and Ray Tracing", date: "Nov–Dec 2023", summary: "Simulated coral reef images to train ML models for bleaching detection.", details: "Created synthetic datasets and evaluated domain gap with real data.", tags: ["Computer Vision", "Environment"], github: "#", pdf: "#"}
];

const publications = [
  { title: "Optimizing surfactant replacement therapy... (in preparation)", link: "#", year: 2025 },
  { title: "Optimizing surfactant replacement therapy... ESB Zurich", link: "#", year: 2025 },
  { title: "AI-driven optimization for surfactant therapy — Marseille", link: "#", year: 2025 }
];

const experience = [
  { role: "Machine Learning Intern", org: "MIRACL.ai, AP-HP Lariboisière", period: "Sep 2025 – Feb 2026" },
  { role: "Research Intern — Python Developer", org: "CEMEF Laboratory, CNRS", period: "Dec 2024 – Jun 2025" }
];

const education = [
  { school: "École des Mines de Paris", period: "Sep 2023 – Sep 2027" },
  { school: "PUC-Rio (Brazil)", period: "Feb – Jun 2025" },
  { school: "CPGE (MPSI – PSI*), Lycée Descartes", period: "Sep 2021 – Jul 2023" }
];

const skills = ["Python", "C++", "GitHub", "HTML/CSS", "French", "English", "Portuguese", "Spanish"];

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function renderProjects() {
  const container = document.getElementById("projectList");
  container.innerHTML = "";
  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${p.title}</h3><p><em>${p.date}</em></p><p>${p.summary}</p><button onclick="showProjectDetail('${p.id}')">Learn more</button>`;
    container.appendChild(card);
  });
}

function showProjectDetail(id) {
  const project = projects.find(p => p.id === id);
  const detailDiv = document.getElementById("projectDetail");
  detailDiv.innerHTML = `<button onclick="hideProjectDetail()">← Back</button><h3>${project.title}</h3><p><em>${project.date}</em></p><p>${project.details}</p><p>${project.tags.map(t => `<span class='tag'>${t}</span>`).join(" ")}</p>${project.github !== "#" ? `<a href='${project.github}' target='_blank'>GitHub</a>` : ""} ${project.pdf !== "#" ? `<a href='${project.pdf}' target='_blank'>PDF</a>` : ""}`;
  detailDiv.classList.remove("hidden");
  document.getElementById("projectList").classList.add("hidden");
}

function hideProjectDetail() {
  document.getElementById("projectDetail").classList.add("hidden");
  document.getElementById("projectList").classList.remove("hidden");
}

function renderPublications() {
  const container = document.getElementById("pubList");
  publications.forEach(pub => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<a href="${pub.link}" target="_blank">${pub.title}</a> (${pub.year})`;
    container.appendChild(div);
  });
}

function renderAbout() {
  const expList = document.getElementById("expList");
  experience.forEach(e => {
    const li = document.createElement("li");
    li.textContent = `${e.role} — ${e.org} (${e.period})`;
    expList.appendChild(li);
  });
  const eduList = document.getElementById("eduList");
  education.forEach(e => {
    const li = document.createElement("li");
    li.textContent = `${e.school} (${e.period})`;
    eduList.appendChild(li);
  });
  const skillList = document.getElementById("skillList");
  skills.forEach(s => {
    const li = document.createElement("li");
    li.className = "tag";
    li.textContent = s;
    skillList.appendChild(li);
  });
}

function sendEmail(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  window.location.href = `mailto:gregor.roncin@etu.minesparis.psl.eu?subject=Portfolio contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
}

document.getElementById("year").textContent = new Date().getFullYear();

renderProjects();
renderPublications();
renderAbout();