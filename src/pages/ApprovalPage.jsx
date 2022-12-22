import React from 'react';
import { Link } from 'react-router-dom';
import graphics from '../../src/icons/img/signup-graphics.png';
import { DPIconApprovalIcon, DPIconRegisterFrame } from '../icons';
const ApprovalPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DPIconRegisterFrame className="absolute right-0" />

      <div className="flex flex-col items-center justify-center w-3/5">
        <div className="w-4/5 flex flex-col items-center justify-center">
          <DPIconApprovalIcon />
          <h1 className="font-bold text-primary-blue text-6xl mb-6">
            Success !
          </h1>
          <p className="text-center mb-8">
            A email has been send to your email@domain.com. Please check for an
            email from company and click on the included link to reset your
            password.
          </p>
        </div>
        <Link
          to="/"
          className="bg-primary-blue text-white text-base py-2 px-20 rounded"
        >
          Back to Home
        </Link>
      </div>

      <img className="w-2/4" src={graphics} alt="" />
    </div>
  );
};

export default ApprovalPage;
