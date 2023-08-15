import { useState } from "react";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Content
        name="Loren"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      eveniet cum nobis sapiente, quae distinctio in inventore alias corporis
      mollitia exercitationem aspernatur, earum fuga accusantium dolores quas
      pariatur dignissimos id!"
      />
      <br />
      <Content
        name="Ipsum"
        text="Ab veritatis Quis est saepe atque cum eaque obcaecati eos voluptate corrupti vel dignissimos soluta eos explicabo nihil. Vel adipisci reiciendis aut voluptate quibusdam et impedit enim. Eos provident voluptatem aut neque illum est cumque minima eum esse dolorum et illum culpa ea dolore porro!"
      />
    </>
  );
}

export default App;
