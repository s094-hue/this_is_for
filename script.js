// ===== DATA =====
const courses = [
  {
    name: "政治經濟學",
    description: "分析政治制度與經濟結果之間的互動關係。",
    skills: ["政策分析", "制度分析"]
  },
  {
    name: "計量方法",
    description: "培養資料分析與統計推論能力。",
    skills: ["資料分析", "統計方法"]
  }
];

const projects = [
  {
    name: "政治行為分析",
    shortDescription: "分析同儕對政治立場的影響",
    techStack: ["研究分析", "資料整理"]
  },
  {
    name: "個人網站",
    shortDescription: "建立具備響應式設計的作品集網站",
    techStack: ["HTML", "CSS", "JavaScript"]
  }
];

const skills = {
  programming: ["Python", "JavaScript"],
  ai_ml: ["資料分析"],
  web: ["HTML", "CSS", "響應式設計"],
  tools: ["Git", "Excel"]
};

// ===== RENDER =====
function renderProjects() {
  const container = document.getElementById("projects-container");
  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="card-title">${p.name}</div>
      <div class="card-description">${p.shortDescription}</div>
      ${p.techStack.map(t => `<span class="tag">${t}</span>`).join("")}
    `;
    container.appendChild(div);
  });
}

function renderCourses() {
  const container = document.getElementById("courses-container");
  courses.forEach(c => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="card-title">${c.name}</div>
      <div class="card-description">${c.description}</div>
      ${c.skills.map(s => `<span class="tag">${s}</span>`).join("")}
    `;
    container.appendChild(div);
  });
}

function renderSkills() {
  const container = document.getElementById("skills-container");

  const icons = {
    programming: "💻",
    ai_ml: "🤖",
    web: "🌐",
    tools: "🛠️"
  };

  const labels = {
    programming: "程式設計",
    ai_ml: "資料分析 / AI",
    web: "網頁開發",
    tools: "工具"
  };

  Object.keys(skills).forEach(key => {
    const div = document.createElement("div");
    div.className = "skill-category";

    div.innerHTML = `
      <h3>${icons[key]} ${labels[key]}</h3>
      <p>${skills[key].map(s => `✨ ${s}`).join(" ")}</p>
    `;

    container.appendChild(div);
  });
}

// ===== NAV =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// INIT
renderProjects();
renderCourses();
renderSkills();