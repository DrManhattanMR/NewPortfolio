import { SocialMedia } from "../data/data";
export default function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <div className="flex justify-center space-x-5">
        {SocialMedia.map((item) => (
          <a
            className=" text-blue-600/100 text-2xl"
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <p className="text-center text-gray-700 font-medium">
        &copy; 2024 All Rights Reserved by{" "}
        <a
          className="hover:text-blue-600 duration-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manfred Developer
        </a>
        .
      </p>
    </footer>
  );
}
