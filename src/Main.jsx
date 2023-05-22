const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 px-8">
        <figure className="order-last md:order-first flex flex-col items-center justify-center p-8 md:p-28 text-center bg-[#006241] dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-white">
              Find your adventure
            </h3>
            <p className="my-4 text-white text-xl md:text-2xl">
              Starbucks® Summer Game is here! Play for your chance to win—more
              than 10 million prizes are up for grabs!*
            </p>
            <button
              type="button"
              className="text-white bg-transparent border border-gray-300 focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm md:text-base px-5 py-2.5 md:px-8 md:py-4 mr-2 mb-2"
            >
              Play Now
            </button>
          </blockquote>
        </figure>
        <figure className="order-first md:order-last flex flex-col items-center justify-center text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-full"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84026.jpg"
            alt="profile picture"
          ></img>
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 px-8">
        <figure className="flex flex-col items-center justify-center text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-full"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83789.jpg"
            alt="profile picture"
          ></img>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 md:p-28 text-center bg-[#d4e9e2] dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-white lg:mb-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-green-900">
              For your enjoy-mint
            </h3>
            <p className="my-4 text-green-900 text-xl md:text-2xl">
              Hooray for our newest cooler-than-cool Chocolate Java Mint
              Frappuccino® blended beverage.
            </p>
            <button
              type="button"
              className="text-green-900 bg-transparent border border-green-900 focus:outline-none hover:bg-green-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm md:text-base px-5 py-2.5 md:px-8 md:py-4 mr-2 mb-2"
            >
              Order Now
            </button>
          </blockquote>
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 px-8">
        <figure
          className="order-last md:order-first flex flex-col items-center justify-center p-8 md:p-28
          text-center bg-[#cbe678] dark:bg-gray-800 dark:border-gray-700"
        >
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-green-800">
              Macadamia just dropped
            </h3>
            <p className="my-4 text-green-800 text-xl md:text-2xl">
              Introducing the White Chocolate Macadamia Cream Cold Brew with
              toasted cookie crumbles.
            </p>
            <button
              type="button"
              className="text-green-800 bg-transparent border border-green-800 focus:outline-none hover:bg-lime-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm md:text-base px-5 py-2.5 md:px-8 md:py-4 mr-2 mb-2"
            >
              Order Now
            </button>
          </blockquote>
        </figure>
        <figure className="order-first md:order-last flex flex-col items-center justify-center text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-full"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83790.jpg"
            alt="profile picture"
          ></img>
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8 px-8">
        <figure className="flex flex-col items-center justify-center text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-full"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83791.jpg"
            alt="profile picture"
          ></img>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 md:p-28 text-center bg-[#f1ff67] dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-white lg:mb-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-green-700">
              Sweetest of the hive
            </h3>
            <p className="my-4 text-green-700 text-xl md:text-2xl">
              Buzzing into the café, an adorable new Bumblebee Cake Pop dipped
              in chocolaty icing.
            </p>
            <button
              type="button"
              className="text-green-700 bg-transparent border border-green-900 focus:outline-none hover:bg-yellow-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm md:text-base px-5 py-2.5 md:px-8 md:py-4 mr-2 mb-2"
            >
              Order Now
            </button>
          </blockquote>
        </figure>
      </div>
      <div className="border-b-2">
        <div className="mx-auto py-10 flex justify-center items-center">
          <p className="text-center text-sm w-full md:w-96">
            *NO PURCHASE NECESSARY. Participating stores only. Starbucks
            Partners employees are not eligible to win prizes. Ends 6/18/23. To
            play and for{" "}
            <a href="/" className="underline hover:no-underline">
              Official Rules
            </a>{" "}
            visit{" "}
            <a href="/" className="underline hover:no-underline">
              starbuckssummergame.com
            </a>
            . Entrants can receive a maximum of 2 plays per day, plus, bonus
            opportunities to earn additional plays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
