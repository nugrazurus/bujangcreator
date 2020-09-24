import React from "react";

const Card = ({ foto, title, desc, picCLass }) => {
  return (
    <div>
      <div className="flex flex-col items-center max-w-sm bg-white h-100 rounded-lg overflow-hidden shadow-lg">
        <img className={picCLass} src={foto} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base text-justify">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
