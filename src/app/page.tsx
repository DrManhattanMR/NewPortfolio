"use client"
import Image from "next/image";
import { useState } from "react";
import photo from "../../public/profile.jpg";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <div className="text-center p-10 py-10">
            <h5 className="text-4xl py-2 text-blue-600 font-medium dark:text-teal-400 md:text-6xl">
              Emanuel Perez Cortes
            </h5>
            <h3 className="text-2xl py-2 text-slate-600 font-semibold dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-slate-500 font-medium dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Welcome! As a Freelance Software Developer, I specialize in meeting your programming and design content needs. With affordable rates and a commitment to quality, I&apos;m here to bring your ideas to life. Let&apos;s connect and get started today!
            </p>

            <div className="flex justify-center mt-2">
  <div className="bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 md:h-96 md:w-96 relative overflow-hidden">
    <Image src={photo} layout="fill" objectFit="cover" alt="profile image"/>
  </div>
</div>
          </div>

      </main>
    </div>
  );
}
