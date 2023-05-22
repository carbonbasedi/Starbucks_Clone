import React,{ useState } from "react";

const Rewards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    }

  return (
    <div>
      <div className="bg-green-950 h-auto w-auto px-16 py-3">
        <span className="text-white font-bold ">STARBUCKS® REWARDS</span>
      </div>
      <div className="md:h-[300px] xl:h-[600px] w-auto flex justify-center bg-green-200 relative">
        <img
          src="https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png"
          alt="star"
          className="object-cover"
        />
        <div className="absolute md:left-0 md:top-0 lg:top-40  p-10 flex flex-col justify-start items-start gap-5">
          <h2 className="font-semibold lg:text-4xl md:text-sm">
            FREE COFFEE IS A TAP AWAY
          </h2>
          <span className="text-lg">Join now to start earning Rewards</span>
          <button className="rounded-full border px-3 py-1 bg-green-600 text-white font-semibold">
            Join Now
          </button>
          <span className="text-lg">
            Or{" "}
            <a href="#" className="underline">
              join in the app
            </a>{" "}
            for the best experience
          </span>
        </div>
      </div>
      <div className="h-auto w-auto flex flex-col justify-center items-center py-20">
        <div className="flex flex-col justify-center items-center mb-10 gap-5">
          <span className="text-2xl">Getting started is easy</span>
          <span className="text-lg">
            Earn Stars and get rewarded in a few easy steps.
          </span>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="flex flex-col justify-center items-center mx-10 ">
            <div className="mb-6 border-green-500 rounded-full border-2 h-14 w-14 flex justify-center items-center font-semibold">
              <span className="text-2xl text-green-500">1</span>
            </div>
            <div className="text-lg font-medium">
              <span>Create an account</span>
            </div>
            <div className="text-center">
              <span className="">
                To get started,{" "}
                <a href="#" className="underline text-green-500">
                  join now
                </a>
                . You can also{" "}
                <a href="#" className="underline text-green-500">
                  join in the app
                </a>{" "}
                to get access to the full range of Starbucks® Rewards benefits.
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-10 ">
            <div className="mb-6 border-green-500 rounded-full border-2 h-14 w-14 flex justify-center items-center font-semibold">
              <span className="text-2xl text-green-500">2</span>
            </div>
            <div className="text-lg font-medium">
              <span>Order and pay how you’d like</span>
            </div>
            <div className="text-center">
              <span className="">
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways.{" "}
                <a href="#" className="underline text-green-500">
                  Learn how
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-10 ">
            <div className="mb-6 border-green-500 rounded-full border-2 h-14 w-14 flex justify-center items-center font-semibold">
              <span className="text-2xl text-green-500">3</span>
            </div>
            <div className="text-lg font-medium">
              <span>Earn Stars, get Rewards</span>
            </div>
            <div className="text-center">
              <span className="">
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-100 h-auto w-auto p-14 flex flex-col justify-center items-center">
        <h3 className="text-2xl font-semibold">Get your favorites for free</h3>
      </div>
      <div className="w-auto bg-green-100 h-auto flex justify-center items-center gap-5">
        <button autoFocus onClick={() => handleClick(0)} className="text-2xl font-semibold focus:outline-none focus:border-b-4 p-4  focus:border-green-700 ">
          <span>25</span>
          <span className="text-yellow-300">★</span>
        </button>
        <button onClick={() => handleClick(1)} className="text-2xl font-semibold focus:outline-none focus:border-b-4 p-4  focus:border-green-700 ">
          <span>100</span>
          <span className="text-yellow-300">★</span>
        </button>
        <button onClick={() => handleClick(2)} className="text-2xl font-semibold focus:outline-none focus:border-b-4 p-4  focus:border-green-700 ">
          <span>200</span>
          <span className="text-yellow-300">★</span>
        </button>
        <button onClick={() => handleClick(3)} className="text-2xl font-semibold focus:outline-none focus:border-b-4 p-4  focus:border-green-700 ">
          <span>300</span>
          <span className="text-yellow-300">★</span>
        </button>
        <button onClick={() => handleClick(4)} className="text-2xl font-semibold focus:outline-none focus:border-b-4 p-4  focus:border-green-700 ">
          <span>400</span>
          <span className="text-yellow-300">★</span>
        </button>
      </div>
      <div>
        <div>{activeIndex === 0 && <div className=" transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4">
            <div><img className="w-96" src="https://www.starbucks.ca/weblx/images/rewards/reward-tiers/025.png" alt="cups" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-96 font-semibold">Customize your drink</h4>
                <span className="block w-96">Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</span>
            </div>
            </div>}</div>
        <div>{activeIndex === 1 && <div className="transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4">
            <div><img className="w-96" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png" alt="cake" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-96 font-semibold">Brewed hot or iced coffee or tea, bakery item, packaged snack and more</h4>
                <span className="block w-96">Treat yourself to an iced coffee, buttery croissant, bag of chips and more.</span>
            </div>
            </div>}</div>
        <div>{activeIndex === 2 && <div className="transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4 gap-7">
            <div><img className="w-96" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" alt="bottle" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-96 font-semibold">Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</h4>
                <span className="block w-96">Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</span>
            </div>
            </div>}</div>
        <div>{activeIndex === 3 && <div className="transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4">
            <div><img className="w-96" src="https://www.starbucks.ca/weblx/images/rewards/reward-tiers/300.png" alt="pastry" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-96 font-semibold">Sandwich, protein box or at-home coffee</h4>
                <span className="block w-96">Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.</span>
            </div>
            </div>}</div>
        <div>{activeIndex === 4 && <div className="transition-transform duration-500 ease-in-out w-auto bg-green-200 flex justify-center items-center p-4">
            <div><img className="w-96" src="https://www.starbucks.ca/weblx/images/rewards/reward-tiers/400.png" alt="cups" /></div>
            <div className="flex justify-center items-start flex-col gap-3">
                <h4 className="text-xl w-96 font-semibold">Select Starbucks® merchandise</h4>
                <span className="block w-96">Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</span>
            </div>
            </div>}</div>
      </div>
      <div className="h-auto w-auto flex flex-col justify-center items-center py-20">
        <div className="flex flex-col justify-center items-center mb-10 gap-5">
          <span className="text-2xl font-bold">Endless Extras</span>
          <span className="text-lg w-4/5 text-center">
          Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col justify-center items-center mx-10 gap-4">
            <div className="mb-6 border-green-500 rounded-full h-24 w-24 flex justify-center items-center font-semibold">
                <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="cupNburger" />
            </div>
            <div className="text-lg font-medium">
              <span>Fun freebies</span>
            </div>
            <div className="text-center">
              <span className="">
              Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.
              </span>
            </div>
            <div><a href="#" className="underline text-green-500">Learn more</a></div>
          </div>
          <div className="flex flex-col justify-center items-center mx-10 gap-4">
            <div className="mb-6 border-green-500 rounded-full h-24 w-24 flex justify-center items-center font-semibold">
                <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="phone" />
            </div>
            <div className="text-lg font-medium">
              <span>Order & pay ahead</span>
            </div>
            <div className="text-center">
              <span className="">
              Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.
              </span>
            </div>
            <div><a href="#" className="underline text-green-500">Learn more</a></div>
          </div>
          <div className="flex flex-col justify-center items-center mx-10 gap-4">
            <div className="mb-6 border-green-500 rounded-full h-24 w-24 flex justify-center items-center font-semibold">
                <img src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="cake" />
            </div>
            <div className="text-lg font-medium">
              <span>Get to free faster</span>
            </div>
            <div className="text-center">
              <span className="">
              Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
              </span>
            </div>
            <div><a href="#" className="underline text-green-500">Learn more</a></div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f0eb] w-full h-auto flex flex-col justify-center items-center p-16">
        <div className="flex flex-col justify-center items-center gap-3 pb-10">
            <h3 className="text-2xl font-semibold">Cash or card, you earn Stars</h3>
            <span className="text-md">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</span>
        </div>
        <div className="grid grid-cols-3">
            <div className="flex flex-col justify-start items-start">
                <span className="text-xl font-semibold">1★Star per dollar</span>
                <span className="text-sm">Pay as you go</span>
            </div>
            <div className="flex justify-start items-start gap-2">
                <img className="w-20" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="phone" />
                <div className="flex flex-col justify-start items-start gap-2">
                    <span className="text-xl font-semibold">Scan and pay separately</span>
                    <span className="text-sm">Use cash or credit/debit card at the register.</span>
                </div>
            </div>
            <div className="flex justify-start items-start gap-2">
                <img className="w-20" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="phone" />
                <div className="flex flex-col justify-start items-start gap-2">
                    <span className="text-xl font-semibold">Save payment in the app</span>
                    <span className="text-sm">Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step</span>
                </div>
            </div>
        </div>
        <hr className="w-full border-gray-300 sm:mx-auto lg:my-8" />
        <div className="grid grid-cols-3">
            <div className="flex flex-col justify-start items-start">
                <span className="text-xl font-semibold">2★Stars per dollar</span>
                <span className="text-sm">Add funds in the app</span>
            </div>
            <div className="flex justify-start items-start gap-2">
                <img className="w-20" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="phone" />
                <div className="flex flex-col justify-start items-start gap-2">
                    <span className="text-xl font-semibold">Preload</span>
                    <span className="text-sm">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</span>
                </div>
            </div>
            <div className="flex justify-start items-start gap-2">
                <img className="w-20" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="phone" />
                <div className="flex flex-col justify-start items-start gap-2">
                    <span className="text-xl font-semibold">Register your gift card</span>
                    <span className="text-sm">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
