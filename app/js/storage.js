(function () {
  const LS_KEY = "notes-v1";
  let notes = [];
  let nextId = 1;

  function loadNotes() {
    try {
      const saved = JSON.parse(localStorage.getItem(LS_KEY));
      if (Array.isArray(saved)) {
        notes = saved;

        const maxId = Math.max(0, ...notes.map((n) => Number(n.id) || 0));
        nextId = maxId + 1;
      }
    } catch (_) {
      notes = [];
    }
    return notes;
  }
  function saveNotes() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(notes));
    } catch (e) {
      alert("Kunde inte spara.");
    }
  }
  function getNotes() {
    return notes.slice();
  }

  function createNote({ title, body = "", dueAt = null }) {
    const MAX = 5000;
    if (body.length > MAX) body = body.slice(0, MAX);
    const now = new Date().toISOString();
    const note = {
      id: nextId++,
      title: String(title).trim(),
      body: String(body).trim(),
      dueAt: dueAt || null,
      done: false,
      createdAt: now,
      updatedAt: now,
    };
    notes.push(note);
    saveNotes();
    return note;
  }

  function toggleNoteDone(id) {
    const n = notes.find((x) => String(x.id) === String(id));
    if (n) {
      n.done = !n.done;
      n.updatedAt = new Date().toISOString();
      saveNotes();
    }
  }

  function deleteNote(id) {
    notes = notes.filter((n) => String(n.id) !== String(id));
    saveNotes();
  }

  //helpers för filtrering och sök
  function isWithinDays(iso, days) {
    if (!iso) return false;
    const now = new Date();
    const end = new Date();
    end.setDate(end.getDate() + days);
    const d = new Date(iso);
    return d >= now && d <= end;
  }

  function searchNotes(q) {
    const s = (q || "").toLowerCase().trim();
    if (!s) return getNotes();
    return getNotes().filter(
      (n) =>
        n.title.toLowerCase().includes(s) || n.body.toLowerCase().includes(s)
    );
  }

  function getNoteById(id) {
    return notes.find((n) => String(n.id) === String(id)) || null;
  }

  function updateNote(id, { title, body, dueAt, done }) {
    const n = getNoteById(id);
    if (!n) return null;
    if (title !== undefined) n.title = String(title).trim();
    if (body !== undefined) n.body = String(body).trim();
    if (dueAt !== undefined) n.dueAt = dueAt || null;
    if (done !== undefined) n.done = !!done;

    n.updatedAt = new Date().toISOString();
    saveNotes();
    return n;
  }
  window.storage = {
    loadNotes,
    saveNotes,
    getNotes,
    createNote,
    toggleNoteDone,
    deleteNote,
    isWithinDays,
    searchNotes,
    getNoteById,
    updateNote,
  };
})();
