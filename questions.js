const QUESTIONS_POOL = [
  {
    "question": "Quanti giocatori di movimento ha una squadra in campo?",
    "options": [
      "10",
      "11",
      "9",
      "12"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti punti vale una vittoria in Serie A?",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanto dura una partita regolamentare (senza recupero)?",
    "options": [
      "80 minuti",
      "90 minuti",
      "100 minuti",
      "70 minuti"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Cosa indica il cartellino giallo?",
    "options": [
      "Espulsione",
      "Ammonizione",
      "Rigore",
      "Fuorigioco"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Il portiere può usare le mani:",
    "options": [
      "Ovunque in campo",
      "Solo nell'area di rigore",
      "Solo nell'area avversaria",
      "Mai"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Il fuorigioco viene fischiato quando:",
    "options": [
      "Il pallone esce dal campo",
      "Un attaccante è oltre l'ultimo difensore al momento del passaggio",
      "Si commette fallo laterale",
      "Si subisce un fallo"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Quanti cambi sono normalmente consentiti in una partita di Serie A?",
    "options": [
      "3",
      "5",
      "7",
      "Illimitati"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Il calcio d'angolo si batte da:",
    "options": [
      "Metà campo",
      "Angolo del campo",
      "Area piccola",
      "Area grande"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "Il cartellino rosso comporta:",
    "options": [
      "Ammonizione",
      "Espulsione",
      "Ripetizione dell'azione",
      "Time-out"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "La rimessa laterale si effettua con:",
    "options": [
      "I piedi",
      "Le mani",
      "La testa",
      "Il ginocchio"
    ],
    "correctIndex": 1,
    "difficulty": 1
  },
  {
    "question": "I colori tradizionali della Juventus sono:",
    "options": [
      "Rosso e nero",
      "Bianco e nero",
      "Blu e nero",
      "Giallo e rosso"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Il Milan è noto come i:",
    "options": [
      "Giallorossi",
      "Nerazzurri",
      "Rossoneri",
      "Azzurri"
    ],
    "correctIndex": 2,
    "difficulty": 2
  },
  {
    "question": "L'Inter è famosa per i colori:",
    "options": [
      "Bianconeri",
      "Nerazzurri",
      "Viola",
      "Rossoverdi"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "La Roma viene spesso chiamata:",
    "options": [
      "Biancocelesti",
      "Giallorossi",
      "Nerazzurri",
      "Granata"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Il Napoli tradizionalmente gioca in:",
    "options": [
      "Azzurro",
      "Verde",
      "Viola",
      "Giallo"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "La Lazio è associata al colore:",
    "options": [
      "Blu scuro",
      "Biancoceleste",
      "Rosso",
      "Arancione"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Il Torino è noto come i:",
    "options": [
      "Viola",
      "Granata",
      "Giallorossi",
      "Rossoneri"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "La Fiorentina gioca storicamente in:",
    "options": [
      "Viola",
      "Rosso",
      "Blu",
      "Verde"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "L'Atalanta è spesso associata ai colori:",
    "options": [
      "Nerazzurri",
      "Giallorossi",
      "Bianconeri",
      "Rossoverdi"
    ],
    "correctIndex": 0,
    "difficulty": 2
  },
  {
    "question": "Il Sassuolo è noto per il colore:",
    "options": [
      "Arancione",
      "Verde-nero",
      "Blu",
      "Bianco"
    ],
    "correctIndex": 1,
    "difficulty": 2
  },
  {
    "question": "Il San Siro/Giuseppe Meazza si trova a:",
    "options": [
      "Roma",
      "Milano",
      "Torino",
      "Napoli"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Lo Stadio Olimpico è a:",
    "options": [
      "Milano",
      "Roma",
      "Firenze",
      "Bologna"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Lo Juventus Stadium/Allianz Stadium è a:",
    "options": [
      "Napoli",
      "Genova",
      "Torino",
      "Verona"
    ],
    "correctIndex": 2,
    "difficulty": 3
  },
  {
    "question": "Il Diego Armando Maradona (ex San Paolo) è a:",
    "options": [
      "Napoli",
      "Bari",
      "Udine",
      "Cagliari"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "L'Artemio Franchi è lo stadio di:",
    "options": [
      "Sassuolo",
      "Fiorentina",
      "Empoli",
      "Parma"
    ],
    "correctIndex": 1,
    "difficulty": 3
  },
  {
    "question": "Il Ferraris (Luigi Ferraris) è a:",
    "options": [
      "Genova",
      "Bergamo",
      "Bologna",
      "La Spezia"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Il Gewiss Stadium è casa dell':",
    "options": [
      "Atalanta",
      "Udinese",
      "Torino",
      "Monza"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Il Mapei Stadium è legato al:",
    "options": [
      "Sassuolo",
      "Lecce",
      "Salernitana",
      "Verona"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "La Dacia Arena è lo stadio di:",
    "options": [
      "Udinese",
      "Empoli",
      "Cagliari",
      "Frosinone"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "L'Olimpico Grande Torino è a:",
    "options": [
      "Torino",
      "Roma",
      "Napoli",
      "Palermo"
    ],
    "correctIndex": 0,
    "difficulty": 3
  },
  {
    "question": "Quale ruolo è principalmente responsabile della difesa centrale?",
    "options": [
      "Regista",
      "Centrale difensivo",
      "Esterno alto",
      "Trequartista"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "In caso di pareggio, quante squadre prendono 1 punto?",
    "options": [
      "Solo la squadra di casa",
      "Solo la squadra in trasferta",
      "Entrambe le squadre",
      "Nessuna"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Il fuorigioco non si applica su:",
    "options": [
      "Calcio d'angolo",
      "Calcio di punizione",
      "Rimessa laterale",
      "A e C"
    ],
    "correctIndex": 3,
    "difficulty": 4
  },
  {
    "question": "Quale parte del corpo NON è considerata valida per segnare?",
    "options": [
      "Testa",
      "Spalla",
      "Mano/Braccio",
      "Coscia"
    ],
    "correctIndex": 2,
    "difficulty": 4
  },
  {
    "question": "Il numero minimo di giocatori in campo per proseguire una gara è:",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Il capitano si riconosce perché indossa:",
    "options": [
      "Fascia sul braccio",
      "Scarpe speciali",
      "Maglia diversa",
      "Niente"
    ],
    "correctIndex": 0,
    "difficulty": 4
  },
  {
    "question": "Una partita può avere minuti di recupero assegnati da:",
    "options": [
      "Il quarto uomo",
      "L'arbitro",
      "Il capitano",
      "Il VAR"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Il VAR può suggerire all'arbitro di:",
    "options": [
      "Fermare il tempo",
      "Rivedere un episodio al monitor",
      "Cambiare le regole",
      "Modificare la durata della partita"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Un rigore viene assegnato quando il fallo avviene:",
    "options": [
      "A centrocampo",
      "Nell'area di rigore",
      "Fuori dallo stadio",
      "In panchina"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Il calcio di punizione diretto permette:",
    "options": [
      "Solo passaggio",
      "Tiro in porta",
      "Solo rimessa",
      "Time-out"
    ],
    "correctIndex": 1,
    "difficulty": 4
  },
  {
    "question": "Il modulo 4-3-3 prevede:",
    "options": [
      "4 difensori, 3 centrocampisti, 3 attaccanti",
      "4 attaccanti, 3 difensori, 3 portieri",
      "3 difensori, 4 centrocampisti, 3 attaccanti",
      "5 difensori, 3 attaccanti, 2 portieri"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Il modulo 3-5-2 ha:",
    "options": [
      "3 difensori, 5 centrocampisti, 2 attaccanti",
      "3 attaccanti, 5 difensori, 2 portieri",
      "5 difensori, 3 centrocampisti, 2 attaccanti",
      "3 difensori, 2 centrocampisti, 5 attaccanti"
    ],
    "correctIndex": 0,
    "difficulty": 5
  },
  {
    "question": "Un trequartista gioca tra:",
    "options": [
      "Difesa e centrocampo",
      "Centrocampo e attacco",
      "Panchina e tribuna",
      "Porta e centrocampo"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Gli esterni a tutta fascia sono tipici del modulo:",
    "options": [
      "4-4-2",
      "3-5-2",
      "4-3-3",
      "5-3-2"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Il pressing alto mira a:",
    "options": [
      "Far riposare gli attaccanti",
      "Recuperare palla vicino all'area avversaria",
      "Tenere la palla nella propria metà campo",
      "Fare melina"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "La difesa a zona segue:",
    "options": [
      "L'uomo ovunque vada",
      "Le zone di competenza",
      "Solo la palla",
      "Il portiere"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Il contropiede sfrutta:",
    "options": [
      "Possesso prolungato",
      "Ripartenze rapide",
      "Rimesse laterali",
      "Calci d'angolo"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Il regista imposta il gioco da:",
    "options": [
      "Linea difensiva",
      "Centrocampo",
      "Area avversaria",
      "Tribuna"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Nel 4-4-2 i due attaccanti sono spesso:",
    "options": [
      "Punta e trequartista",
      "Prima punta e seconda punta",
      "Terzino e ala",
      "Mediano e mezzala"
    ],
    "correctIndex": 1,
    "difficulty": 5
  },
  {
    "question": "Il mediano si occupa principalmente di:",
    "options": [
      "Finalizzare",
      "Impostare da dietro",
      "Interrompere le azioni avversarie",
      "Parare"
    ],
    "correctIndex": 2,
    "difficulty": 5
  },
  {
    "question": "Quale squadra è soprannominata 'Vecchia Signora'?",
    "options": [
      "Inter",
      "Juventus",
      "Milan",
      "Roma"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Quale squadra è soprannominata 'Partenopei'?",
    "options": [
      "Napoli",
      "Lazio",
      "Torino",
      "Fiorentina"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quale squadra è detta 'Lupi'?",
    "options": [
      "Roma",
      "Juventus",
      "Udinese",
      "Bologna"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quale squadra è detta 'Nerazzurri' oltre all'Inter?",
    "options": [
      "Atalanta",
      "Roma",
      "Napoli",
      "Sassuolo"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Il soprannome 'Rossoneri' appartiene al:",
    "options": [
      "Milan",
      "Cagliari",
      "Sampdoria",
      "Empoli"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quale club è noto come 'Granata'?",
    "options": [
      "Torino",
      "Verona",
      "Udinese",
      "Lecce"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Chi è noto come 'il Capitano' alla Roma (storicamente)?",
    "options": [
      "Francesco Totti",
      "Daniele De Rossi",
      "Paolo Maldini",
      "Alessandro Del Piero"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Chi è stato simbolo storico della Juventus con il numero 10?",
    "options": [
      "Andrea Pirlo",
      "Alessandro Del Piero",
      "Gianluigi Buffon",
      "Leonardo Bonucci"
    ],
    "correctIndex": 1,
    "difficulty": 6
  },
  {
    "question": "Chi è stato bandiera del Milan e capitano per anni?",
    "options": [
      "Paolo Maldini",
      "Marco Materazzi",
      "Fabio Cannavaro",
      "Giorgio Chiellini"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Il 'Principe' era il soprannome di:",
    "options": [
      "Diego Milito",
      "Roberto Baggio",
      "Antonio Cassano",
      "Gabriel Batistuta"
    ],
    "correctIndex": 0,
    "difficulty": 6
  },
  {
    "question": "Quale trofeo nazionale si affianca alla Serie A?",
    "options": [
      "Supercoppa Italiana",
      "Coppa Italia",
      "Coppa del Mondo",
      "Champions League"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "La Supercoppa Italiana si gioca tra:",
    "options": [
      "Campione di Serie B e di Serie A",
      "Vincitrice di Coppa Italia e Campione di Serie A",
      "Due squadre a caso",
      "Campione d'Europa e campione d'Italia"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Quali sono le competizioni UEFA per club?",
    "options": [
      "Champions, Europa League, Conference League",
      "Coppa Italia, Supercoppa, Serie A",
      "Mondiale, Europeo, Coppa America",
      "Nations League, Coppa Italia, FA Cup"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Il simbolo dello scudetto sulla maglia indica:",
    "options": [
      "Capitano",
      "Campione d'Italia in carica",
      "Capocannoniere",
      "Giocatore giovane"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Quale fase segue i gironi di Champions League?",
    "options": [
      "Play-out",
      "Ottavi di finale",
      "Turno preliminare",
      "Final Eight"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Quante squadre scendono in Serie B ogni stagione? (formato classico)",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "I turni a eliminazione diretta sono in genere su:",
    "options": [
      "Partita secca",
      "Andata e ritorno (salvo finali)",
      "Final four",
      "Maxi girone"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "La finale di Coppa Italia si gioca generalmente in:",
    "options": [
      "Milano",
      "Torino",
      "Roma",
      "Napoli"
    ],
    "correctIndex": 2,
    "difficulty": 7
  },
  {
    "question": "La Conference League è stata introdotta per:",
    "options": [
      "Aumentare le squadre europee coinvolte",
      "Ridurre le partite",
      "Sostituire la Champions",
      "Sostituire l'Europa League"
    ],
    "correctIndex": 0,
    "difficulty": 7
  },
  {
    "question": "Il turno preliminare di Champions serve a:",
    "options": [
      "Decidere il campione",
      "Qualificare ai gironi",
      "Assegnare la Coppa Italia",
      "Stabilire retrocessioni"
    ],
    "correctIndex": 1,
    "difficulty": 7
  },
  {
    "question": "Il capocannoniere è il giocatore che:",
    "options": [
      "Fa più assist",
      "Prende meno gol",
      "Segna più gol",
      "Ha più parate"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "Il portiere storico della Juventus è:",
    "options": [
      "Gianluigi Buffon",
      "Samir Handanovic",
      "Dida",
      "Walter Zenga"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "Il 'Pendolino' è soprannome legato a:",
    "options": [
      "Cafu",
      "Zanetti",
      "Chiellini",
      "Pirlo"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "Andrea Pirlo era famoso per:",
    "options": [
      "Essere un centravanti",
      "Essere un regista",
      "Essere un terzino",
      "Essere un portiere"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Chi è noto come 'Batigol' in Serie A?",
    "options": [
      "Gabriel Batistuta",
      "Marco Van Basten",
      "Hernan Crespo",
      "Andriy Shevchenko"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "Una 'clean sheet' indica:",
    "options": [
      "Partita senza falli",
      "Partita senza gol subiti",
      "Partita con tanti gol",
      "Partita sospesa"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Chi è spesso chiamato 'Il Fenomeno' (anche passato in Serie A)?",
    "options": [
      "Ronaldo Nazário",
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Ronaldinho"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "Cosa indica un 'assist'?",
    "options": [
      "Un tiro parato",
      "Un passaggio che porta al gol",
      "Un fallo subito",
      "Un intervento difensivo"
    ],
    "correctIndex": 1,
    "difficulty": 8
  },
  {
    "question": "Chi è storicamente bandiera dell'Inter come terzino/centrocampista destro?",
    "options": [
      "Javier Zanetti",
      "Franco Baresi",
      "Andrea Barzagli",
      "Dejan Stankovic"
    ],
    "correctIndex": 0,
    "difficulty": 8
  },
  {
    "question": "Quale ruolo è deputato principalmente alla finalizzazione?",
    "options": [
      "Centrocampista difensivo",
      "Terzino",
      "Punta",
      "Portiere"
    ],
    "correctIndex": 2,
    "difficulty": 8
  },
  {
    "question": "La Sampdoria ha colori:",
    "options": [
      "Bianconeri",
      "Blu con banda bianca-rossa-nera",
      "Giallorossi",
      "Nerazzurri"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "L'Udinese ha come simbolo la:",
    "options": [
      "Zebra",
      "Aquila",
      "Lupa",
      "Toro"
    ],
    "correctIndex": 1,
    "difficulty": 9
  },
  {
    "question": "Il Verona (Hellas) è associato ai colori:",
    "options": [
      "Gialloblù",
      "Rossoverdi",
      "Bianconeri",
      "Biancorossi"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "Il Cagliari è legato ai colori:",
    "options": [
      "Rosso e blu",
      "Viola",
      "Giallo",
      "Azzurro"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "L'Empoli gioca tradizionalmente in:",
    "options": [
      "Azzurro",
      "Verde",
      "Bianco",
      "Nero"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "La Salernitana è associata al colore:",
    "options": [
      "Granata",
      "Biancoceleste",
      "Giallorosso",
      "Nerazzurro"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "Il Lecce è conosciuto per i colori:",
    "options": [
      "Giallorossi",
      "Bianconeri",
      "Nerazzurri",
      "Azzurri"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "Lo Spezia (storico) gioca in:",
    "options": [
      "Bianco",
      "Rosso",
      "Azzurro",
      "Verde"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "Il Bologna è associato ai colori:",
    "options": [
      "Rosso-blu",
      "Giallo-verde",
      "Nero-oro",
      "Bianco-rosso"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "Il Monza gioca spesso in:",
    "options": [
      "Rosso",
      "Viola",
      "Azzurro",
      "Verde"
    ],
    "correctIndex": 0,
    "difficulty": 9
  },
  {
    "question": "Chi era detto 'Divin Codino' in Italia?",
    "options": [
      "Roberto Baggio",
      "Francesco Totti",
      "Alessandro Del Piero",
      "Christian Vieri"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Il 'Ciuccio' è simbolo di quale squadra?",
    "options": [
      "Lazio",
      "Napoli",
      "Fiorentina",
      "Parma"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Chi è leggendario numero 3 del Milan?",
    "options": [
      "Javier Zanetti",
      "Franco Baresi",
      "Paolo Maldini",
      "Giacinto Facchetti"
    ],
    "correctIndex": 2,
    "difficulty": 10
  },
  {
    "question": "Quale squadra ha sede a Bergamo?",
    "options": [
      "Brescia",
      "Atalanta",
      "Udinese",
      "Parma"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Chi è 'Pinturicchio' per la Juventus?",
    "options": [
      "Alessandro Del Piero",
      "Andrea Pirlo",
      "Claudio Marchisio",
      "Paulo Dybala"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Il 'Vecchio Balordo' è soprannome storico del:",
    "options": [
      "Genoa",
      "Bologna",
      "Torino",
      "Sampdoria"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Chi è chiamato 'Re Leone' alla Fiorentina?",
    "options": [
      "Gabriel Batistuta",
      "Luka Jovic",
      "Dusan Vlahovic",
      "Stevan Jovetic"
    ],
    "correctIndex": 0,
    "difficulty": 10
  },
  {
    "question": "Il simbolo della Roma è:",
    "options": [
      "Il biscione",
      "La lupa capitolina",
      "Il toro",
      "La zebra"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Quale squadra gioca le partite casalinghe al 'Bentegodi'?",
    "options": [
      "Parma",
      "Verona",
      "Udinese",
      "Bologna"
    ],
    "correctIndex": 1,
    "difficulty": 10
  },
  {
    "question": "Chi era chiamato 'Bobo' tra gli attaccanti italiani?",
    "options": [
      "Filippo Inzaghi",
      "Christian Vieri",
      "Luca Toni",
      "Antonio Di Natale"
    ],
    "correctIndex": 1,
    "difficulty": 10
  }
];
