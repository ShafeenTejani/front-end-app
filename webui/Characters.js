import React from "react"

const Characters = (options) => (
  <div>
      {options.data.map(c => <div>{c.name}</div>)}
  </div>
);

export default Characters;
