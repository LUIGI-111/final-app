const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'perfumeria'
});

conn.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('✅ Conectado exitosamente a la base de datos.');
});

module.exports = conn;
