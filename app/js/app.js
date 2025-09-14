document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#notesRoot");
  const search = document.querySelector("#search");

  const current = window.storage.loadNotes();
  if (current.length === 0) {
    // två exempelrader så du ser något
    const addDays = (d) => new Date(Date.now() + d * 24 * 3600e3).toISOString();
    window.storage.createNote({
      title: "Bjuda någon på fika",
      dueAt: addDays(5),
    });
    window.storage.createNote({
      title: "Planera framtida resor",
      dueAt: addDays(20),
    });
  }

  window.ui.renderNotesList(root, window.storage.getNotes());

  search?.addEventListener("input", () => {
    const list = window.storage.searchNotes(search.value);
    window.ui.renderNotesList(root, list);
  });

  root?.addEventListener("click", (e) => {
    const li = e.target.closest(".note");
    if (!li) return;
    const id = li.dataset.id;

    if (e.target.classList.contains("toggle")) {
      window.storage.toggleNoteDone(id);
      const list = window.storage.searchNotes(search.value);
      window.ui.renderNotesList(root, list);
    }
  });
});
