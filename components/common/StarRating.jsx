import React from "react";
export default ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <span
            className={
              index < rating.rate
                ? "text-yellow-500 text-3xl cursor-pointer"
                : "text-slate-100 text-3xl cursor-pointer"
            }
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};
