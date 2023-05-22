import "flowbite-react";
import React, { useState } from "react";

const Footer = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const renderAccordionItem = (title, links, index) => {
    const isActive = activeIndexes.includes(index);

    return (
      <div key={index}>
        <h2
          className="mb-10 text-lg font-semibold text-gray-700 dark:text-white"
          onClick={() => toggleAccordion(index)}
        >
          {title}
        </h2>
        <ul
          className={`text-gray-500 dark:text-gray-500 font-medium ${
            isActive ? "active" : ""
          }`}
        >
          {links.map((link, i) => (
            <li key={i} className="my-5">
              <a href="/" className="hover:text-slate-600">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-7 w-full max-w-screen-xl p-4 py-6 lg:py-8 m-2">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-5">
            {renderAccordionItem(
              "About Us",
              [
                "Our Company",
                "Our Coffee",
                "Stories and News",
                "Starbucks Archive",
                "Investor Relations",
                "Customer Service",
              ],
              0
            )}
            {renderAccordionItem(
              "Careers",
              [
                "Culture and Values",
                "Inclusion, Diversity and Equity",
                "College Achievement Plan",
                "Alumni Community",
                "U.S. Careers",
                "International Careers",
              ],
              1
            )}
            {renderAccordionItem(
              "Social Impact",
              ["People", "Planet", "Environmental and Social Impact Reporting"],
              2
            )}
            {renderAccordionItem(
              "For Business Partners",
              [
                "Landlord Support Center",
                "Suppliers",
                "Corporate Gift Card Sales",
                "Office and Foodservice Coffee",
              ],
              3
            )}
            {renderAccordionItem(
              "Order and Pickup",
              [
                "Order on the App",
                "Order on the Web",
                "Delivery",
                "Order and Pickup Options",
                "Explore and Find Coffee for Home",
              ],
              4
            )}
          </div>
        </div>
      </div>
      <hr className="my-6 px-10 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="px-10 sm:flex sm:items-start sm:justify-start flex-col gap-5 mb-10">
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-8 h-8"
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.1179,104.1179,0,0,0,128,24Zm28.624,144.65722a8.00058,8.00058,0,0,1-10.73633,3.56641,39.98258,39.98258,0,0,0-35.85156.04,7.99966,7.99966,0,1,1-7.20117-14.28711,55.97479,55.97479,0,0,1,50.22217-.05566A7.99977,7.99977,0,0,1,156.624,168.65719Zm14.79737-28.30664a8.00153,8.00153,0,0,1-10.76221,3.49024,71.9412,71.9412,0,0,0-65.40234.042,7.99976,7.99976,0,1,1-7.29-14.24219,87.94,87.94,0,0,1,79.96484-.05176A7.9994,7.9994,0,0,1,171.42139,140.35055Zm14.82666-28.36426a8.00037,8.00037,0,0,1-10.77246,3.458,104.1903,104.1903,0,0,0-95.03614.04492,8,8,0,1,1-7.3291-14.22265,120.19311,120.19311,0,0,1,109.68066-.05274A7.99973,7.99973,0,0,1,186.24805,111.98629Z" />
            </svg>
            <span className="sr-only">Spotify page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-8 h-8"
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" />
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-8 h-8"
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 32 32"
              id="Camada_1"
              version="1.1"
            >
              <path
                className="st0"
                d="M12.6,16.1v11.6c0,0.2,0.1,0.3,0.3,0.3h4.6c0.2,0,0.3-0.1,0.3-0.3V15.9h3.4c0.2,0,0.3-0.1,0.3-0.3l0.3-3.6  c0-0.2-0.1-0.3-0.3-0.3h-3.7V9.2c0-0.6,0.5-1.1,1.2-1.1h2.6C21.9,8.1,22,8,22,7.8V4.3C22,4.1,21.9,4,21.7,4h-4.4  c-2.6,0-4.7,1.9-4.7,4.3v3.4h-2.3c-0.2,0-0.3,0.1-0.3,0.3v3.6c0,0.2,0.1,0.3,0.3,0.3h2.3V16.1z"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-8 h-8"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              width="800px"
              height="800px"
              viewBox="0 0 97.75 97.75"
            >
              <g>
                <path
                  d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
		 M78.43,35.841c0.023,0.577,0.035,1.155,0.035,1.736c0,20.878-15.887,42.473-42.473,42.473c-8.127,0-16.04-2.319-22.883-6.708
		c-0.143-0.091-0.202-0.268-0.145-0.427c0.057-0.158,0.218-0.256,0.383-0.237c1.148,0.137,2.322,0.205,3.487,0.205
		c6.323,0,12.309-1.955,17.372-5.664c-6.069-0.512-11.285-4.619-13.161-10.478c-0.039-0.122-0.011-0.255,0.073-0.351
		c0.085-0.096,0.215-0.138,0.339-0.115c1.682,0.319,3.392,0.34,5.04,0.072c-6.259-1.945-10.658-7.808-10.658-14.483l0.002-0.194
		c0.003-0.127,0.072-0.243,0.182-0.306c0.109-0.064,0.245-0.065,0.355-0.003c1.632,0.906,3.438,1.488,5.291,1.711
		c-3.597-2.867-5.709-7.213-5.709-11.862c0-2.682,0.71-5.318,2.054-7.623c0.06-0.103,0.166-0.169,0.284-0.178
		c0.119-0.012,0.234,0.04,0.309,0.132c7.362,9.03,18.191,14.59,29.771,15.305c-0.193-0.972-0.291-1.974-0.291-2.985
		c0-8.361,6.802-15.162,15.162-15.162c4.11,0,8.082,1.689,10.929,4.641c3.209-0.654,6.266-1.834,9.09-3.508
		c0.129-0.077,0.291-0.065,0.41,0.028c0.116,0.094,0.164,0.25,0.118,0.394c-0.957,2.993-2.823,5.604-5.33,7.489
		c2.361-0.411,4.652-1.105,6.831-2.072c0.146-0.067,0.319-0.025,0.424,0.098c0.104,0.124,0.113,0.301,0.023,0.435
		C83.759,31.175,81.299,33.744,78.43,35.841z"
                />
              </g>
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-5">
          <li>
            <a href="#" className="hover:underline">
              Privacy Notes
            </a>
          </li>
          <span>|</span>
          <li>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </li>
          <span>|</span>
          <li>
            <a href="#" className="hover:underline">
              Do Not Share My Personal İnformation
            </a>
          </li>
          <span>|</span>
          <li>
            <a href="#" className="hover:underline">
              CA Supply Chain Act
            </a>
          </li>
          <span>|</span>
          <li>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
          </li>
        </ul>
        <div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://www.starbucks.com" className="hover:underline">
              {" "}
              Starbucks Coffee Company
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
