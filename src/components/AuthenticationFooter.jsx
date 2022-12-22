import React from 'react';
import { Link } from 'react-router-dom';
import {
  DPIconFacebook,
  DPIconGmail,
  DPIconInstagram,
  DPIconLinkedln,
} from '../icons';

const AuthenticationFooter = ({ onClick, initialtext, clickableText }) => {
  return (
    <>
      <p className="text-center font-base mt-4 text-#232D42">
        or sign in with other accounts?
      </p>
      <div className="flex justify-center gap-5 mt-4">
        <DPIconGmail />
        <DPIconFacebook />
        <DPIconInstagram />
        <DPIconLinkedln />
      </div>
      <p className="text-center mt-4 cursor-pointer">
        {initialtext}
        <Link to={onClick} className="text-primary-blue">
          {clickableText}
        </Link>
      </p>
    </>
  );
};

export default AuthenticationFooter;
