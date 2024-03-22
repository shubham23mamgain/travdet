import React from "react";
import Place1 from "../../assets/taj.jpg";
import Place2 from "../../assets/places/singa.jpg";
import Place3 from "../../assets/places/bangkok.jpg";
import Vector from "../../assets/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Place1,
    title: "Taj Mahal",
    country: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
  },
  {
    id: 2,
    img: Place2,
    title: "Puala",
    country: "Singapore",
    description:
      "Pulau Ujong, also known as mainland Singapore or Singapore Island, is the main island of Singapore, a city-state off southern Malaysia. Its colonial core centers on the Padang, a cricket field since the 1830s, flanked by grand buildings such as City Hall.",
  },
  {
    id: 3,
    img: Place3,
    title: "Rattankosin",
    country: "Thailand",
    description:
      "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire. ",
  },
];

const CustomerFavourites = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(Place1);
  const [title, setTitle] = React.useState("Taj Mahal");
  const [country, setCountry] = React.useState("India");
  const [description, setDescription] = React.useState(
    "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      {/* <div className="dark:bg-gray-900 dark:text-white bg-gray-50 px-10"></div> */}
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="flex flex-col px-20">
          <h1 className=" my-8 border-l-8 border-primary/50 px-2 text-3xl font-bold">
            Customer Favourites
          </h1>

          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div
                data-aos-once="true"
                className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
              >
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                >
                  {title}
                  <p class="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                    in {country}
                  </p>{" "}
                </h1>
                <p
                  data-aos="slide-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm "
                >
                  {description}
                </p>
                <div>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    Book Now
                  </button>
                </div>
              </div>
              {/* Image section */}
              <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={imageId}
                    alt="biryani img"
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                  />
                </div>
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                  {ImageList.map((item) => (
                    <img
                      data-aos="zoom-in"
                      data-aos-once="true"
                      src={item.img}
                      onClick={() => {
                        setImageId(
                          item.id === 1
                            ? Place1
                            : item.id === 2
                            ? Place2
                            : Place3
                        );
                        setTitle(item.title);
                        setDescription(item.description);
                        setCountry(item.country);
                      }}
                      alt="biryani img"
                      className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerFavourites;
