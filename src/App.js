import React, { useState } from "react";
import ImgOne from "./assets/images/image-1.webp";
import ImgTwo from "./assets/images/image-2.webp";
import ImgThree from "./assets/images/image-3.webp";
import { BsImage } from "react-icons/bs";
function App() {
  const [allImages, setAllImages] = useState([
    {
      id: 1,
      image: ImgOne,
    },
    {
      id: 2,
      image: ImgTwo,
    },
    {
      id: 3,
      image: ImgThree,
    },
    {
      id: 3,
      image: ImgThree,
    },
  ]);
  return (
    <div className="w-full h-screen bg-slate-100 py-6">
      <div className="container mx-auto bg-gray-500 rounded-[12px]">
        <div className="py-4 px-8 border-b">
          <h2 className="text-2xl font-bold">Gallery</h2>
        </div>
        <section className="p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {allImages?.map((image, index) => (
              <div
                className={`${
                  index == 0 && "col-span-2 row-span-2"
                }  rounded-[12px] border overflow-hidden cursor-pointer group`}
                key={index}
              >
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] absolute top-5 left-5 hidden group-hover:block z-20 cursor-pointer"
                />
                <img src={ImgTwo} className="group-hover:opacity-50" />
              </div>
            ))}

            <div className="col-span-1 rounded-[12px] border border-dashed overflow-hidden border-gray-400 cursor-pointer bg-gray-100">
              <label
                htmlFor="imgae-upload"
                className="flex flex-col gap-4 justify-center items-center w-full h-full cursor-pointer"
              >
                <BsImage size={24} />
                <p className="text-xl">Add Images</p>
              </label>
              <input type="file" id="imgae-upload" className="hidden" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
