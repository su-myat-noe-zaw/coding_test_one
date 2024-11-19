import React from "react";

const CardCaption = ({ title = "", subTitle = "", description = "", mode = "primary" }) => {
  const isLightMode = mode === "light";
  const convertedDescription =
    description.length > 100 ? `${description.substring(0, 100)}...` : description;

  return (
    <div className="flex flex-col gap-1">
      <p
        className={`font-semibold uppercase ${
          isLightMode ? "text-white" : "text-primary-default"
        }`}
      >
        {title}
      </p>
      <p
        className={`text-sm font-bold ${
          isLightMode ? "text-white" : "text-gray-default"
        }`}
      >
        {subTitle}
      </p>
      <p
        className={`text-xs ${
          isLightMode ? "text-white" : "text-gray-light"
        }`}
      >
        {convertedDescription}
      </p>
    </div>
  );
};

export default CardCaption;
