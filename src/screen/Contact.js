import React from "react";
import ContactUs from '../asset/contactUs.svg'
import {faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faAt, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  return (
        <div className="container py-8 mx-auto">
          <div className="flex flex-row">
            <div className="w-1/3 mr-4 mt-10">
              <h1 className="text-5xl text-purple-900 font-sans font-bold">
                 Contact Us
              </h1>
              <p className="text-black text-lg font-base font-sans">
                Untuk informasi silahkan hubungi kontak kami.
              </p>
              <ul>
                  <li className="text-xl mt-2 font-semibold ">Contact:</li>
                <li>
                  <a className="hover:text-purple-700 flex flex-row" href="tel:089694149131"><FontAwesomeIcon icon={faPhone}/> 0896-9414-9131</a>
                </li>
                <li>
                  <a className="hover:text-purple-700" href="mailto:bujangcreator@gmail.com">
                   <FontAwesomeIcon icon={faAt} /> bujangcreator@gmail.com
                  </a>
                </li>
                <li>
                  <a className="hover:text-purple-700" href="http://instagram.com/bujangcreator"><FontAwesomeIcon icon={faInstagram}/> @bujangcreator</a>
                </li>
                <li>
                  <a className="hover:text-purple-700" href="http://instagram.com/bujangcreator"><FontAwesomeIcon icon={faFacebookF}/> @bujangcreator</a>
                </li>
              </ul>
            </div>
            <div className="w-2/3">
                <img className="w-full" src={ContactUs} alt="Contact Us"/>
            </div>
          </div>
        </div>
  );
};
export default Contact;
