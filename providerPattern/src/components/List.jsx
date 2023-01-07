import React from "react";
import ListItem from "./ListItem.jsx";

export default function List(){
 return (
     <ul className="list">
      {new Array(10).fill(0).map((x, i) => (
          <ListItem key={i} />
      ))}
     </ul>
 )
}
