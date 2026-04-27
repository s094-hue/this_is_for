// DATA
const courses = [
  {
    name: "Political Economy",
    description: "Analyzed interactions between institutions and economic outcomes.",
    skills: ["Policy Analysis", "Institutional Thinking"]
  },
  {
    name: "Quantitative Methods",
    description: "Developed statistical reasoning and data analysis skills.",
    skills: ["Data Analysis", "Statistics"]
  }
];

const projects = [
  {
    name: "Political Behavior Analysis",
    shortDescription: "Analyzed peer influence in political alignment",
    techStack: ["Research", "Analysis"]
  },
  {
    name: "Personal Website",
    shortDescription: "Built a responsive personal portfolio site",
    techStack: ["HTML", "CSS", "JavaScript"]
  }
];

const skills = {
  programming: ["Python", "JavaScript"],
  ai_ml: ["Data Analysis"],
  web: ["HTML", "CSS", "Responsive Design"],
  tools: ["Git", "Excel"]
};

// Render
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

  Object.keys(skills).forEach(key => {
    const div = document.createElement("div");
    div.className = "skill-category";

    div.innerHTML = `
      <h3>${icons[key]} ${key.toUpperCase()}</h3>
      <p>${skills[key].map(s => `✨ ${s}`).join(" ")}</p>
    `;

    container.appendChild(div);
  });
}

// Navbar
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

// Init
renderProjects();
renderCourses();
renderSkills();