const mysql = require('mysql2');

// oggetto di connessione
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jsbuuijlsj46772',
    database: 'dolci'
});

// connessione
connection.connect((err) => {

    // Mostra un errore (fuori) se si verifica un errore (all'interno). Throw interrompe la funzione
    if (err) throw err;

    console.log('Connessione MYSQL avvenuta');

});

module.exports = connection;