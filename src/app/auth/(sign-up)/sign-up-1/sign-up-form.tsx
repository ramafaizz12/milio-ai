'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowRightBold } from 'react-icons/pi';
import { Password, Checkbox, Button, Input, Text } from 'rizzui';
import { Form } from '@core/ui/form';
import { Signup } from 'libs/api-client/auth';
import { routes } from '@/config/routes';
import { SignUpSchema, signUpSchema } from '@/validators/signup.schema';

const initialValues = {
  email: '',
  password: '',
  isAgreed: false,
};

export default function SignUpForm() {
  const [reset, setReset] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    console.log(data);
    setLoading(true); // Set loading state
    try {
      // Make an API call to signup endpoint
      const response = await Signup(data.email, data.password);

      console.log('Signup successful:', response.data);
      setReset({ ...initialValues, isAgreed: false });
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Form<SignUpSchema>
        validationSchema={signUpSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
            <Input
              type="email"
              size="lg"
              label="Email"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              placeholder="Enter your email"
              {...register('email')}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size="lg"
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="col-span-2 flex items-start">
              <Checkbox
                {...register('isAgreed')}
                className="[&>label>span]:font-medium [&>label]:items-start"
                label={
                  <>
                    By signing up you have agreed to our{' '}
                    <Link
                      href="/"
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      Terms
                    </Link>{' '}
                    &{' '}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </>
                }
              />
            </div>
            <Button
              size="lg"
              type="submit"
              className="col-span-2 mt-2"
              disabled={loading} // Disable button while loading
            >
              <span>{loading ? 'Signing Up...' : 'Get Started'}</span>{' '}
              {!loading && <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />}
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        Don’t have an account?{' '}
        <Link
          href={routes.auth.signIn1}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          Sign In
        </Link>
      </Text>
    </>
  );
}
