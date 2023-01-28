import React from "react";
import Link from 'next/link'
const Forgotpassword = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-5 mx-auto flex justify-center">
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Reset Password</h1>
        <p className="text-sm dark:text-gray-400">
          or Sign in to access your account
        </p>
      </div>
      <form
        novalidate=""
        action=""
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label for="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
          <div></div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Reset
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">
            Don't have an account yet?
            <Link
              rel="noopener noreferrer"
              href="/signup"
              className="hover:underline dark:text-violet-400"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
    </div>
    </section>
  );
};

export default Forgotpassword;
