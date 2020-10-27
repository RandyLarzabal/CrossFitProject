import React from "react";
import "./App.css";
import ProductCard from "./component";

function App() {
  return (
    <div>
      <ProductCard photo="url" price="3$" title="je suis un tire" />
    </div>
  );
}

export default App;
