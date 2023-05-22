const Finder = () => {
  return (
    <div className="w-full flex">
      <div className="w-2/5 px-6 py-5 h-screen">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">
            Find a store
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-gray-500 block w-full pl-5 p-2.5 "
              placeholder="Find a store"
              required
            ></input>
          </div>
          <button
            type="submit"
            class="p-2.5  text-sm font-medium text-black bg-transparent border focus:outline-none focus:ring-gray-300 "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="">
          <div className="flex flex-col items-start py-5 px-3 my-5 gap-5">
            <span className="text-3xl font-semibold">We are unable to access your exact location</span>
            <span className="text-sm">To find a Starbucks store, use the search feature, navigate using the map, or turn on location services.</span>
          </div>
          <div className="flex flex-col items-start py-5 px-3 my-5 gap-3">
          <a href="#" className="text-green-600"><span className=""> Privacy Notice </span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          <a href="#" className="text-green-600"><span className=""> Terms of Use </span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          <a href="#" className="text-green-600"><span className=""> Do Not Share My Personal Information </span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
      <div className="w-3/5 h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4116.168716624777!2d49.85024478186632!3d40.37710241231721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e0!3m2!1sen!2saz!4v1684705227597!5m2!1sen!2saz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Finder;
