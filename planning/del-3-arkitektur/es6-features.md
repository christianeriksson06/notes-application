 1. Arrow functions – kortare syntax för event handlers och callbacks
document.querySelector("#createBtn").addEventListener("click", () => {
  saveNote();
});

 2. Template literals – generera HTML för varje anteckning i listan
const noteHTML = (note) => `
  <li class="note">
    <input type="checkbox" ${note.done ? "checked" : ""} data-id="${note.id}">
    <span>${note.title}</span>
    <button class="edit" data-id="${note.id}">✏️</button>
  </li>
`;

 3. Destructuring – plocka ut properties från objekt
const renderNote = (note) => {
  const { id, title, done } = note;
  console.log(id, title, done);
};

 4. Spread operator – uppdatera eller kopiera arrays/objekt
const newNotes = [...notes, newNote];
const updated = { ...note, title: "Ny titel", updatedAt: new Date().toISOString() };

 5. Array methods – filter, map, find, sort för sökning och grupper
const upcoming7 = notes.filter(n => isWithinDays(n.dueAt, 7));
const htmlList = notes.map(noteHTML).join("");

