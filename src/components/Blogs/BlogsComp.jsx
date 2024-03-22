import React from "react";
import BlogCard from "./BlogCard";
import Img from "../../assets/places/water.jpg";

const BlogsData = [
  {
    id: 1,
    image:
      "https://lh3.googleusercontent.com/proxy/BC9LN8m3Qo9MW53c3aLm8FS42OLD7WF2yM57tnd0qS6dZH3zDkKOjnISQIe20nalk4BLK1wpdsKK5U6UsG-4Ztauo-Rv9I2_N4D9KhzKnAZlTBCbHhMTyU1ZuxcWge5Td-s1FFLm74pOueaobbTnXN_Jhp5f958=w675-h390-n-k-no",
    title: "Top places to visit in India",
    description:
      "Places to Visit in India - The best places to visit in India to experience the most beautiful places like historical places, beach places, hill stations , honeymoon places, romantic places, adventure places, peaceful places and many more.",
    author: "Shubham",
    date: "Feb 7, 2024",
  },
  {
    id: 2,
    image: Img,
    title: "Top places to visit in Singapore",
    description:
      "Discovering Singapore with children is a joy thanks to the country's efficient, accessible and sparkling-clean MRT train system. Child-friendly attractions abound and nearly all offer kid-centric tours, child-focused exhibitions or play parks.",
    author: "Vaibhav",
    date: "March 2, 2024",
  },
  {
    id: 3,
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMJbGQ5OuCFUniJZ04j0BYTlsmT8dScO7OyEuYU=s1360-w1360-h1020",
    title: "Top places to visit in Japan",
    description:
      "Tokyo is the capital city of Japan and the most populous metropolitan area in the world. It is one of the most captivating cities in the world, from the majestic temples of traditional Japan to the bright neon lights of Shibuya. Tokyo has something for everyone and it is definitely a place to visit once in a lifetime.",
    author: "Mohit",
    date: "January 16, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
