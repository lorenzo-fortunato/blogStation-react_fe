App creata con l'utilizzo di React.js volta allo studio di questa tecnologia.

In ./api è presente lo script server.js (creato utilizzando Express.js) che gestisce la parte backend dell'applicazione. Questo file in particolare:
    -    gestisce la connessione al database (mysql)
    -    gestisce il meccanismo di login (JWT)
    -    fornisce gli endpoint necessari al funzionamento dell'applicazione (api)

Il file populateDb.js non è necessario al funzionamento dell'app, ma permette di popolare la tabella blogs del database velocemente con dati randomici (a questo scopo è stata utilizzata la libreria @ngneat/falso).

---------------------------------------------------------------------------------------------------------------------

Per lanciare correttamente l'app:

    1. da terminale recarsi nella cartella e lanciare il file server.js, che serve per simulare il server necessario alla login, con il comando:
    -   node server.js

    2. aprire un altro terminale, recarsi nella cartella e lanciare il comando:
    -   npm run start
    per avviare l'applicazione react

