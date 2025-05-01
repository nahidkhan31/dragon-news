import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-outline btn-secondary w-full">
          <FaGoogle size={24}></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={24}></FaGithub>
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
