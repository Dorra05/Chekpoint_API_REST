const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(" Connexion réussie à MongoDB !"))
.catch(err => console.error(" Erreur de connexion à MongoDB :", err));

// Importation des routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes); // Vérifie bien cette ligne

// Démarrage du serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
