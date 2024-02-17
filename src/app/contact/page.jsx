"use client";
import { Phones, Emails } from "../data/data";
import { LuPhoneIncoming } from "react-icons/lu";
import { MdMarkEmailRead } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const sendEmail = (event) => {
  event.preventDefault();
  emailjs
    .sendForm(
      "service_vrwf98v",
      "template_j7kla0h",
      event.target,
      "tlLnDse5px4Y7iwm0"
    )
    .then(
      (result) => {
        console.log(result.text);
        if (result.text == "OK") {
          toast.success("Message Sent, thank you!");
          event.target.reset();
        } else {
          toast.error("This didn't work, try again");
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
};
export default function Contact() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white-200">
              Contact us
            </h1>
            <h6 className="mt-1 text-xl font-semibold text-gray-600 dark:text-white-100">
              I am always open to discussing product.
            </h6>
            <p className="mt-1 text-xl font-bold text-blue-600 dark:text-white-100">
              ... Backend, Frontend, Web & more ...
            </p>
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-white-200">
                Fill in the form
              </h2>

              <form id="myForm" onSubmit={sendEmail}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-base font-semibold leading-6 text-blue-900"
                      >
                        Full Name:
                      </label>
                      <input
                        required={true}
                        name="from_name"
                        id="user_name"
                        type="text"
                        className="py-3 px-4 block w-full border-gray-500 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-300 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-600"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold leading-6 text-blue-900"
                    >
                      Email:
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      id="user_email"
                      required={true}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-300 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-600"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold leading-6 text-blue-900"
                    >
                      Details:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required={true}
                      rows="4"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-200 dark:bg-slate-300 dark:border-gray-700 dark:text-gray-800 dark:focus:ring-gray-600"
                      placeholder="Details"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Send inquiry
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We will get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              <div className="flex gap-x-7 py-6">
                <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0 text-2xl">
                  <LuPhoneIncoming />
                </div>
                <div className="grow">
                  <h3 className="font-semibold text-xl text-slate-700 dark:text-gray-600">
                    Phone
                  </h3>
                  <ul className="list-disc">
                    {Phones?.map((item) => (
                      <li className="text-blue-500 font-semibold" key={item.id}>
                        <span className="text-xs text-green-600 border-green-200">
                          {item.country}
                        </span>
                        &nbsp;
                        {item.number}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-x-7 py-6">
                <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0 text-2xl">
                  <MdMarkEmailRead />
                </div>
                <div className="grow">
                  <h3 className="font-semibold text-xl text-slate-700 dark:text-gray-600">
                    Email
                  </h3>
                  <ul className="list-disc">
                    {Emails?.map((item) => (
                      <li className="text-blue-500 font-semibold" key={item.id}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
