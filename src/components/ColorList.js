import React from "react";
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorLists = colors.map((color) => {
    return <li style={{ color }}>{color}</li>;
  });
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorLists}
      </ol>
    </div>
  );
}


export default ColorList;
