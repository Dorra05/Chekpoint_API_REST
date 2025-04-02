// 📌 Importation du hook useState depuis React
// useState est utilisé pour gérer l'état local du composant
import { useState } from "react";

// 📌 Définition du composant fonctionnel Counter
function Counter() {
    // 🔹 Déclaration de l'état 'count' avec une valeur initiale de 0
    // 'setCount' est une fonction qui permet de modifier la valeur de 'count'
    const [count, setCount] = useState(0);

    // ✅ Fonction pour incrémenter le compteur (+1)
    const increment = () => {
        setCount(prevCount => prevCount + 1); // Utilisation de prevCount pour éviter des problèmes de mise à jour asynchrone
    };

    // 🔽 Fonction pour décrémenter le compteur (-1)
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    // 🔄 Fonction pour réinitialiser le compteur à 0
    const reset = () => {
        setCount(0);
    };

    // 📌 Affichage du composant
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {/* 🔢 Affichage de la valeur actuelle du compteur */}
            <h1>Compteur : {count}</h1>

            {/* 🎯 Bouton pour incrémenter */}
            <button 
                onClick={increment} 
                style={{ fontSize: "20px", padding: "10px 20px", marginRight: "10px" }}
            >
                ➕ Incrémenter
            </button>

            {/* 🎯 Bouton pour décrémenter */}
            <button 
                onClick={decrement} 
                style={{ fontSize: "20px", padding: "10px 20px", marginRight: "10px", backgroundColor: "orange" }}
            >
                ➖ Décrémenter
            </button>

            {/* 🎯 Bouton pour réinitialiser */}
            <button 
                onClick={reset} 
                style={{ fontSize: "20px", padding: "10px 20px", backgroundColor: "red", color: "white" }}
            >
                🔄 Réinitialiser
            </button>
        </div>
    );
}

// 📌 Exportation du composant Counter pour pouvoir l'utiliser dans App.js
export default Counter;
