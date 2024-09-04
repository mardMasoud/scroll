import { useEffect, useState } from "react";
import "./App.css";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function Content({ content }) {
  //  const el = useRef({})
  const [scr, setScr] = useState(false);
  // window.onscroll = function () {
  //   setScr(true);
  //   console.log("scr");
  // };
  console.log("inner:", window.innerHeight);
  const el = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(function () {
    if (el.current.getBoundingClientRect().bottom > window.innerHeight)
      setShow(true);
    console.log(el.current.getBoundingClientRect().bottom < window.innerHeight);
  }, []);

  return (
    <div
      className={scr ? "x content" : show ? " content1" : " content"}
      ref={el}
    >
      <p>
        show: {Number(show)} scr:{Number(scr)}
      </p>
    </div>
  );
}

function App() {
  const contents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="container">
      {contents.map((content) => (
        <Content
          key={content}
          // content={content}
        />
      ))}
    </div>
  );
}

export default App;
