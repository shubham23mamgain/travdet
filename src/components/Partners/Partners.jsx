import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  {
    id: 1,
    logo: "https://cionews.co.in/wp-content/uploads/2022/05/Microsoft-Logo.png",
    name: "Micorsoft",
  },

  {
    id: 2,
    logo: "https://asset20.ckassets.com/blog/wp-content/uploads/sites/6/2022/08/Makemytrip-logo.jpg",
    name: "Make My Trip",
  },
  {
    id: 3,
    logo: "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png",
    name: "Amazon",
  },
  {
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bajaj-Finserv-Logo.jpg/800px-Bajaj-Finserv-Logo.jpg",
    name: "Bajaj Finance",
  },
  {
    id: 5,
    logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9fbfc745523241.5833fff8b5d95.jpg",
    name: "Biryani Blues",
  },

  {
    name: "Tech Mahindra",
    id: 6,
    logo: "https://m.economictimes.com/thumb/msid-74861589,width-1200,height-900,resizemode-4,imgsize-35143/tech-mahindra-tweaks-brand-logo-to-convey-solidarity-in-fight-against-covid-19.jpg",
  },

  {
    name: "Shaadi.com",
    id: 7,
    logo: "https://static.businessworld.in/article/article_extra_large_image/1673349205_Xl3Ehd_5F47AD5F_989A_415F_849C_B43A2FC0109F.jpeg",
  },
  {
    name: "Agoda",
    id: 8,
    logo: "https://cdn10.agoda.net/images/mvc/default/agoda-logo-flat-2019.png",
  },
  {
    name: "IMDB",
    id: 9,
    logo: "https://logowik.com/content/uploads/images/imdb-internet-movie-database5351.jpg",
  },
  {
    name: "JBL",
    id: 10,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/JBL-Logo.svg/1200px-JBL-Logo.svg.png",
  },
];

function Partners() {
  return (
    <div className="w-full  items-center justify-center flex flex-col">
      <h1 className="mt-10 font-bold ">Our Partners</h1>
      <div className="w-[60%] m-1 rounded-xl space-x-5 ">
        <Marquee
          pauseOnClick={true}
          speed={100}
          direction="left"
          // style={{ marginLeft: 130 }}
        >
          <div className="flex ml-2 mr-2 p-3 gradient-mask-tl-0">
            {items.map((item) => (
              <img
                src={item.logo}
                className="max-w-[200px] h-[100px] ml-5 mr-5 shadow-[0_0_10px_bg-black] "
              />
            ))}
          </div>
        </Marquee>

        <Marquee
          pauseOnClick={true}
          speed={100}
          direction="right"
          style={{ marginLeft: 7, marginRight: 123 }}
        >
          <div className="flex ml-2 mr-2 p-3  gradient-mask-br-0">
            {items.map((item, index) => (
              <img
                key={index}
                src={item.logo}
                className="max-w-[200px] h-[100px] ml-5 mr-5 "
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Partners;
