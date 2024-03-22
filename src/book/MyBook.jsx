import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./BookCover/BookCover.jsx";
import FirstPage from "./BookHero/FirstPage.jsx";
import Skills from "./Skills/Skills";
import Services from "./ChaarDham/Services";
import ForeignTour from "./Foreign/ForeignTour.jsx";
import Tours from "./Tours/Tours.jsx";

import BgTexture from "../assets/brown-wooden-flooring.jpg";

const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};

const TourData1 = [
  {
    name: "Jaipur",
    description:
      "Visited Jaipur in September with my colleagues on office trip",
    image:
      "https://elephantravel.in/blog/wp-content/uploads/2023/10/Rajasthan-Tour-Packages-for-Family.jpg",
  },
  {
    name: "Gujarat",
    description: "Feeling Blessed in the city of Bapu. Maja avi gyo",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/17/32/db/0c/national-salt-satyagraha.jpg",
  },
];
const TourData2 = [
  {
    name: "Goa",
    description:
      "Ansh brought us to Goa for his bachelors and the trip was awesome.",
    image:
      "https://d26dp53kz39178.cloudfront.net/media/uploads/products/320949201_487344610023951_3836395706045062805_n_result-1679682522021.webp",
  },
  {
    name: "Himanchal",
    image:
      "https://i.pinimg.com/736x/2e/3b/d6/2e3bd6ff596c6dbd6309f09e8fc4a984.jpg",
    description:
      "Had a trip this year only to Himanchal with family. First time visting Himanchal",
  },
];

const ForeignTourData = [
  {
    name: "Dubai",
    image: "",
    description: "",
  },
  {
    name: "Japan",
    image: "",
    description: "",
  },
];

function MyBook(props) {
  return (
    <div
      style={BgTextureStyle}
      className="w-full h-full flex justify-center items-center  bg-white dark:bg-black pb-5 pt-5"
    >
      <HTMLFlipBook width={600} height={700} showCover="true">
        <Page number={1}>
          <Cover
            coverImg="https://images.newscientist.com/wp-content/uploads/2021/05/25160442/gettyimages-129714169_web.jpg"
            title="Best Stories"
          />
        </Page>
        <Page number={2}>
          <FirstPage />
        </Page>
        <Page number={3}>
          <Skills />
        </Page>
        <Page number={4}>
          <Services />
        </Page>
        {/* <Page number={5}>
          <ForeignTour foreignTourData={ForeignTourData} />
        </Page> */}
        <Page number={5}>
          <h1>Hi</h1>
        </Page>
        <Page number={6}>
          <Tours tourData={TourData1} />
        </Page>
        <Page number={7}>
          <Tours tourData={TourData2} />
        </Page>
        <Page number={8}>
          <Cover coverImg="https://i.pinimg.com/564x/72/dc/ee/72dcee6bf27d183f95d1a3d41f9200c9.jpg" />
        </Page>
      </HTMLFlipBook>
    </div>
  );
}

export default MyBook;
