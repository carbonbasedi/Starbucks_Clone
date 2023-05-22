import React, { useState } from "react";

const JoinNow = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameBlur = () => {
    if (username.trim() === "") {
      setUsernameError("Enter your first name");
    } else {
      setUsernameError("");
    }
  };

  const handleLastnameBlur = () => {
    if (lastname.trim() === "") {
      setLastnameError("X Enter your last name");
    } else {
      setLastnameError("");
    }
  };

  const handleEmailBlur = () => {
    if (email.trim() === "") {
      setEmailError("Please enter your email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (password.trim() === "") {
      setPasswordError("X Password is required ");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl m-10 font-extrabold">Create an account</h2>
      <span className="mt-8 mb-3 font-bold">STARBUCKS® REWARDS</span>
      <span className="mt-8 mb-3 max-w-sm text-center text-xs">
        Join Starbucks Rewards to earn Stars for free food and drinks, any way
        you pay. Get access to mobile ordering, a birthday Reward, and more
      </span>
      <div className="min-w-max max-w-3xl w-1/3 my-5 border rounded-lg shadow-md p-10 ">
        <form className="flex flex-col" onClick={handleSubmit}>
          <span className="">* indicates required field</span>
          <div>
            <p className="my-4 font-bold text-lg">Personal Information</p>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            ></label>
            <input
              className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              style={{
                border: usernameError ? "1px solid red" : "",
                color: usernameError ? "#024b30" : "",
              }}
              id="firstname"
              type="text"
              placeholder="First Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={handleUsernameBlur}
            />
            {usernameError && (
              <p
                className="text-red-500 text-xs italic"
                style={{ color: "red" }}
              >
                {usernameError}
              </p>
            )}
            <div class="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastname"
              ></label>
              <input
                className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                style={{
                  border: lastnameError ? "1px solid red" : "",
                  color: lastnameError ? "#024b30" : "",
                }}
                id="lastname"
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                onBlur={handleLastnameBlur}
              />
              {lastnameError && (
                <p
                  className="text-red-500 text-xs italic"
                  style={{ color: "red" }}
                >
                  {lastnameError}
                </p>
              )}
            </div>
          </div>
          <div>
            <p className="font-bold">Account Security</p>
            <div class="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              ></label>
              <input
                className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                style={{
                  border: emailError ? "1px solid red" : "",
                  color: emailError ? "#024b30" : "",
                }}
                id="email"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
              />
              {emailError && (
                <p
                  className="text-red-500 text-xs italic"
                  style={{ color: "red" }}
                >
                  {emailError}
                </p>
              )}
              <p className="text-sm m-2">This will be your username</p>
            </div>
            <div class="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              ></label>
              <input
                className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                style={{
                  border: passwordError ? "1px solid red" : "",
                  color: passwordError ? "#024b30" : "",
                }}
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handlePasswordBlur}
              />
              {passwordError && (
                <p
                  className="text-red-500 text-xs italic"
                  style={{ color: "red" }}
                >
                  {passwordError}
                </p>
              )}
              <p className="text-sm m-1 max-w-md ">
                Create a password 8 to 25 characters long that includes at least
                1 uppercase and 1 lowercase letter, 1 number and 1 special
                character like an exclamation point or asterisk.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-start mb-2 gap-3">
            <a
              href="#"
              className="underline hover:no-underline text-green-600 text-md py-1 font-bold"
            >
              Already have a Starbucks gift card?
            </a>
            <p className="text-md font-semibold text-gray-500 m-1 max-w-md">
              COLLECT MORE STARS & EARN REWARDS
            </p>
            <p className="text-md font-semibold text-gray-500 m-1 max-w-md">
              Email is a great way to know about offers and what’s new from
              Starbucks.
            </p>
            <div class="flex items-center mr-4 mb-3">
              <input
                id="green-checkbox"
                type="checkbox"
                value=""
                className="w-8 h-8 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label
                for="green-checkbox"
                className="ml-2 text-sm max-w-md font-medium text-gray-900 dark:text-gray-300"
              >
                Yes, I’d like email from StarbucksKnow about initiatives,
                announcements and product offers.
              </label>
            </div>
            <p className="text-md font-semibold text-gray-500 m-1 max-w-md">
              TERMS OF USE
            </p>
            <a
              href="#"
              className="underline hover:no-underline max-w-lg text-green-600 text-xs py-1"
            >
              I agree to the Starbucks® Rewards Terms opens in new window and
              the Starbucks Card Terms opens in new window and have read the
              Starbucks Privacy Statement opens in new window.
            </a>
          </div>
          <button
            type="submit"
            className="self-end text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinNow;
