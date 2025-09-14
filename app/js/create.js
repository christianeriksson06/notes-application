document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#createForm");
  const titleEl = document.querySelector("#title");
  const bodyEl = document.querySelector("#body");
  const dateEl = document.querySelector("#date");
  const timeEl = document.querySelector("#time");

  window.storage.loadNotes();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleEl.value.trim();
    if (!title) {
      alert("Skriv en titel");
      titleEl.focus();
      return;
    }

    const body = bodyEl.value.trim();
    const date = dateEl.value;
    const time = timeEl.value;
    const dueAt =
      date && time ? new Date(`${date}T${time}`).toISOString() : null;

    window.storage.createNote({ title, body, dueAt });
    // tillbaka till listan
    window.location.href = "index.html";
  });
});
