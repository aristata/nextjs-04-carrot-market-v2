export default function Home() {
  return (
    <main
      className={
        "bg-gray-300 h-screen flex items-center justify-center dark:bg-gray-900 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100"
      }
    >
      <div
        className={
          "flex flex-col space-y-4 bg-white m-10 p-10 rounded-3xl shadow-2xl w-[32rem] dark:bg-gray-600 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0 *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-100"
        }
      >
        <input
          className={
            "w-full rounded-full h-12 bg-gray-200 pl-5 ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          }
          placeholder={"email"}
          required
          type={"email"}
        />
        <span className={"text-red-500 font-medium hidden peer-invalid:block"}>
          Email is required.
        </span>
        <button
          className={
            "bg-black text-white py-2 rounded-full active:scale-95 transition-transform font-medium focus:scale-95 lg:p-2 lg:h-12 lg:px-4 peer-invalid:bg-red-100 peer-required:bg-green-500"
          }
        >
          Log in
        </button>
      </div>
    </main>
  );
}
