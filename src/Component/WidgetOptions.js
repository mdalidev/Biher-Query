import React from "react";
import "../Css/Widgetoptions.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
        <a href="https://developer.ibm.com/technologies/mobile/articles/" target={"_blank"} style={{textDecoration:"none"}}>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
      </a>
      <a href="https://quotaofquotes.quora.com/" target={"_blank"} style={{textDecoration:"none"}}>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1574818-100-mzdwostcualpwcxekyrvyqqpychetdoc.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Quota of Quotes</h5>
          <p>Daily dosage of unforgettable lines from ...</p>
        </div>
      </div>
      </a>
<a href="https://artradarjournal.com/art-education/what-is-the-difference-between-art-and-artistic/#:~:text=As%20defined%20by%20the%20dictionary,because%20they%20possess%20creative%20qualities." target={"_blank"} style={{textDecoration:"none"}}>




      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1644613-100-ydflucgoeztbhwyurtmlqqrgfqmjmhpl.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Art & Artist</h5>
          <p>A Space retated to creating, practicing an...</p>
        </div>
      </div>

      </a>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1647318-100-kmwvqbpzatmylibelrowrerfqbspekwo.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Friedrich Nietzche</h5>
          <p>A Space dedicated to great work of Friedrich...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1578647-100-xkggvbyzfkvzhyklewtkjijefekqbazb.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Stock Market Strategies</h5>
          <p>Everything about investing in Stock...</p>
        </div>
      </div>

      <a href="https://worldarchitecture.org/" target={"_blank"} style={{textDecoration:"none"}}>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1711686-100-glvgnbatdxpjbhrkyphlfamqrryfccvp.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Architecture World</h5>
          <p>All about civil architecture...</p>
        </div>
      </div>
      </a>
     
    </div>
  );
}

export default WidgetContent;