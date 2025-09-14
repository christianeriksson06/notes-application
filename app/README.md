# Notes App

En enkel anteckningsapp byggd med **HTML, CSS och JavaScript**.  
Du kan skapa, söka, redigera och ta bort anteckningar. Data sparas i **LocalStorage**.

---

## 🚀 Kom igång

## 1. Klona projektet

Kör följande kommandon i terminalen:

```bash
git clone https://github.com/christianeriksson06/notes-application.git
cd notes-application
```

## 2. Öppna i VS Code

Starta projektet i Visual Studio Code:

```bash
code .
```

## 3. Starta en lokal utvecklingsserver

Eftersom vi använder ES-moduler måste appen köras via http://, inte `file://`.

### Alternativ A: VS Code + Live Server

1. Installera extensionen **Live Server** i VS Code
2. Högerklicka på `index.html` -> välj **Open with Live Server**

### Alternativ B: Python

```bash
# Python 3
Python -m http.server 5500
```

Öppna sedan http://localhost:5500/app/index.html

### Alternativ C: Node (http-server)

```bash
npm install -g http-server
http-server .
```

Öppna sedan http://localhost:8080/app/index.html

## 4. Klart!

- `index.html` -> lista + sök
- `create.html` -> skapa ny note
- `edit.html` -> redigera / ta bort note

## 📂 Projektstruktur

```text
.
├── css/
│   ├── style.css
│   └── mobile.css
├── js/
│   ├── app.js        # logik för startsidan (lista/sök)
│   ├── create.js     # logik för skapa-sidan
│   ├── edit.js       # logik för redigera-sidan
│   ├── storage.js    # LocalStorage
│   └── ui.js         # rendering av UI
├── index.html
├── create.html
├── edit.html
└── README.md
```

## 🛠️ Teknisk stack

- **HTML5** (semantiska element)
- **CSS3** (Flexbox, Grid, responsive design)
- **JavaScript (ES6+)**
- **LocalStorage** för datalagring
- Deployment: **Netlify**

## ✅ Funktioner

- Skapa anteckningar med titel, beskrivning, datum & tid
- Lista anteckningar grupperade (7 dagar, 30 dagar, no date)
- Sök bland anteckningar
- Markera som klar (checkbox)
- Redigera / ta bort anteckning
- Responsiv design (mobil, tablet, desktop)



