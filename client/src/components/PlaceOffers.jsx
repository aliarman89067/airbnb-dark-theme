import React, { useState } from "react";
import {
  FaWifi,
  FaRadio,
  FaComputer,
  FaCar,
  FaArrowUpFromWaterPump,
  FaMountainSun,
  FaSunPlantWilt,
  FaWind,
  AiOutlineClose,
  FaBath,
  FaBucket,
  FaPumpSoap,
  FaHotTubPerson,
  FaShower,
  FaSoap,
  FaMattressPillow,
  BsTvFill,
  FaBook,
  FaFire,
  BsCameraVideoFill,
  FaKitchenSet,
  FaDiceSix,
  BsUsbMiniFill,
  FaUtensils,
  FaPlateWheat,
  FaMugHot,
  FaWineGlassEmpty,
  FaBreadSlice,
  FaCookieBite,
  FaDumpsterFire,
  FaChair,
  AiOutlineCoffee,
  FaCat,
} from "../Icons";

export default function PlaceOffers({ placeOffers, setPlaceOffers }) {
  const [offerTab, setOfferTab] = useState(false);
  //Title and Para Function
  function handleText(title, para) {
    return (
      <>
        <h2 className="text-white dark:text-gray-700 text-2xl tracking-wide">
          {title}
        </h2>
        <p className="text-gray-300 dark:text-gray-600 text-md mb-2">{para}</p>
      </>
    );
  }
  function handleInputs(e) {
    const name = e.target.name;
    if (e.target.checked) {
      setPlaceOffers([...placeOffers, name]);
    } else {
      setPlaceOffers([...placeOffers.filter((el) => el !== name)]);
    }
  }
  return (
    <div>
      {/* Place Offers */}
      <div className="my-2">
        {handleText(
          "Place Offer",
          "Facilities that your place offer check all the available offers"
        )}
        <div className="flex flex-wrap gap-2">
          <label className="flex items-center bg-gray-600 dark:bg-gray-400 py-4 px-8 gap-2 rounded-xl text-white cursor-pointer">
            <input
              checked={placeOffers.includes("Wifi")}
              type="checkbox"
              name="Wifi"
              onChange={handleInputs}
            />
            <span>Wifi</span>
            <FaWifi className="text-xl" />
          </label>
          <label className="flex items-center bg-gray-600 dark:bg-gray-400 py-4 px-8 gap-2 rounded-xl text-white cursor-pointer">
            <input
              checked={placeOffers.includes("Radio")}
              type="checkbox"
              name="Radio"
              onChange={handleInputs}
            />
            <span>Radio</span>
            <FaRadio className="text-xl" />
          </label>
          <label className="flex items-center bg-gray-600 dark:bg-gray-400 py-4 px-8 gap-2 rounded-xl text-white cursor-pointer">
            <input
              checked={placeOffers.includes("Tv")}
              type="checkbox"
              name="Tv"
              onChange={handleInputs}
            />
            <span>Tv</span>
            <BsTvFill className="text-xl" />
          </label>
          <label className="flex items-center bg-gray-600 dark:bg-gray-400 py-4 px-8 gap-2 rounded-xl text-white cursor-pointer">
            <input
              checked={placeOffers.includes("Private Entrance")}
              type="checkbox"
              name="Private Entrance"
              onChange={handleInputs}
            />
            <span>Private Entrance</span>
            <FaCar className="text-xl" />
          </label>
          <label className="flex items-center bg-gray-600 dark:bg-gray-400 py-4 px-8 gap-2 rounded-xl text-white cursor-pointer">
            <input
              checked={placeOffers.includes("Pool")}
              type="checkbox"
              name="Pool"
              onChange={handleInputs}
            />
            <span>Pool</span>
            <FaArrowUpFromWaterPump className="text-xl" />
          </label>
          <label className="flex items-center bg-gray-600 dark:bg-gray-400 py-4 px-8 gap-2 rounded-xl text-white cursor-pointer">
            <input
              checked={placeOffers.includes("Mountain View")}
              type="checkbox"
              name="Mountain View"
              onChange={handleInputs}
            />
            <span>Mountain View</span>
            <FaMountainSun className="text-xl" />
          </label>
          <label className="flex items-center bg-gray-600 dark:bg-gray-400 py-4 px-8 gap-2 rounded-xl text-white cursor-pointer">
            <input
              checked={placeOffers.includes("Garden View")}
              type="checkbox"
              name="Garden View"
              onChange={handleInputs}
            />
            <span>Garden view</span>
            <FaSunPlantWilt className="text-xl" />
          </label>
          <label className="flex items-center bg-gray-600 dark:bg-gray-400 py-4 px-8 gap-2 rounded-xl text-white cursor-pointer">
            <input
              checked={placeOffers.includes("Air Conditioning")}
              type="checkbox"
              name="Air Conditioning"
              onChange={handleInputs}
            />
            <span>Air Conditioning</span>
            <FaWind className="text-xl" />
          </label>
          <button
            type="button"
            onClick={() => setOfferTab(true)}
            className="bg-primary dark:bg-lPrimary px-8 rounded-xl text-white"
          >
            See All
          </button>
        </div>
      </div>
      {/* Place Offers Separate Tab */}
      {offerTab && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.7)]">
          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-600 dark:bg-white h-[80vh] w-[60vw] rounded-3xl overflow-y-scroll custom-scrollbar">
            <AiOutlineClose
              className="absolute left-8 top-4 text-white dark:text-gray-800 text-xl cursor-pointer hover:rotate-90 transition-all duration-300"
              onClick={() => setOfferTab(false)}
            />
            <hr className="mx-8 mt-14 bg-black" />
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Scenic views
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Mountain View")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Mountain View"
                  onChange={handleInputs}
                />
                <span>Mountain View</span>
                <FaMountainSun />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md max-w-fit">
                <input
                  checked={placeOffers.includes("Garden View")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Garden View"
                  onChange={handleInputs}
                />
                <span>Garden View</span>
                <FaSunPlantWilt />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Internet and Office
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Wifi")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Wifi"
                  onChange={handleInputs}
                />
                <span>Wifi</span>
                <FaWifi />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md max-w-fit">
                <input
                  checked={placeOffers.includes("Computer")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Computer"
                  onChange={handleInputs}
                />
                <span>Computer</span>
                <FaComputer />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Bathroom
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Bathtub")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Bathtub"
                  onChange={handleInputs}
                />
                <span>Bathtub</span>
                <FaBath />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Cleaning products")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Cleaning products"
                  onChange={handleInputs}
                />
                <span>Cleaning products</span>
                <FaBucket />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Body soap")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Body soap"
                  onChange={handleInputs}
                />
                <span>Body soap</span>
                <FaPumpSoap />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Hot water")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Hot water"
                  onChange={handleInputs}
                />
                <span>Hot water</span>
                <FaHotTubPerson />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Shower gel")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Shower gel"
                  onChange={handleInputs}
                />
                <span>Shower gel</span>
                <FaShower />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Bedroom and laundry
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Essentials")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Essentials"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Essentials</span>
                <FaSoap />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Extra pillows and blankets")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Extra pillows and blankets"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Extra pillows and blankets</span>
                <FaMattressPillow />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Entertainment
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Tv")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Tv"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Tv</span>
                <BsTvFill />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Books and reading material")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Books and reading material"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Books and reading material</span>
                <FaBook />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Heating and Cooling
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Air Conditioning")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Air Conditioning"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Air Conditioning</span>
                <FaWind />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Heater")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Heater"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Heater</span>
                <FaFire />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Home Safety
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Security cameras on property")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Security cameras on property"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Security cameras on property</span>
                <BsCameraVideoFill />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Kitchen and dining
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Kitchen")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Kitchen"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Kitchen</span>
                <FaKitchenSet />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Refrigerator")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Refrigerator"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Refrigerator</span>
                <FaDiceSix />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Microwave")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Microwave"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Microwave</span>
                <BsUsbMiniFill />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Cooking basics")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Cooking basics"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Cooking basics</span>
                <FaUtensils />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Dishes and silverware")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Dishes and silverware"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Dishes and silverware</span>
                <FaPlateWheat />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Stove")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Stove"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Stove</span>
                <FaFire />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Hot water kettle")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Hot water kettle"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Hot water kettle</span>
                <FaMugHot />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Coffee maker")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Coffee maker"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Coffee maker</span>
                <AiOutlineCoffee />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Wine glasses")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Wine glasses"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Wine glasses</span>
                <FaWineGlassEmpty />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Toaster")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Toaster"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Toaster</span>
                <FaBreadSlice />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Baking Sheet")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Baking Sheet"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Baking Sheet</span>
                <FaCookieBite />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Barbecue Utensils")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Barbecue Utensils"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Barbecue Utensils</span>
                <FaDumpsterFire />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Dining Table")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Dining Table"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Dining Table</span>
                <FaChair />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Parking and facilities
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Free parking on premises")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Free parking on premises"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Free parking on premises</span>
                <FaCar />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Shared pool - heated")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Shared pool - heated"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Shared pool - heated</span>
                <FaBath />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Private hot tub")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Private hot tub"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Private hot tub</span>
                <FaHotTubPerson />
              </label>
            </div>
            <div className="my-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Services
              </h2>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Pets allowed")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Pets allowed"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Pets allowed</span>
                <FaCat />
              </label>
              <label className="flex items-center gap-4 text-white dark:text-gray-600 cursor-pointer text-md mb-2 max-w-fit">
                <input
                  checked={placeOffers.includes("Breakfast")}
                  type="checkbox"
                  className="w-4 h-4"
                  name="Breakfast"
                  onChange={handleInputs}
                />
                <span className="m-0 p-0">Breakfast</span>
                <FaMugHot />
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
