import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import graphics from '../../src/icons/img/signup-graphics.png';
import AuthenticationFooter from '../components/AuthenticationFooter';
import { DPIconRegisterFrame } from '../icons';

const SignUpPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DPIconRegisterFrame className="absolute right-0" />
      <img className="w-2/4" src={graphics} alt="" />

      <div className="flex flex-col items-center justify-center w-3/5 h-screen pt-80 pb-20 overflow-auto">
        <div className="w-4/5 my-0 mx-auto">
          <FormControl>
            <h1 className="text-3xl font-bold text-center	 mb-4 ">Sign Up</h1>
            <p className="text-base text-cool-grey text-center mb-4">
              Create your Hope UI account
            </p>
            <div className="flex justify-between items-center gap-5">
              <div className="w-full">
                <FormLabel className="text-cool-grey">First Name </FormLabel>
                <Input type="email" height="12" />
              </div>
              <div className=" w-full">
                <FormLabel className="text-cool-grey">Last Name </FormLabel>
                <Input type="passowrd" height="12" />
              </div>
            </div>

            <div className="flex justify-between items-center gap-5">
              <div className="w-full">
                <FormLabel className="text-cool-grey">Email </FormLabel>
                <Input type="email" height="12" />
              </div>
              <div className="my-4 w-full">
                <FormLabel className="text-cool-grey">Phone No. </FormLabel>
                <Input type="number" height="12" />
              </div>
            </div>

            <div className="flex justify-between items-center gap-5">
              <div className="w-full">
                <FormLabel className="text-cool-grey">Password </FormLabel>
                <Input type="password" height="12" />
              </div>
              <div className="my-4 w-full">
                <FormLabel className="text-cool-grey">
                  Confirm password
                </FormLabel>
                <Input type="passowrd" height="12" />
              </div>
            </div>

            <Stack>
              <div className="flex justify-center">
                <Checkbox size="md">I agree with the terms of use</Checkbox>
              </div>
            </Stack>
            <div className="flex justify-center mt-6 ">
              <button className="bg-primary-blue text-white text-base py-2 px-20 rounded">
                Sign Up
              </button>
            </div>
          </FormControl>
        </div>
        <AuthenticationFooter
          initialtext=" Already have an Account ?"
          onClick="/"
          clickableText="Sign in"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
