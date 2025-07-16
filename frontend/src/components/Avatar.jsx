import React from "react";

const Pictures = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RH_9VN0HEZIb1f8IYUKOlEtOSyIvjVgYa5fFPTqTdGSdTfvIxxuXyzHBm289bW6-bpk&usqp=CAU",
  "https://f.hubspotusercontent00.net/hubfs/53/live%20chat-1.jpg",
  "https://cdn.pixabay.com/photo/2016/11/30/18/14/chat-1873536_640.png",

  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_hF8DoqgS_HMOnYy0lbpGgNajHgmy7Ne7Q&s",
];

export default function AvatarGrid() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
      {/* Central main image */}
      <div className="md:col-span-2 flex justify-center">
        <div className="w-64 h-64 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={Pictures[0]}
            alt="Main"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Smaller side images */}
      {Pictures.slice(1).map((image, index) => (
        <div
          key={index}
          className="w-40 h-40 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src={image}
            alt={`Image ${index + 2}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
