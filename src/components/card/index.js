import React from "react";

const Card = ({ foto, title, desc }) => {
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
        <img className="w-full" src={foto} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
