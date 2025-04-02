import React from "react";
import movies from "../movies";
import { useNavigate, useParams } from "react-router-dom";

const SynopsisTeaser = () => {
  const params = useParams();
  const navigate=useNavigate();
  const thewantedmovie = movies.find(
    (Element) => Element.id === Number(params.id)
  );
  console.log(thewantedmovie);

  return (
    <>
      <h1>{thewantedmovie.title}</h1>
      <p><strong>Synopsis:</strong>{thewantedmovie.Synopsis}</p>
      <iframe
        width="855"
        height="485"
        src={thewantedmovie.trailer}
        title="This Is Where We Fight "
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <br/>
      <button onClick={()=>navigate('/')}>Accueil</button>
    </>
  );
};
export default SynopsisTeaser;