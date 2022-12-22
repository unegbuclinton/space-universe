import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import graphics from '../../src/icons/img/lock-graphics.png';
import { DPIconLoginFrame } from '../icons';
const ResetPassword = () => {
  return (
    <div className="flex  h-screen">
      <DPIconLoginFrame className="absolute" width="200" height="250" />
      <div className="flex flex-col items-center justify-center w-2/4	">
        <div className="w-3/5 my-0 mx-auto">
          <h1 className="text-4xl text-center mb-4 font-medium">
            Reset Password
          </h1>
          <p className="text-base text-center mb-6">
            Enter your email address and we’ll send you an email with
            instructions to reset your password
          </p>
          <FormControl>
            <FormLabel className="text-cool-grey">Email </FormLabel>
            <Input type="email" height="12" />

            <div className="flex justify-center mt-6 ">
              <Link
                to="/approval"
                className="bg-primary-blue text-white text-base py-2 px-20 rounded"
              >
                Reset
              </Link>
            </div>
          </FormControl>
        </div>
      </div>

      <img className="w-2/4" src={graphics} alt="" />
    </div>
  );
};

export default ResetPassword;
