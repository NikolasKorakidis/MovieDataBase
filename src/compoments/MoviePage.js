import React from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const route_parameters = useParams();
  console.log(route_parameters);
  return <h1>{route_parameters}</h1>;
}
