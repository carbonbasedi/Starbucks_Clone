import React, { useState } from "react";

const JoinNow = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handleUsernameBlur = () => {
        if (username.trim() === '') {
            setUsernameError('Username or email address is required');
        } else {
            setUsernameError('');
        }
    };

    const handlePasswordBlur = () => {
        if (password.trim() === '') {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl m-10 font-extrabold">Sign in or create an account</h2>
            <div className="max-w-xl w-1/3 my-5 border rounded-lg shadow-lg p-10 ">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                <span className="">* indicates required field</span>
                <div className="mb-4 pt-7">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none`}
                            style={{ border: usernameError ? '1px solid red' : '', color: usernameError ? '#024b30' : '' }}
                            id="username"
                            type="text"
                            placeholder="Username or email address"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onBlur={handleUsernameBlur}
                        />
                        {usernameError && <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>{usernameError}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none`}
                            style={{ border: passwordError ? '1px solid red' : '', color: passwordError ? '#024b30' : '' }}
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={handlePasswordBlur}
                        />
                        {passwordError && <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>{passwordError}</p>}
                    </div>
                <div className="flex flex-col items-start mb-2">
                <div className="flex items-center mr-4 mb-3">
                    <input id="green-checkbox" type="checkbox" value="" className="w-8 h-8 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="green-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keep me signed in <a href="#" className="underline hover:no-underline">Details</a></label>
                </div>
                <a href="#" className="underline hover:no-underline text-green-600 text-lg py-1 font-bold">Forgot your username?</a>
                <a href="#" className="underline hover:no-underline text-green-600 text-lg py-1 font-bold">Forgot your password?</a>
                </div>
                <button type="submit" className="self-end text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2">Sign In</button>
                </form>
            </div>
            <div className="flex flex-col max-w-sm justify-center items-center text-center gap-4 m-10">
                <span className="text-green-700 font-bold">JOIN STARBUCKS® REWARDS</span>
                <span className="text-sm">Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</span>
                <button type="button" className="text-green-700 bg-white border border-green-700 focus:outline-none hover:bg-green-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-md px-5 py-1.5 mr-2 mb-2">Join Now</button>
            </div>
                <hr className="border w-full shadow-xl" />
        </div>
    );
}
 
export default JoinNow;