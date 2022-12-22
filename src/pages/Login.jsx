import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import graphics from '../../src/icons/img/login-graphics.png';
import AuthenticationFooter from '../components/AuthenticationFooter';
import { DPIconLoginFrame } from '../icons';

const LoginPage = () => {
  return (
    <div className="flex  h-screen">
      <DPIconLoginFrame className="absolute" />
      <div className="flex flex-col items-center justify-center w-2/4">
        <div className="w-3/5 my-0 mx-auto">
          <FormControl>
            <h1 className="text-3xl font-bold text-center	 mb-4 ">Sign In</h1>
            <p className="text-base text-cool-grey text-center	">
              Sign in to stay connected.
            </p>
            <div>
              <FormLabel className="text-cool-grey">Email </FormLabel>
              <Input type="email" height="12" />
            </div>
            <div className="my-4">
              <FormLabel className="text-cool-grey">Password </FormLabel>
              <Input type="passowrd" height="12" />
            </div>
            <Stack>
              <div className="flex justify-between">
                <Checkbox size="md">Remember me ?</Checkbox>
                <Link to="/reset-password" className="text-primary-blue">
                  Forget Password ?
                </Link>
              </div>
            </Stack>
            <div className="flex justify-center mt-6 ">
              <Link
                to="/dashboard"
                className="bg-primary-blue text-white text-base py-2 px-20 rounded"
              >
                Sign In
              </Link>
            </div>
          </FormControl>
          <AuthenticationFooter
            initialtext="  Don’t have an account ?"
            onClick="/signup"
            clickableText=" Click here to sign up."
          />
        </div>
      </div>

      <img className="w-2/4" src={graphics} alt="" />
    </div>
  );
};

export default LoginPage;
