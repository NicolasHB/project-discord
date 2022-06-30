import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function ItemNav({slug, id, name}) {
  return (
    <li key={id} className="">
      <Link to={slug}>{name}</Link>
    </li>
  );
}

// const Li = styled.li`
// a {
//   color: #fff;
// }
// `