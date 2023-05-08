// import { MenuItem } from "@components/sections/header/MenuItem";
// import Link from "next/link";
// import React, { useState } from "react";
// import { MENU } from "@utils";
// import { Logo } from ".";
// import { ButtonCircle } from "./button-circle";
// import { useEffect } from "react";

// export const Burger = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("lock");
//     } else {
//       document.body.classList.remove("lock");
//     }
//   }, [isOpen]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOverlayClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="burger">
//       <button
//         className={`${
//           isOpen ? "burger__menu burger__menu--active" : "burger__menu"
//         }`}
//         onClick={toggleMenu}
//       ></button>
//       {isOpen && (
//         <div className="burger__menu-overlay" onClick={handleOverlayClick}>
//           <div
//             className={`${
//               isOpen
//                 ? "burger__menu-wrapper burger__menu-wrapper--active"
//                 : "burger__menu-wrapper"
//             }`}
//           >
//             <div className="burger__menu-top">
//               <Logo />
//             </div>
//             <ul className="burger__menu-list">
//               {MENU.map((item) => (
//                 <MenuItem
//                   key={item.name}
//                   total={item.total}
//                   href={item.href}
//                   name={item.name}
//                 />
//               ))}
//             </ul>
//             <ul className="footer__social-list">
//               <li className="footer__social-item">
//                 <Link href="#">
//                   <svg
//                     width="33"
//                     height="33"
//                     viewBox="0 0 33 33"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_337_4363)">
//                       <path
//                         d="M3.67508 4.17627L3.67652 4.17484C4.76415 3.08473 6.16504 2.50001 8.22375 2.19764C10.3126 1.89085 12.9642 1.88867 16.4971 1.88867C20.03 1.88867 22.6818 1.89083 24.7716 2.19697C26.8309 2.49864 28.2337 3.08204 29.3243 4.16976C30.415 5.2605 30.9998 6.66333 31.3022 8.72274C31.609 10.8123 31.6111 13.464 31.6111 16.9968C31.6111 20.5297 31.609 23.1814 31.3022 25.271C30.9998 27.3304 30.415 28.7333 29.3243 29.824C28.2336 30.9146 26.8295 31.4995 24.7691 31.8019C22.6788 32.1088 20.027 32.1109 16.4971 32.1109C12.9671 32.1109 10.3155 32.1088 8.22588 31.8019C6.16621 31.4995 4.76402 30.9147 3.67652 29.8248L3.6758 29.824C2.58519 28.7334 2.00031 27.3293 1.69789 25.2688C1.39108 23.1785 1.38892 20.5268 1.38892 16.9968C1.38892 13.4669 1.39108 10.8152 1.69789 8.72564C2.0003 6.66597 2.5851 5.26377 3.67508 4.17627Z"
//                         strokeWidth="2"
//                       />
//                       <path
//                         d="M14.638 25.8869V18.3332H12.0555V15.3314H14.638V12.9663C14.638 10.3966 16.2407 8.99805 18.5808 8.99805C19.702 8.99805 20.665 9.08051 20.9444 9.11679V11.8019H19.3215C18.0488 11.8019 17.803 12.3956 17.803 13.2631V15.3314H20.6751L20.2811 18.3332H17.803V25.8869"
//                         fill="#EAEAEA"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_337_4363">
//                         <rect
//                           width="32"
//                           height="32"
//                           fill="white"
//                           transform="translate(0.5 0.998047)"
//                         />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </Link>
//               </li>
//               <li className="footer__social-item">
//                 <Link href="#">
//                   <svg
//                     width="33"
//                     height="33"
//                     viewBox="0 0 33 33"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_337_4369)">
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M4.30574 4.80093L4.30288 4.80379C3.39653 5.70807 2.86373 6.90231 2.57732 8.85303C2.28212 10.8636 2.27778 13.4398 2.27778 16.9951C2.27778 20.5504 2.28212 23.1267 2.57733 25.138C2.86375 27.0894 3.3967 28.2861 4.30431 29.1937L4.30575 29.1952C5.21003 30.1015 6.40427 30.6343 8.35499 30.9207C10.3656 31.2159 12.9418 31.2203 16.4971 31.2203C20.0524 31.2203 22.6286 31.2159 24.64 30.9207C26.5915 30.6343 27.7881 30.1013 28.6956 29.1937C29.6036 28.2859 30.1364 27.0904 30.4227 25.1402C30.7179 23.1296 30.7222 20.5534 30.7222 16.9951C30.7222 13.4369 30.7179 10.8607 30.4227 8.85014C30.1364 6.90043 29.6038 5.70505 28.6964 4.79726C27.7888 3.89206 26.5931 3.36045 24.6427 3.07473C22.6317 2.78015 20.0552 2.77582 16.4971 2.77582C12.9388 2.77582 10.3627 2.78017 8.3529 3.07536C6.40338 3.36169 5.21029 3.89431 4.30574 4.80093ZM29.9528 3.53948C32.5 6.08671 32.5 9.98009 32.5 16.9951C32.5 24.0102 32.5 27.9036 29.9528 30.4508C27.4055 32.998 23.5063 32.998 16.4971 32.998C9.48782 32.998 5.58867 32.998 3.04724 30.4508C0.5 27.9036 0.5 24.0044 0.5 16.9951C0.5 9.98587 0.5 6.08671 3.04724 3.54528C5.58867 0.998047 9.48205 0.998047 16.4971 0.998047C23.5122 0.998047 27.4055 0.998047 29.9528 3.53948Z"
//                         fill="#EAEAEA"
//                       />
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M16.5 22.3331C19.4455 22.3331 21.8334 19.9453 21.8334 16.9998C21.8334 14.0543 19.4455 11.6664 16.5 11.6664C13.5545 11.6664 11.1667 14.0543 11.1667 16.9998C11.1667 19.9453 13.5545 22.3331 16.5 22.3331ZM16.5 24.1109C20.4274 24.1109 23.6111 20.9272 23.6111 16.9998C23.6111 13.0724 20.4274 9.88867 16.5 9.88867C12.5726 9.88867 9.38892 13.0724 9.38892 16.9998C9.38892 20.9272 12.5726 24.1109 16.5 24.1109Z"
//                         fill="#EAEAEA"
//                       />
//                       <path
//                         d="M24.0556 10.7745C25.2829 10.7745 26.2778 9.7796 26.2778 8.5523C26.2778 7.325 25.2829 6.33008 24.0556 6.33008C22.8283 6.33008 21.8334 7.325 21.8334 8.5523C21.8334 9.7796 22.8283 10.7745 24.0556 10.7745Z"
//                         fill="#EAEAEA"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_337_4369">
//                         <rect
//                           width="32"
//                           height="32"
//                           fill="white"
//                           transform="translate(0.5 0.998047)"
//                         />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </Link>
//               </li>
//             </ul>
//             <div className="burger__bottom">
//               <ButtonCircle text="спробувати урок" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import { MenuItem } from "@components/sections/header/MenuItem";
import Link from "next/link";
import React, { useState } from "react";
import { MENU } from "@utils";
import { Logo } from ".";
import { ButtonCircle } from "./button-circle";
import { useEffect } from "react";

