import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-8 md:pt-0">
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-24 p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4 space-y-4">
          <span className="text-2xl font-bold">WEBWISE</span>
          <p className="text-sm">
            At Aspire Agency, we are dedicated to empowering businesses through innovative web solutions. Our team of experts leverages cutting-edge technology to create user-friendly Aspire Agency that not only enhance your online presence but also drive engagement and conversions. 
            Join us in transforming your digital landscape and unlocking your business's full potential.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Products</h1>
          <div className="space-y-5">
            <h3>Overview</h3>
            <h3>Marketplace</h3>
            <h3>Workers</h3>
          </div>
        </div>

        <div>
          <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Resources</h1>
          <div className="space-y-5">
            <h3>Blog</h3>
            <h3>FAQ</h3>
            <h3>Services</h3>
          </div>
        </div>

        <div>
          <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Social</h1>
          <div className="space-y-3">
            <FaFacebook size={32} />
            <FaInstagram size={32} />
            <FaSquareXTwitter size={32} />
          </div>
        </div>
      </div>
      {/* Added footer text */}
      <div className="text-center p-4">
        <p className="text-sm">Developed By 🦂Riveen_Official </p>
      </div>
    </footer>
  );
};

export default Footer;
