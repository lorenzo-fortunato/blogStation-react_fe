App creata con l'utilizzo di React.js volta allo studio di questa tecnologia.

Momentaneamente viene utilizzato anche il framework Express.js per gestire l'autenticazione (questa al momento è parziale, non ha vincoli di accesso).

Per lanciare correttamente l'app:

    1. da terminale recarsi nella cartella e lanciare il file server.js, che serve per simulare il server necessario alla login, con il comando:
    -   node server.js

    2. aprire un altro terminale, recarsi nella cartella e lanciare il comando:
    -   npx json-server --watch data/db.json -p 8000
    per utilizzare json server verso il file json utilizzato come momentanea sorgente dati

    3. aprire un altro terminale, recarsi nella cartella e lanciare il comando:
    -   npm run start
    per avviare l'applicazione react

NB: il punto 1 e 2 cono momentanei, sto provvedendo a sviluppare un backend ed un db completi che permettano di rendere il tutto più congruente
