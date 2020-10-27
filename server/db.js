const mongoose = require('mongoose');
const config = require('./config/env.config');

// Connexion à la DB
console.log(config.db_port);
mongoose.connect(
    `${config.db_dialect}://${config.db_user}:${config.db_password}@${config.db_host}:${config.db_port}/${config.db_name}`,
    {
    useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur pendant la connexion à la DB'));
db.once('open', () => {
    console.log(`Connecté à la DB ${config.db_name}, félicitations !`)
})