import React from "react";

const headcards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/*Cards*/}
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, Bogo's Out</p>
          <p className="px-3">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-400">Order Now</button>
        </div>
        <img
        className="max-h-[160px] nd:max-h-[200px] w-full object-cover rounded-xl"
          src="https://unsplash.com/photos/LUv656869_A/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzZ8fGZhc3QlMjBmb29kfGVufDB8fHx8MTY3OTY0MjEyMw&force=true"
          alt="/"
        />
      </div>
      {/*Cards*/}
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Meals</p>
          <p className="px-3">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-400">Order Now</button>
        </div>
        <img
        className="max-h-[160px] nd:max-h-[200px] w-full object-cover rounded-xl"
          src="https://unsplash.com/photos/LIJujhJviMI/download?force=true"
          alt="/"
        />
      </div>
      {/*Cards*/}
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Desserts Only For You </p>
          <p className="px-3">Yummy Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-400">Order Now</button>
        </div>
        <img
        className="max-h-[160px] nd:max-h-[200px] w-full object-cover rounded-xl"
          src="https://unsplash.com/photos/dKT6Q7q2UKs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc5NjYyODg0&force=true"
          alt="/"
        />
      </div>
    </div>
  );
};

export default headcards;
