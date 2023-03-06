import React from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div class="flex flex-col lg:flex-row justify-between gap-8">
        <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
            <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </div>
        <div class="w-full lg:w-8/12">
            <img class="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
        </div>
    </div>
    <div>
<div className="w-full lg:w-5/12 flex flex-col justify-center">
<h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 align-middle">Follow Us</h1>
</div>
<div class="flex flex-wrap">
<a href="http://www.instagram.com/tarunarawat2218/" className="mx-5"> <i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
<a href="http://www.facebook.com" className="mx-5" > <i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>
<a href="http://www.twitter.com//TarunaRawat11" className="mx-5" > <i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>
<a href="http://www.pinterest.com/tarunarawat2218/" className="mx-5"> <i class="fa fa-pinterest-square fa-3x" aria-hidden="true"></i></a>
</div>
</div>
</div>

);
}
