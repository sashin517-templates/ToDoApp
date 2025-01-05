import React from "react";

function FavTaskCard() {
  return (
    <div className="flex items-center justify-evenly bg-gradient-to-r from-P3 to-P4 shadow-lg text-black font-semibold text-xl w-96 h-32 max-sm:h-[100px] rounded-xl">
      <img className="w-14" src="/Fav.svg" alt="" />
      <span className="text-rounded-xl text-white font-highlighted max-lg:text-xl max-sm:text-sm">
        Favorite Tasks
      </span>
    </div>
  );
}

export default FavTaskCard;
