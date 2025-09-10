## HTML5 (semantiskt) ##

<header>, <main>, <section>, <form>, <fieldset>, <label>, <input>, <button>, <ul>/<li>, <dialog> (för delete-confirm).

ARIA/alt/aria-live="polite" för feedback (t.ex. “Note created”).

## CSS3 ##

Layout: Flexbox + Grid (listor, formulär, toppbar/bottombar).

Theme: CSS-variabler (--bg, --text, --accent) + prefers-color-scheme.

Komponenter: Utility‐klasser (padding/gap/border), focus-styles (:focus-visible), position: sticky för sökfältet.

Ikoner: Inbäddade SVG (t.ex. Heroicons/Material Symbols som SVG-sprites).

## JavaScript (ES6+) ##

Moduler: ES Modules (type="module"), dela upp i notesStore.js, ui.js, router.js (ev. “hash routing” är valfritt).

Features du behöver: const/let, arrow functions, template literals, destructuring, optional chaining, array methods (map/filter/reduce), Intl.DateTimeFormat, localStorage, CustomEvent för enkel state-händelsebus.

## Datalagring ##

Nu: localStorage (key t.ex. notes-v1), spara array av objekt { id, title, body, dueDate, dueTime, createdAt, done }.

Spara vid Create/Edit/Delete, och ladda vid init. Debounce vid sök.

## Deployment: ##
Netlify

## Verktyg: ##
VS Code
Git/GitHub
Browser Developer Tools