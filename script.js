function hideElement(el) {
  return new Promise((resolve) => {
    el.classList.remove("show");
    setTimeout(resolve, 500); // Ждем завершения transition
  });
}

async function toggleInfo() {
  const info = document.getElementById("info");
  const skills = document.getElementById("skills");
  const contacts = document.getElementById("contacts");
  const works = document.getElementById("works");

  if (info.classList.contains("show")) {
    await hideElement(info);
  } else {
    await Promise.all([hideElement(skills), hideElement(contacts), hideElement(works)]);
    info.classList.add("show");
  }
}

async function toggleSkills() {
  const info = document.getElementById("info");
  const skills = document.getElementById("skills");
  const contacts = document.getElementById("contacts");
  const works = document.getElementById("works");

  if (skills.classList.contains("show")) {
    await hideElement(skills);
  } else {
    await Promise.all([hideElement(info), hideElement(contacts), hideElement(works)]);
    skills.classList.add("show");
  }
}

async function toggleWorks() {
  const info = document.getElementById("info");
  const skills = document.getElementById("skills");
  const contacts = document.getElementById("contacts");
  const works = document.getElementById("works");

  if (works.classList.contains("show")) {
    await hideElement(works);
  } else {
    await Promise.all([hideElement(info), hideElement(skills), hideElement(contacts)]);
    works.classList.add("show");
  }
}

async function toggleContacts() {
  const info = document.getElementById("info");
  const skills = document.getElementById("skills");
  const contacts = document.getElementById("contacts");
  const works = document.getElementById("works");

  if (contacts.classList.contains("show")) {
    await hideElement(contacts);
  } else {
    await Promise.all([hideElement(info), hideElement(skills), hideElement(works)]);
    contacts.classList.add("show");
  }
}
