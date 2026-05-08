const menuButton = document.querySelector("[data-menu-toggle]");
const nav = document.getElementById("main-nav");
const currentYear = document.getElementById("current-year");
const contentUrl = "content/site-content.json";

function getValueByPath(data, path) {
  return path.split(".").reduce((accumulator, segment) => {
    if (accumulator === undefined || accumulator === null) {
      return undefined;
    }

    if (Array.isArray(accumulator) && /^\d+$/.test(segment)) {
      return accumulator[Number(segment)];
    }

    if (Object.prototype.hasOwnProperty.call(accumulator, segment)) {
      return accumulator[segment];
    }

    return undefined;
  }, data);
}

function bindDatasetAttribute(content, datasetKey, targetAttribute) {
  document.querySelectorAll(`[data-${datasetKey}]`).forEach((element) => {
    const contentPath = element.dataset[datasetKey];
    if (!contentPath) {
      return;
    }

    const value = getValueByPath(content, contentPath);
    if (value === undefined || value === null) {
      return;
    }

    element.setAttribute(targetAttribute, String(value));
  });
}

function bindTextContent(content) {
  document.querySelectorAll("[data-text]").forEach((element) => {
    const contentPath = element.dataset.text;
    if (!contentPath) {
      return;
    }

    const value = getValueByPath(content, contentPath);
    if (value === undefined || value === null) {
      return;
    }

    element.textContent = String(value);
  });
}

function applyContent(content) {
  bindTextContent(content);
  bindDatasetAttribute(content, "href", "href");
  bindDatasetAttribute(content, "src", "src");
  bindDatasetAttribute(content, "alt", "alt");
  bindDatasetAttribute(content, "content", "content");
  bindDatasetAttribute(content, "ariaLabel", "aria-label");
}

async function loadContent() {
  try {
    const response = await fetch(contentUrl);
    if (!response.ok) {
      throw new Error(`Nao foi possivel carregar ${contentUrl}`);
    }

    const content = await response.json();
    applyContent(content);
  } catch (error) {
    console.warn("Conteudo dinamico indisponivel. Mantendo fallback do HTML.", error);
  }
}

loadContent();

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear().toString();
}
