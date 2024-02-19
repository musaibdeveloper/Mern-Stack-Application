import React from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../components/PlaceList/PlacesList";
import TAJ from "../images/TAJ MAHAL.jpg";

const DUMMY_PLACES = [
  {
    id: "u1",
    title: "Taj Mahal",
    imageUrl: TAJ,
    address: "Agra, Uttar Pardesh",
    description: "7 wonders of the world!",

    location: {
      lat: 27.1751448,
      lng: 78.0395673,
    },
    creator: "u1",
  },

];

export default function UserPlaces() {
  const userID = useParams().userID;
  const lodaedplaces = DUMMY_PLACES.filter((place) => place.creator === userID);
  return <PlacesList items={lodaedplaces} />;
}
