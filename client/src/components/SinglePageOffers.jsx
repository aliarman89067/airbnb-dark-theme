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
  FaShareFromSquare,
  FaRegHeart,
  FaChevronLeft,
  FaChevronRight,
} from "../Icons.js";

export default function SinglePageOffers({ place, showOffers, setShowOffers }) {
  const offers = place.placeOffers;
  function handleClasses(name) {
    let classes = " text-md ";
    const findOffer = offers.find((el) => el === name);
    if (findOffer) {
      classes;
    } else {
      classes += " text-gray-400 line-through ";
    }
    return classes;
  }

  return (
    <div className="flex gap-[5rem] text-gray-200 dark:text-gray-700 mt-2">
      <div className="grid grid-cols-1">
        <div className={"flex items-center gap-3 " + handleClasses("Wifi")}>
          <FaWifi size={20} />
          <p>Wifi</p>
        </div>
        <div className={"flex items-center gap-3 " + handleClasses("Radio")}>
          <FaRadio size={20} />
          <p>Radio</p>
        </div>
        <div className={"flex items-center gap-3 " + handleClasses("Tv")}>
          <BsTvFill size={20} />
          <p>Tv</p>
        </div>
        <div
          className={
            "flex items-center gap-3 " + handleClasses("Private Entrance")
          }
        >
          <FaCar size={20} />
          <p>Private Entrance</p>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className={"flex items-center gap-3 " + handleClasses("Pool")}>
          <FaArrowUpFromWaterPump size={20} />
          <p>Pool</p>
        </div>
        <div
          className={
            "flex items-center gap-3 " + handleClasses("Mountain View")
          }
        >
          <FaMountainSun size={20} />
          <p>Mountain View</p>
        </div>
        <div
          className={"flex items-center gap-3 " + handleClasses("Garden View")}
        >
          <FaSunPlantWilt size={20} />
          <p>Garden View</p>
        </div>
        <div
          className={
            "flex items-center gap-3 " + handleClasses("Air Conditioning")
          }
        >
          <FaWind size={20} />
          <p>Air Conditioning</p>
        </div>
      </div>
      {showOffers && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.7)] ">
          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-600 dark:bg-white h-[80vh] w-[60vw] rounded-3xl overflow-y-scroll custom-scrollbar">
            <AiOutlineClose
              className="absolute left-8 top-4 text-white dark:text-gray-800 text-xl cursor-pointer hover:rotate-90 transition-all duration-300"
              onClick={() => setShowOffers(false)}
            />
            <hr className="mx-8 mt-14 bg-black" />
            <div className="mt-4 ml-8">
              <h2 className="text-2xl text-white dark:text-gray-800 mb-3">
                Scenic views
              </h2>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Mountain View")
                }
              >
                <span>Mountain View</span>
                <FaMountainSun />
              </label>
              <label
                className={
                  "flex items-center gap-3" + handleClasses("Garden View")
                }
              >
                <span>Garden View</span>
                <FaSunPlantWilt />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Internet and Office
              </h2>
              <label
                className={"flex items-center gap-4 " + handleClasses("Wifi")}
              >
                <span>Wifi</span>
                <FaWifi />
              </label>
              <label
                className={
                  "flex items-center gap-3" + handleClasses("Computer")
                }
              >
                <span>Computer</span>
                <FaComputer />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Bathroom
              </h2>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Bathtub")
                }
              >
                <span>Bathtub</span>
                <FaBath />
              </label>
              <label
                className={
                  "flex items-center gap-4 " +
                  handleClasses("Cleaning products")
                }
              >
                <span>Cleaning products</span>
                <FaBucket />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Body soap")
                }
              >
                <span>Body soap</span>
                <FaPumpSoap />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Hot water")
                }
              >
                <span>Hot water</span>
                <FaHotTubPerson />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Shower gel")
                }
              >
                <span>Shower gel</span>
                <FaShower />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Bedroom and laundry
              </h2>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Essentials")
                }
              >
                <span className="m-0 p-0">Essentials</span>
                <FaSoap />
              </label>
              <label
                className={
                  "flex items-center gap-4 " +
                  handleClasses("Extra pillows and blankets")
                }
              >
                <span className="m-0 p-0">Extra pillows and blankets</span>
                <FaMattressPillow />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Entertainment
              </h2>
              <label
                className={"flex items-center gap-4 " + handleClasses("Tv")}
              >
                <span className="m-0 p-0">Tv</span>
                <BsTvFill />
              </label>
              <label
                className={
                  "flex items-center gap-4 " +
                  handleClasses("Books and reading material")
                }
              >
                <span className="m-0 p-0">Books and reading material</span>
                <FaBook />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Heating and Cooling
              </h2>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Air Conditioning")
                }
              >
                <span className="m-0 p-0">Air Conditioning</span>
                <FaWind />
              </label>
              <label
                className={"flex items-center gap-4 " + handleClasses("Heater")}
              >
                <span className="m-0 p-0">Heater</span>
                <FaFire />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Home Safety
              </h2>
              <label
                className={
                  "flex items-center gap-4 " +
                  handleClasses("Security cameras on property")
                }
              >
                <span className="m-0 p-0">Security cameras on property</span>
                <BsCameraVideoFill />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Kitchen and dining
              </h2>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Kitchen")
                }
              >
                <span className="m-0 p-0">Kitchen</span>
                <FaKitchenSet />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Refrigerator")
                }
              >
                <span className="m-0 p-0">Refrigerator</span>
                <FaDiceSix />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Microwave")
                }
              >
                <span className="m-0 p-0">Microwave</span>
                <BsUsbMiniFill />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Cooking basics")
                }
              >
                <span className="m-0 p-0">Cooking basics</span>
                <FaUtensils />
              </label>
              <label
                className={
                  "flex items-center gap-4 " +
                  handleClasses("Dishes and silverware")
                }
              >
                <span className="m-0 p-0">Dishes and silverware</span>
                <FaPlateWheat />
              </label>
              <label
                className={"flex items-center gap-4 " + handleClasses("Stove")}
              >
                <span className="m-0 p-0">Stove</span>
                <FaFire />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Hot water kettle")
                }
              >
                <span className="m-0 p-0">Hot water kettle</span>
                <FaMugHot />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Coffee maker")
                }
              >
                <span className="m-0 p-0">Coffee maker</span>
                <AiOutlineCoffee />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Wine glasses")
                }
              >
                <span className="m-0 p-0">Wine glasses</span>
                <FaWineGlassEmpty />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Toaster")
                }
              >
                <span className="m-0 p-0">Toaster</span>
                <FaBreadSlice />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Baking Sheet")
                }
              >
                <span className="m-0 p-0">Baking Sheet</span>
                <FaCookieBite />
              </label>
              <label
                className={
                  "flex items-center gap-4 " +
                  handleClasses("Barbecue Utensils")
                }
              >
                <span className="m-0 p-0">Barbecue Utensils</span>
                <FaDumpsterFire />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Dining Table")
                }
              >
                <span className="m-0 p-0">Dining Table</span>
                <FaChair />
              </label>
            </div>
            <div className="mt-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Parking and facilities
              </h2>
              <label
                className={
                  "flex items-center gap-4 " +
                  handleClasses("Free parking on premises")
                }
              >
                <span className="m-0 p-0">Free parking on premises</span>
                <FaCar />
              </label>
              <label
                className={
                  "flex items-center gap-4 " +
                  handleClasses("Shared pool - heated")
                }
              >
                <span className="m-0 p-0">Shared pool - heated</span>
                <FaBath />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Private hot tub")
                }
              >
                <span className="m-0 p-0">Private hot tub</span>
                <FaHotTubPerson />
              </label>
            </div>
            <div className="my-4 ml-8">
              <h2 className="text-xl text-white dark:text-gray-800 mb-3">
                Services
              </h2>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Pets allowed")
                }
              >
                <span className="m-0 p-0">Pets allowed</span>
                <FaCat />
              </label>
              <label
                className={
                  "flex items-center gap-4 " + handleClasses("Breakfast")
                }
              >
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
