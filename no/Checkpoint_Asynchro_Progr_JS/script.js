const function1 = async (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Délai d'1 seconde
    }
  };


const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "Données de l'API" });
      }, 2000); 
    });
  };
  const function2 = async()=>{
    try {
        const data =  await fetchData()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
function2();

const fetching = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("L'appel API a échoué"));
      }, 1000);
    });
  };

  const await = async () => {
    try {
      const data = await fetching();
      console.log(data);
    } catch (error) {
      console.error("Erreur pendant la récupération. réessayer plus tard.");
    }
  };

  await();


  const concurrentReq = async () => {
    try {
      const [result1, result2] = await Promise.all([fetchData(), fetchingData()]);
      console.log("Résultats combinés:");
      console.log("Résultat 1:", result1);
      console.log("Résultat 2:", result2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 concurrentReq();


 const fetchFromUrl = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  };

  const parallelCal = async (urls) => {
    try {
      const fetchPromises = urls.map(url => fetchFromUrl(url));
      const results = await Promise.all(fetchPromises);
      console.log("Réponses de toutes les URLs:", results); // Enregistrer toutes les réponses de URLs
    } catch (error) {
      console.error("Erreur lors des appels parallèles", error);
    }
  };
  parallelCal(urls);