import { React, useRef } from "react";

import headshot from "./profil.jpg";

function App() {
  const top = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const getRefFromId = (id) => {
    switch (id) {
      case "1":
        return top;
      case "2":
        return about;
      case "3":
        return projects;
      case "4":
        return contact;
      default:
        return null;
    }
  };

  const scrollToRef = (e) => {
    e.preventDefault();
    let ref = getRefFromId(e.target.id);
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  const isInViewport = (ref) => {
    const bounding = ref.current.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    return !(bounding.bottom < 0 || bounding.top - viewHeight >= 0);
  };

  return (
    <div className="duck">
      <div className="nav-top">
        <h1 className="playfair-display">Filip von Knorring</h1>
        <nav className="navbar">
          <button id="1" onClick={scrollToRef}>
            Top
          </button>
          <button id="2" onClick={scrollToRef}>
            Om mig
          </button>
          <button id="3" onClick={scrollToRef}>
            Projekt
          </button>
          <button id="4" onClick={scrollToRef}>
            Kontakt
          </button>
        </nav>
      </div>
      <div class="content">
        <header ref={top} id="Home" className="header">
          <div className="subtitle rotate-in-2-cw">
            <h6 className="playfair-display">Jag är</h6>
          </div>
          <div class="playfair-display flicker-in-1">
            <h1>Filip</h1>
            <h1 className="h1-sub">
              <div class="knorrbox">von Knorring</div>
            </h1>
          </div>
          <img
            src={headshot}
            alt="headshot"
            className="headshot slide-in-top"
          />
          <i
            id="2"
            class="arrow down fade-in"
            style={{ marginTop: "4em", position: "absolute" }}
            onClick={scrollToRef}
          ></i>
        </header>
        <section ref={about} className="about fade-in">
          <h1 className="playfair-display">Vem är jag?</h1>
          <div className="about-layout">
            <div class="about-short">
              <h5
                className={"playfair-display"}
                style={{ marginBottom: "1em" }}
              >
                Om mig
              </h5>
              <p>
                Vid tillfället så studerar jag Civilingenjörsutbildningen inom
                IT på Uppsala Universitet. Under tiden har jag fått ett väldigt
                stort intresse för webbutveckling och programmering i allmänhet.
                Jag har samlat på mig kompetenser inom frontendramvek som React
                och Vue, även apputveckling med React Native. Utöver frontend så
                har jag även byggt en REST API med Express och Node.js samt en
                databas med MySQL. Vilka blir hostade på AWS
              </p>
            </div>
            <ul className="about-list">
              <h5
                className={"playfair-display"}
                style={{ width: "fit-content" }}
              >
                Kompetenser
              </h5>
              <div className="about-listitem">
                <li>React</li>
                <li>React Native</li>
                <li>Vue</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>AWS</li>
              </div>
            </ul>
            <div class="about-short">
              <h5
                className={"playfair-display"}
                style={{ marginBottom: "1em" }}
              >
                Vad letar jag efter?
              </h5>
              <p>
                Vid tillfället så studerar jag Civilingenjörsutbildningen inom
                IT på Uppsala Universitet. Under tiden har jag fått ett väldigt
                stort intresse för webbutveckling och programmering i allmänhet.
                Jag har samlat på mig kompetenser inom frontendramvek som React
                och Vue, även apputveckling med React Native. Utöver frontend så
                har jag även byggt en REST API med Express och Node.js samt en
                databas med MySQL. Vilka blir hostade på AWS
              </p>
            </div>
          </div>
        </section>
        <section ref={projects} className="light fade-in">
          <h1 className="playfair-display">Mina projekt</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
