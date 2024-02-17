import { Knowledges } from "../data/data";
export default function Knowledge() {
  return (
    <div className="flex flex-wrap gap-4 mt-5">
      {Knowledges?.map((item) => (
        <div
          key={item.id}
          draggable="true"
          role="button"
          title="Hover chip"
          className="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-sky-200 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-blue-600 dark:text-gray-300 dark:active:text-primary"
        >
          {item.icon}
          <span className="block text-sm font-medium">{item.title}</span>
        </div>
      ))}
    </div>
  );
}
