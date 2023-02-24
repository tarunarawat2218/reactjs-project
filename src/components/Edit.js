import React from "react";

export default function Post() {
  return (
    <div>
      <img
        src="/secondphoto (2).jpg"
        alt="Sunset in the mountain"
        className="rounded  h-96 w-2/4 mx-5 my-5"
      />
      <div class="border-r border-b border-l border-gray-400 lg:border-2 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal m-5">
        <div class="font-bold text-4xl mb-2 mx-5">The Coldest Sunset</div>
        <div class = "flex flex-row-reverse">
          <i class="fa fa-pencil-square-o fa-lg cursor-pointer mx-2 text-blue-600" aria-hidden="true"></i>
          <i class="fa fa-trash fa-lg cursor-pointer mx-2 text-red-700" aria-hidden="true"></i>
        </div>

        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="/blogimage.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none">Jonathan Reinink</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
        </div>
        <div>
          <p class="text-gray-700 text-base m-2">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
            nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
            nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
}
