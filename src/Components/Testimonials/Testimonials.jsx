import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Natasha Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                decision I've ever made. The supportive community,
                state-of-the-art facilities and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Rohan Patel</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                The Environment at Edusity is one of best in terms of
                creativity, safety and learning. The facilities provided are as
                best as they can get. The decision to join Educity has really
                been the best decision I could make.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Emma Heyes</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Something about Educity that stands out the most according to me
                is the Environment that has been created here which makes you
                feel protected. The faculty at Educity is truly wonderful. They
                are always there for you.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Harry Robinson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                If you are looking for top quality of education at reasonable
                fees then Educity is the best place for you. Educity focus on
                the overall development of your personality.The community at
                Educity is the best.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
