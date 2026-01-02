import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("lightblue");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="container fixed right-38 bottom-12 text-black justify-center flex bg-amber-50 w-[80vw] items-center m-auto h-10 rounded-md">
        <ul className="flex gap-2">
          <li>blue</li>
          <li>blue</li>
          <li>blue</li>
          <li>blue</li>
          <li>blue</li>
          <li>blue</li>
        </ul>
        
      </div>
    </div>
  );
};

export default App;
