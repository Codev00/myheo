"use client";
import React, { useState } from "react";

const Bustop = () => {
   const [show, setShow] = React.useState(false);
   const ClickMe = () => {
      setShow(!show);
   };
   return (
      <div className="stage">
         <div className="ground-line">
            <div>
               <span className="line1"></span>
               <span className="line2"></span>
               <span className="line3"></span>
               <span className="line1"></span>
               <span className="line2"></span>
               <span className="line3"></span>
            </div>
         </div>
         <div className="tree-wrap">
            <div className="tree">
               <div className="stem">
                  <div className="branch branch1"></div>
                  <div className="branch branch2"></div>
                  <div className="branch branch3"></div>
               </div>
               <div className="leef leef1"></div>
               <div className="leef leef2"></div>
            </div>
         </div>
         <div className="love-front">
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
         </div>
         <div className="love-back">
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
            <div className="love-wrap">
               <div className="love">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="square"></span>
               </div>
            </div>
         </div>

         <h1
            style={{
               color: "indianred",
               top: "75%",
               left: "23%",
               fontSize: "5rem",
               position: "absolute",
            }}
         >
            I LOVE YOU
         </h1>
         <h1
            style={{
               color: "indianred",
               bottom: "3%",
               right: "23%",
               fontSize: "0.5rem",
               position: "absolute",
               cursor: "pointer",
            }}
            onClick={ClickMe}
         >
            Tôi Yêu Em
         </h1>
         <div
            className={`hidden mt-4 transition-all ease-in delay-700  ${
               show && "!block"
            }`}
         >
            <h2 className="font-bold text-2xl text-pink-700">Tôi Yêu Em</h2>
            <div className="italic text-center transition-all ease-in delay-50000">
               <p>Tôi yêu em: đến nay chừng có thể</p>
               <p>Ngọn lửa tình chưa hẳn đã tàn phai</p>
               <p>Nhưng không để em bận lòng thêm nữa</p>
               <p>Hay hồn em phải gợn bóng u hoài.</p>
               <p className="mt-2">Tôi yêu em âm thầm, không hy vọng</p>
               <p>Lúc rụt rè, khi hậm hực lòng ghen</p>
               <p>Tôi yêu em, yêu chân thành, đằm thắm</p>
               <p>Rất may là tôi đã được yêu em.</p>
            </div>
         </div>
         <div className="vehicle-body">
            <div className="wrap-body">
               <div className="rooftop back"></div>
               <div className="rooftop front"></div>
               <div className="body-cover">
                  <div className="top-roof"></div>
                  <div className="indi back-top-indicator"></div>
                  <div className="indi back-bottom-indicator"></div>
                  <div className="back-window">
                     <div className="window-base top"></div>
                     <div className="window-base bottom"></div>
                     <div className="sun-shade"></div>
                     <div className="curtain">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                     <div className="windows-glass-wrap">
                        <div className="glass">
                           <div className="light">
                              <span className="light1"></span>
                              <span className="light2"></span>
                              <span className="light3"></span>
                           </div>
                        </div>
                        <div className="glass">
                           <div className="light">
                              <span className="light1"></span>
                              <span className="light2"></span>
                              <span className="light3"></span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="front-window">
                     <div className="window-base"></div>
                     <div className="sun-shade"></div>
                     <div className="curtain">
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                     <div className="windows-glass-wrap">
                        <div className="light">
                           <span className="light1"></span>
                           <span className="light2"></span>
                           <span className="light3"></span>
                        </div>
                     </div>
                     <div className="air-hole">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
               </div>
               <div className="main-door">
                  <div className="glass">
                     <div className="light">
                        <span className="light1"></span>
                        <span className="light2"></span>
                     </div>
                  </div>
                  <div className="door-handle"></div>
               </div>
               <div className="side-guard">
                  <div className="shade"></div>
                  <div className="bumper back"></div>
                  <div className="bumper front"></div>
                  <div className="front-indicator"></div>
               </div>
            </div>
            <div className="wheel-wrap back">
               <div className="wheel-shadow"></div>
               <div className="wheel">
                  <div className="wheel-outer">
                     <div className="wheel-cup">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="wheel-wrap front">
               <div className="wheel-shadow"></div>
               <div className="wheel">
                  <div className="wheel-outer">
                     <div className="wheel-cup">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Bustop;
