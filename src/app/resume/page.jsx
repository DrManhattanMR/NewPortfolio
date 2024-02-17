import { Education, Experience } from "../data/data";
import { IoSchoolOutline } from "react-icons/io5";
import Knowledge from "../components/Knowledge";
export default function Resume() {
  return (
    <div className="bg-gray-200 py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-wide text-sky-900 sm:text-4xl">
            Education
          </h2>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-2 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Education?.map((post) => (
            <article
              key={post.id}
              className="flex rounded-lg dark:bg-gray-800 bg-white p-8 max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <a className="relative z-10 rounded-full bg-green-100 px-3 py-1.5 font-medium text-green-600 hover:bg-green-100">
                  {post.year}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-600 dark:text-gray-300">
                  <a>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-1 line-clamp-3 text-sm leading-6 text-blue-600 dark:text-blue-300 font-semibold">
                  <IoSchoolOutline />
                  {post.university}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-wide text-sky-900 sm:text-4xl">
            Experience
          </h2>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-2 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Experience?.map((post) => (
            <article
              key={post.id}
              className="flex rounded-lg dark:bg-gray-800 bg-white p-8 max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <a className="relative z-10 rounded-full bg-blue-100 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100">
                  {post.year}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-600 dark:text-gray-300">
                  <a>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-1 line-clamp-3 text-sm leading-6 text-sky-900 dark:text-sky-300 font-semibold">
                  {post.company}
                </p>
                <div className="flex items-center gap-x-4 text-xs mt-1">
                  <p className="font-medium text-sky-600 dark:text-sky-300">
                    {post.stack}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Knowledge />
      </div>
    </div>
  );
}
