import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find us on</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <Link
            to="https://www.facebook.com/nahidkhan.niloy.1"
            className="btn bg-base-100 join-item justify-start">
            <FaFacebook /> Facebook
          </Link>
          <Link
            to="https://www.instagram.com/niloynahidkhan/"
            className="btn bg-base-100 join-item justify-start">
            <FaInstagram />
            Instagram
          </Link>
          <Link
            to="https://www.linkedin.com/in/nahid-khan-niloy-77b1b2261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="btn bg-base-100 join-item justify-start">
            <FaLinkedin /> Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
