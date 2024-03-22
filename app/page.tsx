export default function Home() {
  return (
    <main
      className={
        "bg-gray-300 h-screen flex items-center justify-center dark:bg-gray-900"
      }
    >
      <div
        className={
          "flex flex-col space-y-4 bg-white m-10 p-10 rounded-3xl shadow-2xl w-[32rem] dark:bg-gray-600"
        }
      >
        <div className={"flex justify-between"}>
          <div className={"flex flex-col"}>
            <span className={"dark:text-gray-300"}>In transit</span>
            <span className={"text-2xl font-semibold dark:text-gray-200"}>
              Coolblue
            </span>
          </div>
          <div className={"bg-orange-400 size-10 rounded-full"}></div>
        </div>
        <div className={"mt-2 flex space-x-2"}>
          <span
            className={
              "bg-green-500 text-white text-sm uppercase p-1 px-3 rounded-full hover:bg-green-600 hover:scale-125 transition"
            }
          >
            Today
          </span>
          <span className={"font-bold dark:text-gray-300"}>9:30-10:30</span>
        </div>
        <div className={"relative"}>
          <div className={"h-2 w-full bg-gray-200 rounded-full absolute"}></div>
          <div className={"h-2 w-2/3 bg-green-500 rounded-full absolute"}></div>
        </div>
        <div
          className={
            "flex justify-between items-center mt-5 text-gray-600 dark:text-gray-200"
          }
        >
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className={"text-gray-400"}>Delivered</span>
        </div>
      </div>
    </main>
  );
}
