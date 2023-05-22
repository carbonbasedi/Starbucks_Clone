import React, { useState } from "react";

const JoinNow = () => {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [lastname, setLastname] = useState("")
const [password, setPassword] = useState('');
const [usernameError, setUsernameError] = useState('');
const [lastnameError, setLastnameError] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');

const handleUsernameBlur = () => {
    if (username.trim() === '') {
        setUsernameError('Username or email address is required');
    } else {
        setUsernameError('');
    }
};

const handleLastnameBlur = () => {
    if (lastname.trim() === '') {
        setLastnameError('Last name is required');
    } else {
        setLastnameError('');
    }
};

const handleEmailBlur = () => {
    if (email.trim() === '') {
        setEmailError('Email address is required');
    } else {
        setEmailError('');
    }
};

const handlePasswordBlur = () => {
    if (password.trim() === '') {
        setPasswordError('x Password is required ');

    } else {
        setPasswordError('');
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
};

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl m-10 font-extrabold">Create an account</h2>
            <span className="mt-8 mb-3 font-bold">STARBUCKS® REWARDS</span>
            <span className="mt-8 mb-3 max-w-sm text-center text-xs">Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and more</span>
            <div className="max-w-xl w-1/3 my-5 border rounded-lg shadow-md p-10 ">
                <form className="flex flex-col" onClick={handleSubmit}>
                <span className="">* indicates required field</span>
                <div>
                <p className="my-4 font-bold text-lg">Personal Information</p>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            </label>
            <input
                className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                style={{ border: usernameError ? '1px solid red' : '', color: usernameError ? '#024b30' : '' }}
                id="firstname"
                type="text"
                placeholder="First Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={handleUsernameBlur}
            />
            {usernameError && (
                <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>
                    {usernameError}
                </p>
            )}
                    <div class="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                
            </label>
            <input
                className={`shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                style={{ border: lastnameError ? '1px solid red' : '', color: lastnameError ? '#024b30' : '' }}
                id="lastname"
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                onBlur={handleLastnameBlur}
            />
            {lastnameError && (
                <p className="text-red-500 text-xs italic" style={{ color: 'red' }}>
                    {lastnameError}
                </p>
            )}
                    </div>
                </div>
                <div>
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="* Username or email address" required></input>
                    </div>
                    <div class="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="* Password" required></input>
                    </div>
                </div>
                <div class="flex flex-col items-start mb-2">
                <div class="flex items-center mr-4 mb-3">
                    <input id="green-checkbox" type="checkbox" value="" className="w-8 h-8 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="green-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keep me signed in <a href="#" className="underline hover:no-underline">Details</a></label>
                </div>
                <a href="#" className="underline hover:no-underline text-green-600 text-lg py-1 font-bold">Forgot your username?</a>
                <a href="#" className="underline hover:no-underline text-green-600 text-lg py-1 font-bold">Forgot your password?</a>
                </div>
                <button type="submit" className="self-end text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2">Sign In</button>
                </form>
            </div>
        </div>
    );
}
 
export default JoinNow;