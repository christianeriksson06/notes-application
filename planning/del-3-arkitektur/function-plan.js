// ========== Data functions ==========
function loadNotes() { /* läs från localStorage, returnerar [] */ }
function saveAllNotes(notes) { /* skriv hela notes-arrayen till localStorage */ }

function createNote({ title, body, dueAt, tags }) { /* skapa & returnera ny note */ }
function updateNote(id, patch) { /* uppdatera fält på note med id, returnerar note */ }
function deleteNote(id) { /* ta bort note med id */ }

function searchNotes(query) { /* filtrera notes på title/body/tags */ }
function splitUpcoming(notes) { /* returnera { seven:[], thirty:[] } baserat på dueAt */ }



function isoFromInputs(dateStr, timeStr) { /* kombinera datum+tid → ISO8601 (UTC) */ }
function isWithinDays(iso, days) { /* true om ISO-datum ligger inom X dagar */ }


// ========== UI functions ==========
function renderNotesList(notes) { /* rendera sektioner 'Coming 7/30 days' */ }
function renderSection(title, items) { /* bygg och returnera DOM/HTML för en sektion */ }
function noteItemHTML(note) { /* bygg HTML/DOM för en rad i listan */ }

function showNoteEditor(note) { /* öppna formuläret i create/edit-läge */ }
function hideNoteEditor() { /* stäng formuläret/dialogen */ }
function fillEditorForm(note) { /* fyll in formfält från note (title/body/dueAt) */ }
function clearEditorForm() { /* nollställ formfält */ }

function fmtDateTime(iso) { /* formatera ISO → lokal text för UI */ }


// ========== Event handlers ==========
function handleFabCreateClick() { /* öppna editor i create-läge */ }
function handleCreateNote(event) { /* validera form, skapa note, rendera om */ }
function handleSaveNote(event) { /* validera form, uppdatera note, rendera om */ }
function handleDeleteNote(eventOrId) { /* bekräfta, ta bort note, rendera om */ }

function handleToggleDone(event) { /* checkbox ändrad → uppdatera done/completedAt */ }
function handleSearchInput(event) { /* uppdatera listan utifrån söktext */ }
