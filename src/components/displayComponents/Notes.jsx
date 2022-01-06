import React, { useEffect, useState } from "react";
import pdfImg from "../../images/pdf.png"
import MathPdfData from "../../dataFiles/pdfData/Mathpdf.json"
import NaData from "../../dataFiles/pdfData/Na_SSpdf.json"

const Notes = () => {
  const [show, setShow] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 30) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div onScroll={onScroll} className="notesMainDiv">
        <div className="notesSubBar">
          <a href="#Math">Math</a>
          <a href="#Na">NA ,SS</a>
          <a href="a">Sub3</a>
          <a href="a">Sub4</a>
        </div>
        <div className="notesMainContentDiv">
          <div className="notesPdfDiv"> 
              <div id="#top" className="notesPdfDivTitle">
                  Lets Get Started..
                  </div>



              <div className="notesPdf">
              <p>Math</p>
              {MathPdfData.map((val)=>{
                return (
                  val.topic.map((value, index)=>{
                    return(
                      <div className="notesPdfTopicDiv">
                    <div className="notesPdfIcon">
                        <img src={pdfImg} alt="pdf"></img>
                    </div>
                    <div className="notesPdfTitle"> 
                          <a target="_blank" rel="noreferrer noopener" href={`${val.path[index]}`}>{value} </a>
                    </div>
                </div>
                    )
                  })
                )
              })}
             
              </div>
              <div className="notesPdf">
              <p>Netwrok Analysis ,Signals and Systems</p>
              {NaData.map((val)=>{
                return (
                  val.topic.map((value, index)=>{
                    return(
                      <div className="notesPdfTopicDiv">
                    <div className="notesPdfIcon">
                        <img src={pdfImg} alt="pdf"></img>
                    </div>
                    <div className="notesPdfTitle"> 
                          <a target="_blank" rel="noreferrer noopener" href={`${val.path[index]}`}>{value} </a>
                    </div>
                </div>
                    )
                  })
                )
              })}
             
              </div>
          </div>

          <div className="goToTop">
            {show && <button onClick={topFunction} className="topbtn" type="button"><i className="fa fa-arrow-circle-o-up"></i></button> }
        </div>
        </div>

      </div>
    </>
  );
};
export default Notes;
