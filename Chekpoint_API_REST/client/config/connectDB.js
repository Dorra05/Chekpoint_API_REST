const mongoose = require("mongoose");
require("dotenv").config(); // Charge les variables d'environnement

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(" Connexion réussie à MongoDB !");
    } catch (error) {
        console.error(" Erreur de connexion à MongoDB :", error.message);
        process.exit(1); // Arrêter l'application en cas d'échec
    }
};

module.exports = connectDB;
