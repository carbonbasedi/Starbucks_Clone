import data from "./data/dbMenu.json";

const Menu = () => {
  const renderItems = (items) => {
    return items.map((item) => (
      <a href="#" class="">
        <div className="flex flex-row items-center gap-5 font-semibold">
          <div className="overflow-hidden rounded-lg">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover object-center"
            ></img>
          </div>
          <h3 className="mt-4 text-lg text-gray-700 text-center">{item.name}</h3>
        </div>
      </a>
    ));
  };

  const renderFilter = (items) => {
    return items.map((item) => (
      <ul className="list-none p-0 list-inside">
        <li className="p-2">
          <a href="">{item.name}</a>
        </li>
      </ul>
    ));
  };

  return (
    <div className="w-full flex justify-center p-5 ">
      <div className=" flex flex-col items-start p-3 ">
        <h2 className="text-lg font-bold">Drinks</h2>
        {renderFilter(data.drinks)}
        <hr />
        <h2 className="text-lg font-bold">Foods</h2>
        {renderFilter(data.food)}
        <hr />
        <h2 className="text-lg font-bold">Home Coffee</h2>
        {renderFilter(data.home_coffee)}
        <hr />
        <h2 className="text-lg font-bold">Merchandise</h2>
        {renderFilter(data.merchandise)}
        <hr />
        <h2 className="text-lg font-bold">Gift Cards</h2>
        {renderFilter(data.gift_cards)}
      </div>
      <div className="py-5 flex flex-col justify-center items-end">
        <div className="w-full">
          <div className="bg-white m-5">
            <h2 className="text-2xl mx-auto px-5 font-semibold">Drinks</h2>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="mx-auto grid px-4 py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-2 gap-y-10 xl:grid-cols-2 xl:gap-x-4">
                {renderItems(data.drinks)}
              </div>
            </div>
          </div>
          <div className="bg-white m-5">
            <h2 className="text-2xl mx-auto px-5 font-semibold">Foods</h2>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="mx-auto grid px-4 py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-2 gap-y-10 xl:grid-cols-2 xl:gap-x-4">
                {renderItems(data.food)}
              </div>
            </div>
          </div>
          <div className="bg-white m-5">
            <h2 className="text-2xl mx-auto px-5 font-semibold">Home Coffee</h2>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="mx-auto grid px-4 py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-2 gap-y-10 xl:grid-cols-2 xl:gap-x-4">
                {renderItems(data.home_coffee)}
              </div>
            </div>
          </div>
          <div className="bg-white m-5">
            <h2 className="text-2xl mx-auto px-5 font-semibold">Merchandise</h2>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="mx-auto grid px-4 py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-2 gap-y-10 xl:grid-cols-2 xl:gap-x-4">
                {renderItems(data.merchandise)}
              </div>
            </div>
          </div>
          <div className="bg-white m-5">
            <h2 className="text-2xl mx-auto px-5 font-semibold">Gift Cards</h2>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="mx-auto grid px-4 py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-2 gap-y-10 xl:grid-cols-2 xl:gap-x-4">
                {renderItems(data.gift_cards)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
