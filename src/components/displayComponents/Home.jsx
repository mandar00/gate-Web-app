import React from "react";
import homeImage from "../../images/home.png";
import eLearning from "../../images/vidoelec.png";
import mockTest from "../../images/mocktest.png";
import Forum from "../../images/forum.png";
import onlineLec from "../../images/onlineLectures.jpg"
import onlineNotes from "../../images/onlineNotes.jpg"
import onlineTest from "../../images/onlineTest.jpg"
import onlineForum from "../../images/onlineForum2.jpg"

const Home = () => {
  const onScroll=()=>{
    console.log(window.scrollY)
  }

  window.addEventListener("scroll",onScroll)
  return (
    <>
      <div className="homeMainDiv">
        <div className="sliderDiv">
          <div className="imageContainer">
            <img src={homeImage} alt="home"></img>
          </div>
          <div className="imageContainer">
            <img src={eLearning} alt="Video Lec"></img>
          </div>
          <div className="imageContainer">
            <img src={mockTest} alt="Test"></img>
          </div>
          <div className="imageContainer">
            <img src={Forum} alt="Forum"></img>
          </div>
        </div>





        <div className="homeContentDiv">
          <div className="homeContentTitle">
              <h1>Kick Start Your GATE Prep Journey </h1><br/>
              <h1>With..</h1>
          </div>
          <div className="homeContentFeatuers">
            <div className="homeContentLec">
                <div className="homeContentLecImg">
                  <img src={onlineLec} alt="onlineLec"></img>
                  <p>Be Mentored By the Best <br/> All the Sorted Best Video Lectures At Your Finger Tips .Learn At Your Own Pace</p>
                </div>

            </div>
            <div className="homeContentNotes">
            <div className="homeContentNotesImg">
                  <img src={onlineNotes} alt="onlineLec"></img>
                  <p>Not A Video Lecture Fan  <br/>Don't Worry We Got You covred. Learn From  Notes Of Best Professors. A Perfect Revision Patner.  </p>
                </div>


            </div>
            <div className="homeContentTest">
            <div className="homeContentTestImg">
                  <img src={onlineTest} alt="onlineLec"></img>
                  <p>Done With The Study  <br/>  Time To Test Your Knowledge. Get Onboard With Mock Test For Each Sub With Each Level Of Diffculty </p>
                </div>

            </div>
            <div className="homeContentForum">
            <div className="homeContentForumImg">
                  <img src={onlineForum} alt="onlineLec"></img>
                  <p> Stuck On A Problem You Can't Find Answer To  <br/> Ask the Experinced. Connect With People Share Your Knowledge</p>
                </div>

            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
