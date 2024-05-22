export default function Home() {
  return (
    <main
      className={
        "bg-gray-300 h-screen flex flex-col items-center justify-center dark:bg-gray-900 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100"
      }
    >
      {/* 로그인 */}
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

      {/* 리스트 */}
      <div
        className={
          "flex flex-col space-y-4 bg-white rounded-3xl shadow-2xl p-5 w-full max-w-screen-sm"
        }
      >
        {["Aris", "Bob", "Cherk", "Dean", "Edin"].map((person, index) => (
          <div
            key={index}
            className={
              "flex items-center gap-4 border-b-2 pb-5 last:border-0 last:pb-0"
            }
          >
            <div className={"size-10 bg-blue-500 rounded-full"} />
            <span className={"text-lg font-bold"}>{person}</span>
            <div
              className={
                "size-6 bg-red-500 rounded-full text-white flex justify-center"
              }
            >
              <span>{index}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
