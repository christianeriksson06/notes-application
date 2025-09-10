# Utvecklingsprocess Logg

## Syfte
Detta dokument loggar mina beslut, lärdomar och reflektioner genom utvecklingsprocessen.

---

## [Datum: 2025-09-08] - Projektstart

### Vad jag gjorde idag:
- Satte upp projekt-repository och mappstruktur
- Konfigurerade VS Code för utveckling
- Läste igenom alla övningsdelar

### Förväntningar:
- Att jag ska skapa en riktigt bra antecknings app

### Frågor att ta reda på:
- Inga frågor i nuläget

---

## [Datum: 2025-09-08] - Del 1: Produktägare

### User interviews genomförda:
- Person 1: [Theodor/kompis]
- Person 2: [Jesper/kompis]

### Viktiga insikter:
- Att det ska vara en super smidig app att använda utan några konstigheter

### MVP-beslut:
- Kunna skriva anteckningar snabbt i mobilen  
- samla alla anteckningar på ett ställe för att slippa leta i olika appar.  
- kunna söka bland alla mina anteckningar  
- superenkel och tydlig app för att kunna fokusera mer på innehållet än tekniken.  

### Utmaningar:
- Jag kan inte komma på några utmaningar just nu

---

## [Datum: 2025-09-08] - Del 2: Design

### Design-beslut:
- Simpel design 

### Tillgänglighetstester:
- Texten är svart på vit bakgrund → mycket bra kontrast, lättläst.  
  Fungerar i helhet bra.

- Designen är mobilfokuserad, så huvudinteraktionen är touch.  
- Just nu är det svårt att använda utan mus/touch

- Alla fält har beskrivande labels:  
    
- Gränssnittet är mycket rent:  
  - Startlista med kommande notes.  
  - Plus-knapp för att skapa ny anteckning.  
  - Tydlig struktur i tre steg: lista → skapa → redigera.  

### Utmaningar:
- Att fixa så att det går att använda utan mus/touch

---

## [Datum: 2025-09-10] - Del 3: Arkitektur

### Tekniska beslut:
- - **Frontend:** Bygger mobil-först med HTML5 (semantiska element), CSS3 (Grid/Flexbox, variabler) och JavaScript (ES6+).
- **Datahantering:** Anteckningar lagras i `localStorage` som JSON-array. Varje note har id, title, body, dueAt, done, createdAt, updatedAt, completedAt och ev. tags.


### ES6-features jag kommer använda:
-  1. Arrow functions – kortare syntax för event handlers och callbacks

 2. Template literals – generera HTML för varje anteckning i listan

 3. Destructuring – plocka ut properties från objekt

 4. Spread operator – uppdatera eller kopiera arrays/objekt

 5. Array methods – filter, map, find, sort för sökning och grupper


### Identifierade risker:

## Vad händer om LocalStorage är fullt?
om localstorage blir fullt så får jag lägga till så att notes äldre än tex 90 dagar tas bort
## Vad händer om användaren stänger appen mitt i redigering?
förmodligen så försvinner det personen har skrivit, men om sparar formulärfältet i localstorage under en nyckel tex note-draft och spara varje 500ms 
## Hur hanterar du mycket långa anteckningar?
Antingen visa max tex 2-3 rader eller begränsa body längden 
## Funkar appen offline?
tror det 

---

## [Datum: ] - Del 4: Implementation

### Utvecklingsframsteg:
- 

### Buggar jag stötte på:
- 

### Lärdomar:
- 

---

## [Datum: ] - Del 5: Testing

### Testresultat:
- 

### Kritiska buggar:
- 

### Förbättringsområden:
- 

---

## Slutreflektion

### Vad lärde jag mig mest av:
- 

### Vad skulle jag göra annorlunda:
- 

### Nästa steg för att utvecklas:
- 