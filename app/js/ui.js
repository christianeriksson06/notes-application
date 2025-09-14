(function () {
  function fmtDateTime(iso) {
    if (!iso) return "";
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  }

  function noteItemHTML(n) {
    return `
        <li class="note" data-id="${n.id}">
        <label class="note-row">
        <input type="checkbox" class="toggle" ${n.done ? "checked" : ""}>
        <span class="title ${n.done ? "done" : ""}">${escapeHtml(
      n.title
    )}</span>
        </label>
        ${n.body ? `<p class="body">${escapeHtml(n.body)}</p>` : ""}
        <div class="meta">
            <time datetime="${n.dueAt || ""}">${
      n.dueAt ? fmtDateTime(n.dueAt) : ""
    }</time>
    <div class="actions">
    <a class="icon-btn-edit" href="edit.html?id=${n.id}" aria-label="Edit">
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
             
              <rect x="3" y="3" width="14" height="14" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/>
              
              <path d="M21.7 2.3a1 1 0 0 0-1.4 0L12 10.6l-.8 3.2 3.2-.8 8.3-8.3a1 1 0 0 0 0-1.4L21.7 2.3z" fill="currentColor"/>
            </svg>
    </a>
       </div>
            </div>
            </li>
            `;
  }

  function makeSection(title, items) {
    return `
        <section class="section">
        <h2>${title}</h2>
        <ul class="notes-list">
        ${
          items.length
            ? items.map(noteItemHTML).join("")
            : `<li class="empty">No notes to be seen here...</li>`
        }
        </ul>
        </section>
        `;
  }

  function renderNotesList(rootEl, list) {
    if (!rootEl) return;
    if (!list || !list.length) {
      rootEl.innerHTML = `<p class="empty">No notes to be seen here...</p>`;
      return;
    }

    const seven = list
      .filter((n) => window.storage.isWithinDays(n.dueAt, 7))
      .sort((a, b) => (a.dueAt || "").localeCompare(b.dueAt || ""));
    const thirty = list
      .filter(
        (n) => !seven.includes(n) && window.storage.isWithinDays(n.dueAt, 30)
      )
      .sort((a, b) => (a.dueAt || "").localeCompare(b.dueAt || ""));

const undated = list
.filter(n => !n.dueAt)
.sort((a,b) => (b.updatedAt || b.createdAt).localeCompare(a.updatedAt));

let html = "";
html += makeSection("Coming 7 days", seven);
html += makeSection("Coming 30 days", thirty);
if (undated.length) {
    html += makeSection("No date", undated);
}

    rootEl.innerHTML = html;
  
  }

  // gör om specialtecken så att användarens text alltid visas som text
  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  window.ui = { renderNotesList };
})();
