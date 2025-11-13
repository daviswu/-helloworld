const posts = [
  {
    title: "用 Prompt 把设计流程缩短一半",
    date: "2024-02-18",
    readingTime: "8 min",
    tags: ["AI", "Design"],
    summary:
      "从需求拆解到稿件输出，完整示范如何把提示词嵌入设计环节，包含模板与常用检查清单。",
    featured: true,
  },
  {
    title: "打造可复用的前端设计系统",
    date: "2024-01-30",
    readingTime: "12 min",
    tags: ["Frontend", "System"],
    summary:
      "分享我在多个项目中沉淀 UI 模块的做法，以及如何把 Figma Tokens 与代码保持同步。",
  },
  {
    title: "Obsidian + Astro 打造数字花园",
    date: "2024-01-12",
    readingTime: "9 min",
    tags: ["Writing", "Tooling"],
    summary:
      "记录我搭建第二大脑站点的过程，重点在自动化发布与内容可视化。",
  },
  {
    title: "远程协作下的产品对齐仪式",
    date: "2023-12-28",
    readingTime: "6 min",
    tags: ["Product", "Team"],
    summary:
      "三种我常用的对齐节奏模板，帮团队快速聚焦真正重要的问题。",
  },
  {
    title: "让 Side Project 成为技能练习场",
    date: "2023-12-05",
    readingTime: "7 min",
    tags: ["Growth", "Project"],
    summary:
      "如何设定可交付的实验目标，让小项目成为持续练手的土壤。",
  },
];

const tagFilters = document.getElementById("tagFilters");
const postList = document.getElementById("postList");
const featuredPost = document.getElementById("featuredPost");
const searchInput = document.getElementById("search");
const themeToggle = document.querySelector(".theme-toggle");

const allTags = [
  "全部",
  ...new Set(posts.flatMap((post) => post.tags)),
];
let activeTag = "全部";

allTags.forEach((tag) => {
  const button = document.createElement("button");
  button.textContent = tag;
  button.className = "tag-button" + (tag === activeTag ? " active" : "");
  button.addEventListener("click", () => {
    activeTag = tag;
    document
      .querySelectorAll(".tag-button")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderPosts();
  });
  tagFilters.appendChild(button);
});

searchInput.addEventListener("input", () => renderPosts());

document.querySelector(".subscribe-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("感谢订阅！邮件已安排发送 ✅");
});

document.querySelector(".contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("收到啦，我会尽快回复你 ✉️");
});

function renderPosts() {
  const search = searchInput.value.toLowerCase();
  postList.innerHTML = "";
  const filtered = posts.filter((post) => {
    const matchTag = activeTag === "全部" || post.tags.includes(activeTag);
    const matchSearch =
      post.title.toLowerCase().includes(search) ||
      post.summary.toLowerCase().includes(search);
    return matchTag && matchSearch && !post.featured;
  });

  filtered.forEach((post) => postList.appendChild(createCard(post)));

  const featured = posts.find((post) => post.featured);
  if (featured) {
    featuredPost.innerHTML = "";
    const card = createCard(featured);
    const badge = document.createElement("span");
    badge.className = "eyebrow";
    badge.textContent = "Featured";
    card.prepend(badge);
    featuredPost.appendChild(card);
  }
}

function createCard(post) {
  const card = document.createElement("article");
  card.className = "post-card";
  const title = document.createElement("h3");
  title.textContent = post.title;
  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = `${post.date} · ${post.readingTime}`;
  const summary = document.createElement("p");
  summary.textContent = post.summary;
  const tagList = document.createElement("div");
  tagList.className = "tag-list";
  tagList.innerHTML = post.tags.map((tag) => `#${tag}`).join(" ");

  card.append(title, meta, summary, tagList);
  return card;
}

function initTheme() {
  const stored = localStorage.getItem("xinyu-theme");
  if (stored === "dark") {
    document.body.classList.add("dark");
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("xinyu-theme", mode);
}

themeToggle.addEventListener("click", toggleTheme);

function updateYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

initTheme();
renderPosts();
updateYear();
