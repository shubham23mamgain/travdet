import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/heymondo.jpg";
import Img5 from "../../assets/jaipur.jpg";
import Img6 from "../../assets/places/bangkok.jpg";

const PlacesData = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/450px-Hagia_Sophia_Mars_2013.jpg",
    title: "Hagia Sopia",
    location: "Istanbul",
    description:
      "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a mosque, a former church, and a major cultural and historical site in Istanbul, Turkey. The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in 537 AD",
    price: 2200,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 600,
    type: "Cultural Relax",
  },
  {
    img: "https://lh3.googleusercontent.com/p/AF1QipPf4Ii7b5Ctrti-elp2d7iOtPj3EJlozpSBGfod=s1360-w1360-h1020",
    title: "Van Gaugh Museum",
    location: "Asterdam",
    description:
      "Amsterdam is best known for its artistic heritage, elaborate canal system and narrow houses built back in the 17th century. Cycling is also essential to the city’s character and culture which makes it easy to get around this amazing city. Visitors also come to see the Red Light District with the iconic red neon windows and clubs with various different shows.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: "https://www.euttaranchal.com/tourism/photos/tapovan-gangotri-6071214.jpg",
    title: "Bali",
    location: "Indonesia",
    description:
      "Bali. Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand",
    price: 8000,
    type: "Beach",
  },
  {
    img: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
    title: "Emirates",
    location: "Dubai",
    description:
      "The Emirate of Dubai is one of the seven emirates of the United Arab Emirates. It is the most populous emirate of the UAE. The capital of the emirate is the eponymous city, Dubai.",
    price: 6700,
    type: "Tour",
  },
  {
    img: "https://gskworldtravels.com/wp-content/uploads/2023/07/maldives.jpg",
    title: "Maldives",
    location: "South Asia",
    description:
      "The Maldives is southwest of Sri Lanka and India, about 750 kilometres (470 miles; 400 nautical miles) from the Asian continent's mainland. ",
    price: 5500,
    type: "Beach",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
