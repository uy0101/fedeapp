# Quiz sul Calcio – WebApp

Una semplice webapp (HTML/CSS/JS puro) che propone 10 domande sul calcio italiano, scelte da un pool di 100 e **progressivamente più difficili**.

### Regole di punteggio
- Risposta corretta: **+1 punto**
- Prima risposta errata consecutiva: **0 punti**
- Errori consecutivi successivi: **-1 punto** ciascuno
- Il punteggio **non va mai sotto 0**

### Struttura
- `index.html` – pagina principale del gioco
- `leaderboard.html` – pagina dei migliori punteggi
- `styles.css` – stile semplice, responsive
- `questions.js` – elenco di 100 domande e risposte con livello di difficoltà
- `script.js` – logica del quiz e gestione punteggi

### Come pubblicare su GitHub Pages
1. Carica tutti i file nella repository (radice): `index.html`, `leaderboard.html`, `styles.css`, `script.js`, `questions.js`.
2. Vai su **Settings → Pages**.
3. In **Build and deployment** scegli **Deploy from a branch**.
4. Scegli **Branch**: `main` (o `master`) e **Folder**: `/root`.
5. Salva. Attendi 1-2 minuti: il sito sarà online su `https://<tuo-utente>.github.io/<nome-repo>/`.

Per questa repo: `https://uy0101.github.io/fedeapp/`
