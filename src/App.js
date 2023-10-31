import React from "react";
import ImgOne from "../assets/images/image-1.webp";
import ImgTwo from "../assets/images/image-2.webp";
import ImgThree from "../assets/images/image-3.webp";
function App() {
  return (
    <div className="w-full h-screen bg-slate-100 py-6">
      <div className="container mx-auto bg-gray-500 rounded-md">
        <div className="py-4 px-8 border-b">
          <h2 className="text-2xl font-bold">Gallery</h2>
        </div>
        <section className="p-8">
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-2 row-span-2">
              <img src={ImgOne} />
            </div>
            <div>
              {" "}
              <img src={ImgOne} />
            </div>
            <div>
              {" "}
              <img src={ImgOne} />
            </div>
            <div>
              {" "}
              <img src={ImgOne} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
