import React, { Component } from "react";
import Slider from "react-slick";
import data from "./data/dbCards.json";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {

  renderCards = (items) => {
    return items.map((item) => (
      <a href="#" className="max-w-sm outline-none overflow-hidden p-5 hover:-translate-y-2 duration-150">
        <img className="overflow-hidden object-cover bg-white border border-gray-200 rounded-2xl shadow-lg" src={item.imgUrl} alt={item.alt} />
      </a>
    ));
  };

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="flex justify-center">
        <div className="w-[95%]">
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">FEATURED</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.featured)}
          </Slider>
          <div className="w-full bg-green-100 h-auto py-16 max-h-14 flex justify-center items-center gap-20 my-8 rounded-lg">
            <div className="bg-green-100 h-auto p-10 max-h-14 flex justify-center items-center gap-4">
              <h2 className="text-2xl">Got a gift card?</h2>
              <span className="text-lg text-gray-600">Earns 2★Stars per $1</span>
              <a href="" type="button" className="py-1 px-5 mr-2 mb-2 text-md font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200">Add of Reload</a>
              <a href="" type="button" className="py-1 px-5 mr-2 mb-2 text-md font-semibold text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Check balance</a>
            </div>
            <div className="bg-green-100 h-auto p-10 max-h-14 flex justify-center items-center gap-4">
              <a href="#" className="text-green-600"><span className=""> Card Terms & Conditions </span><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">BIRTHDAY</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.birthday)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">THANK YOU</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.thankYou)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">CELEBRATION</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.celebration)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">BEST FRIEND'S DAY</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.bestFriends)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">FATHER'S DAY</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.fathers)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">GRADUATION</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.graduation)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">MILITARY APPRECIATION</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.militaryAppreciation)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">APPRECIATION</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.appreciation)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">WORKPLACE</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.workplace)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">TEACHER APPRECIATION</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.teachers)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">ENCOURAGEMENT</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.encouragement)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">AFFECTION</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.affection)}
          </Slider>
          <div className="mx-6 mt-6"><h2 className="font-bold text-sm">ANYTIME</h2></div>
          <Slider {...settings}>
            {this.renderCards(data.anytime)}
          </Slider>
          <div className="bg-slate-100 w-full my-10 h-auto py-10 px-8 flex justify-start items-center gap-10 rounded-xl">
            <img className="max-w-sm" src="https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg" alt="" />
            <div className="flex justify-center items-start flex-col gap-2">
              <h4 className="text-xl">Gift Cards in Bulk</h4>
              <span className="max-w-xs">There’s an easier way to buy Starbucks Cards in bulk! Give a Starbucks Card to gift, reward, incentivize, or show appreciation towards your customers, clients and team members.</span>
              <button type="button" className="text-gray-900 bg-transparent border-2 border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2 mr-2 mb-2">Shop Now</button>
            </div>
          </div>
          <div className="bg-[#edebe9] w-full my-10 h-auto py-10 px-8 flex flex-col justify-start items-center gap-5 rounded-xl">
              <div className=" w-full flex justify-start items-start flex-col gap-2">
                <h4 className="text-xl">Gift Cards in Bulk</h4>
                <span className="max-w-xs">There’s an easier way to buy Starbucks Cards in bulk! Give a Starbucks Card to gift, reward, incentivize, or show appreciation towards your customers, clients and team members.</span>
              </div>
            <div className="w-full flex justify-start items-start">
              <button type="button" className="text-gray-900 bg-transparent border-2 border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2 mr-2 mb-2">eGift Support</button>
              <button type="button" className="text-gray-900 bg-transparent border-2 border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2 mr-2 mb-2">See Terms & Conditions</button>
              <button type="button" className="text-gray-900 bg-transparent border-2 border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2 mr-2 mb-2">eGift FAQs</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}