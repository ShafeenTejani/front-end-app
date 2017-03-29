import React from "react"

const Characters = (options) => (
    <div>
        {options.data.map(c => <div className="character" key={c.name}>{c.name}</div>)}
    </div>
);

export default Characters;
