//rfc(react function component)
import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      class={`flex items-center justify-between flex-wrap ${props.mode} p-6`}
    >
      <div class="flex items-center flex-shrink-0 text-white mr-10">
        <span class="font-semibold text-2xl tracking-tight">BlogOut</span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-lg lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="/About"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            About
          </a>
        </div>
        <div py-3>
          <label
            class={`relative inline-flex items-center mb-4 cursor-pointer`}
          >
            <input
              type="checkbox"
              value=""
              onClick={props.toggleMode}
              class="sr-only peer"
            />
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span
              class={`ml-3 text-sm font-medium dark:text-gray-300  text- ${
                props.mode === "bg-stone-900"
                  ? "text-slate-50"
                  : "text-stone-900"
              }`}
            >
              ON/OFF
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
}
