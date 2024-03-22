export default function Home() {
  return (
    <main
      className={
        "bg-gray-300 h-screen flex items-center justify-center dark:bg-gray-900 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100"
      }
    >
      <div
        className={
          "flex flex-col space-y-4 bg-white m-10 p-10 rounded-3xl shadow-2xl w-[32rem] dark:bg-gray-600 md:flex-row md:items-center md:space-x-2 md:space-y-0"
        }
      >
        <input
          type="text"
          placeholder={"search"}
          className={
            "w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          }
        />
        <button
          className={
            "bg-black text-white py-2 rounded-full active:scale-95 transition-transform font-medium focus:scale-95 outline-none md:p-2 md:h-12 md:px-4"
          }
        >
          search
        </button>
      </div>
    </main>
  );
}
