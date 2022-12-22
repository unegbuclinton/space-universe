import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import graphics from '../../src/icons/img/lock-graphics.png';
import lockImg from '../../src/icons/img/lock-img.png';
import { DPIconLoginFrame } from '../icons';

const Lockscreen = () => {
  return (
    <div className="flex  h-screen">
      <DPIconLoginFrame className="absolute" width="200" height="250" />
      <div className="flex flex-col items-center justify-center w-2/5	">
        <img src={lockImg} alt="" />
        <h1 className="text-3xl ">Hi ! Austin Robertson</h1>
        <p className="text-base mb-6">
          Enter your password to acess the admin.
        </p>
        <div className="w-3/5 my-0 mx-auto">
          <FormControl>
            <FormLabel className="text-cool-grey">Password </FormLabel>
            <Input type="email" height="12" />

            <div className="flex justify-center mt-6 ">
              <Link
                to="/dashboard"
                className="bg-primary-blue text-white text-base py-2 px-20 rounded"
              >
                Login
              </Link>
            </div>
          </FormControl>
        </div>
      </div>

      <img className="w-3/5" src={graphics} alt="" />
    </div>
  );
};

export default Lockscreen;
