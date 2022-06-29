import React from 'react'
import { Link } from "react-router-dom";

export default function ItemNav({slug, id, name}) {
  return (
    <Link to={slug} key={id}>
        <li>{name}</li>
    </Link>
  );
}
