import React from "react";
import ImgOne from "./assets/images/image-1.webp";
import ImgTwo from "./assets/images/image-2.webp";
import ImgThree from "./assets/images/image-3.webp";
function App() {
  return (
    <div className="w-full h-screen bg-slate-100 py-6">
      <div className="container mx-auto bg-gray-500 rounded-md">
        <div className="py-4 px-8 border-b">
          <h2 className="text-2xl font-bold">Gallery</h2>
        </div>
        <section className="p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="col-span-2 row-span-2 rounded-md border overflow-hidden cursor-pointer">
              <img src={ImgOne} />
            </div>
            <div className="rounded-md border overflow-hidden cursor-pointer relative group">
              <input type="checkbox" className="w-[25px] h-[25px] absolute top-5 left-5 hidden group-hover:block z-20 cursor-pointer" />
              <img src={ImgTwo} className="group-hover:opacity-30"/>
            </div>
            <div className="rounded-md border overflow-hidden cursor-pointer">
              <img src={ImgThree} />
            </div>
            <div className="rounded-md border overflow-hidden cursor-pointer">
              <img src={ImgOne} />
            </div>
            <div className="rounded-md border overflow-hidden cursor-pointer">
              <img src={ImgOne} />
            </div>
            <div className="rounded-md border overflow-hidden cursor-pointer">
              <img src={ImgOne} />
            </div>
            <div className="rounded-md border overflow-hidden cursor-pointer">
              <img src={ImgOne} />
            </div>
            <div className="rounded-md border overflow-hidden cursor-pointer">
              <img src={ImgOne} />
            </div>
            <div className="rounded-md border overflow-hidden cursor-pointer">
              <img src={ImgOne} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
