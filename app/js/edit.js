function getIdFromQuery() {
  const params = new URLSearchParams(location.search);
  return params.get("id");
}

function splitToInputs(iso) {
  if (!iso) return { date: "", time: "" };
  const d = new Date(iso);
  const date = d.toISOString().slice(0, 10);
  const time = d.toTimeString().slice(0, 5);
  return { date, time };
}

function combineISO(dateStr, timeStr) {
  if (!dateStr || !timeStr) return null;
  const d = new Date(`${dateStr}T${timeStr}`);
  return isNaN(d) ? null : d.toISOString();
}

document.addEventListener("DOMContentLoaded", () => {
  window.storage.loadNotes();

  const id = getIdFromQuery();
  const note = window.storage.getNoteById(id);
  if (!note) {
    alert("Anteckningen hittades inte.");
    location.href = "index.html";
    return;
  }

  const form = document.getElementById("editForm");
  const titleEl = document.getElementById("title");
  const bodyEl = document.getElementById("body");
  const dateEl = document.getElementById("date");
  const timeEl = document.getElementById("time");
  const delBtn = document.getElementById("deleteBtn");

  titleEl.value = note.title || "";
  bodyEl.value = note.body || "";
  const { date, time } = splitToInputs(note.dueAt);
  dateEl.value = date;
  timeEl.value = time;

  // edit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleEl.value.trim();
    if (!title) {
      alert("Skriv en titel.");
      titleEl.focus();
      return;
    }

    const dueAt = combineISO(dateEl.value, timeEl.value);
    window.storage.updateNote(id, { title, body: bodyEl.value, dueAt });
    location.href = "index.html";
  });

  // delete
  delBtn.addEventListener("click", () => {
    if (confirm("Ta bort anteckningen?")) {
      window.storage.deleteNote(id);
      location.href = "index.html";
    }
  });
});