export const Burger = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger">
      <button
        className={`${
          isOpen ? "burger__menu burger__menu--active" : "burger__menu"
        }`}
        onClick={toggleMenu}
      ></button>

      <div
        className={`${
          isOpen
            ? "burger__menu-overlay burger__menu-overlay--active"
            : "burger__menu-overlay"
        }`}
        onClick={handleOverlayClick}
      >
        <div className="burger__menu-wrapper">
          <div className="burger__menu-top">
            <Logo />
          </div>
          <ul className="burger__menu-list">
            {MENU.map((item) => (
              <MenuItem
                key={item.name}
                total={item.total}
                href={item.href}
                name={item.name}
              />
            ))}
          </ul>
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <Link href="#">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_337_4363)">
                    <path
                      d="M3.67508 4.17627L3.67652 4.17484C4.76415 3.08473 6.16504 2.50001 8.22375 2.19764C10.3126 1.89085 12.9642 1.88867 16.4971 1.88867C20.03 1.88867 22.6818 1.89083 24.7716 2.19697C26.8309 2.49864 28.2337 3.08204 29.3243 4.16976C30.415 5.2605 30.9998 6.66333 31.3022 8.72274C31.609 10.8123 31.6111 13.464 31.6111 16.9968C31.6111 20.5297 31.609 23.1814 31.3022 25.271C30.9998 27.3304 30.415 28.7333 29.3243 29.824C28.2336 30.9146 26.8295 31.4995 24.7691 31.8019C22.6788 32.1088 20.027 32.1109 16.4971 32.1109C12.9671 32.1109 10.3155 32.1088 8.22588 31.8019C6.16621 31.4995 4.76402 30.9147 3.67652 29.8248L3.6758 29.824C2.58519 28.7334 2.00031 27.3293 1.69789 25.2688C1.39108 23.1785 1.38892 20.5268 1.38892 16.9968C1.38892 13.4669 1.39108 10.8152 1.69789 8.72564C2.0003 6.66597 2.5851 5.26377 3.67508 4.17627Z"
                      strokeWidth="2"
                    />
                    <path
                      d="M14.638 25.8869V18.3332H12.0555V15.3314H14.638V12.9663C14.638 10.3966 16.2407 8.99805 18.5808 8.99805C19.702 8.99805 20.665 9.08051 20.9444 9.11679V11.8019H19.3215C18.0488 11.8019 17.803 12.3956 17.803 13.2631V15.3314H20.6751L20.2811 18.3332H17.803V25.8869"
                      fill="#EAEAEA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_337_4363">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0.5 0.998047)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li className="footer__social-item">
              <Link href="#">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_337_4369)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.30574 4.80093L4.30288 4.80379C3.39653 5.70807 2.86373 6.90231 2.57732 8.85303C2.28212 10.8636 2.27778 13.4398 2.27778 16.9951C2.27778 20.5504 2.28212 23.1267 2.57733 25.138C2.86375 27.0894 3.3967 28.2861 4.30431 29.1937L4.30575 29.1952C5.21003 30.1015 6.40427 30.6343 8.35499 30.9207C10.3656 31.2159 12.9418 31.2203 16.4971 31.2203C20.0524 31.2203 22.6286 31.2159 24.64 30.9207C26.5915 30.6343 27.7881 30.1013 28.6956 29.1937C29.6036 28.2859 30.1364 27.0904 30.4227 25.1402C30.7179 23.1296 30.7222 20.5534 30.7222 16.9951C30.7222 13.4369 30.7179 10.8607 30.4227 8.85014C30.1364 6.90043 29.6038 5.70505 28.6964 4.79726C27.7888 3.89206 26.5931 3.36045 24.6427 3.07473C22.6317 2.78015 20.0552 2.77582 16.4971 2.77582C12.9388 2.77582 10.3627 2.78017 8.3529 3.07536C6.40338 3.36169 5.21029 3.89431 4.30574 4.80093ZM29.9528 3.53948C32.5 6.08671 32.5 9.98009 32.5 16.9951C32.5 24.0102 32.5 27.9036 29.9528 30.4508C27.4055 32.998 23.5063 32.998 16.4971 32.998C9.48782 32.998 5.58867 32.998 3.04724 30.4508C0.5 27.9036 0.5 24.0044 0.5 16.9951C0.5 9.98587 0.5 6.08671 3.04724 3.54528C5.58867 0.998047 9.48205 0.998047 16.4971 0.998047C23.5122 0.998047 27.4055 0.998047 29.9528 3.53948Z"
                      fill="#EAEAEA"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.5 22.3331C19.4455 22.3331 21.8334 19.9453 21.8334 16.9998C21.8334 14.0543 19.4455 11.6664 16.5 11.6664C13.5545 11.6664 11.1667 14.0543 11.1667 16.9998C11.1667 19.9453 13.5545 22.3331 16.5 22.3331ZM16.5 24.1109C20.4274 24.1109 23.6111 20.9272 23.6111 16.9998C23.6111 13.0724 20.4274 9.88867 16.5 9.88867C12.5726 9.88867 9.38892 13.0724 9.38892 16.9998C9.38892 20.9272 12.5726 24.1109 16.5 24.1109Z"
                      fill="#EAEAEA"
                    />
                    <path
                      d="M24.0556 10.7745C25.2829 10.7745 26.2778 9.7796 26.2778 8.5523C26.2778 7.325 25.2829 6.33008 24.0556 6.33008C22.8283 6.33008 21.8334 7.325 21.8334 8.5523C21.8334 9.7796 22.8283 10.7745 24.0556 10.7745Z"
                      fill="#EAEAEA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_337_4369">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0.5 0.998047)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          </ul>
          <div className="burger__bottom">
            <ButtonCircle text="спробувати урок" />
          </div>
        </div>
      </div>
    </div>
  );
};
