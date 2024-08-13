import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-4 *:font-medium">
        <span className="text-9xl">🫵</span>
        <h1 className="text-4xl">마! 니도?</h1>
        <h2 className="text-2xl">마니도 마켓에 퍼뜩 오이소!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href={"/signin"}
          className="w-full bg-orange-500 text-white text-lg font-medium py-3 rounded-md text-center hover:bg-orange-400 transition-colors"
        >
          계정 만들기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href={"/login"} className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
