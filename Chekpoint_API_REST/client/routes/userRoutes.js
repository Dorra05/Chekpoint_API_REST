const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET pour récupérer tous les utilisateurs (sans mot de passe)
router.get("/users", async (req, res) => {
    try {
        const users = await User.find().select("name age email"); // Sélectionne uniquement name, age et email
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
});

// POST pour créer un nouvel utilisateur (sans mot de passe)
router.post("/newuser", async (req, res) => {
    try {
        const { name, age, email } = req.body;

        // Vérifie si tous les champs sont remplis
        if (!name || !age || !email) {
            return res.status(400).json({ message: "Tous les champs (name, age, email) sont obligatoires" });
        }

        // Vérifie si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Cet email est déjà utilisé" });
        }

        // Crée un nouvel utilisateur
        const newUser = new User({ name, age, email });

        // Sauvegarder l'utilisateur dans la base de données
        await newUser.save();

        res.status(201).json({ 
            message: "Utilisateur créé avec succès", 
            user: { _id: newUser._id, name: newUser.name, age: newUser.age, email: newUser.email } 
        });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
});

// PUT pour mettre à jour un utilisateur par son ID (sans modifier le mot de passe)
router.put("/users/:id", async (req, res) => {
    try {
        const { name, email, age } = req.body;

        // Vérifier si un autre utilisateur utilise déjà cet email
        const existingUser = await User.findOne({ email });

        if (existingUser && existingUser._id.toString() !== req.params.id) {
            return res.status(400).json({ message: "Cet email est déjà utilisé par un autre utilisateur." });
        }

        // Mettre à jour l'utilisateur sans toucher au mot de passe
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, age },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.json({ message: "Utilisateur mis à jour avec succès", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
});

// router.put("/users/:id", async (req, res) => {
//     try {
//         const { name, age, email } = req.body;
//         const updatedUser = await User.findByIdAndUpdate(
//             req.params.id,
//             { name, age, email },
//             { new: true, runValidators: true }
//         );

//         if (!updatedUser) {
//             return res.status(404).json({ message: "Utilisateur non trouvé" });
//         }

//         res.json({ message: "Utilisateur mis à jour avec succès", user: updatedUser });
//     } catch (error) {
//         res.status(500).json({ message: "Erreur serveur", error: error.message });
//     }
// });

// delete pour supprimer un utilisateur par ID
router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.json({ message: "Utilisateur supprimé avec succès", user });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
});

module.exports = router;

// Route pour récupérer tous les utilisateurs
// router.get("/users", async (req, res) => {
//     try {
//         const users = await User.find(); // Récupère tous les utilisateurs de la base de données
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: "Erreur serveur", error: error.message });
//     }
// });

