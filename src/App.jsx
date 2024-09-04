import { useEffect, useState } from "react";
import "./App.css";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function Content({ content, index, scr }) {
  //  const el = useRef({})
  // console.log("ind", 5 + index * 105);

  // console.log("inner:", window.innerHeight);
  const el = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(
    function () {
      if (el.current.getBoundingClientRect().top < window.innerHeight)
        setShow(true);
      if (el.current.getBoundingClientRect().bottom > window.innerHeight)
        setShow(false);
      // console.log(el.current.getBoundingClientRect().top < window.innerHeight);
    },
    [scr]
  );

  return (
    <div
      className={
        window.innerHeight > 5 + index * 105
          ? " content"
          : scr && show
          ? "y content"
          : index % 2 === 0
          ? "content1"
          : "content2"
      }
      ref={el}
    >
      <p>show: scr:{Number(scr)}</p>
    </div>
  );
}

function App() {
  let scrolly = 0;
  const contents = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [scr, setScr] = useState(0);
  window.onscroll = function () {
    setScr(window.scrollY);
  };
  return (
    <div className="container">
      {contents.map((content) => (
        <Content
          key={content}
          // content={content}
          index={content}
          scr={scr}
        />
      ))}
    </div>
  );
}

export default App;
