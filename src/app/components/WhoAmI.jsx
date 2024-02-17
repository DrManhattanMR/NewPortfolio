import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { AboutMeEs, AboutMeUs, WhatIdo } from "../data/data";
import Image from "next/image";
import photo from "../../../public/profile.jpg";
export default function WhoAmI() {
  return (
    <div className="bg-gray-200 py-12 sm:py-12">
      <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-2 max-w-sm mx-auto mt-2">
        <Image
          className="rounded-2xl text-center"
          src={photo}
          width="300"
          height="200"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt=""
        />
      </article>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-lg h-full p-6 dark:bg-gray-800 mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Who Am I?
          </p>

          <p className="mt-6 text-medium leading-8 text-gray-600 dark:text-white">
            {AboutMeUs}
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-10">
          {WhatIdo.map((item) => (
            <div key={item.id} className="p-4 max-w-sm">
              <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0 text-2xl">
                    {item.icon}
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg> */}
                  </div>
                  <h2 className="text-gray-600 dark:text-white text-lg font-medium">
                    {item.title}
                  </h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
