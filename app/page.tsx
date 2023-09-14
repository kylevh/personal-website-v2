import { sf } from "@/app/fonts";
import Link from "next/link";

export default function Home() {
  let motd = "";

  const localClientTime = new Date().getHours();
  if (5 <= localClientTime && localClientTime < 12) {
    motd = "good morning."
  } else if (12 <= localClientTime && localClientTime < 18) {
    motd = "good afternoon."
  } else {
	motd = "good evening."
  }

  return (
    <main className="flex min-h-screen items-center justify-between p-2 sm:p-24 bg-kyle-white">
      <header className="text-gray-600 body-font hidden sm:block sm:fixed z-auto pt-4 h-screen w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center  mr-52 text-base justify-center">
            <Link
              href={"/works"}
              className={`${sf.className} font-light mr-20 text-xl cursor-pointer text-gray-500 hover:text-kyle-dark duration-200`}
            >
              works
            </Link>
            <Link
              href={"/info"}
              className={`${sf.className} font-light mr-20 text-xl cursor-pointer text-gray-500 hover:text-kyle-dark duration-200`}
            >
              info
            </Link>
            <Link
              href={"/contact"}
              className={`${sf.className} font-light mr-20 text-xl cursor-pointer text-gray-500 hover:text-kyle-dark duration-200`}
            >
              contact
            </Link>
          </nav>
        </div>
      </header>

	{/* Container for hero home page */}
      <div className="grid grid-cols-3 lg:grid-cols-12 p-4 gap-2 h-auto w-full z-auto ">
		{/* Left Header Text */}
        <div className="w-full col-span-3 col-start-1 ">
          <h1
            className={`${sf.className} font-bold text-7xl sm:text-8xl sm:px-5 sm:mb-6 mb-2 text-left text-kyle-dark`}
          >
            kyle
          </h1>
          <h1
            className={`${sf.className} font-bold text-7xl sm:text-8xl sm:px-5 sm:mb-6 mb-1 text-left text-kyle-dark`}
          >
            {" "}
            huynh,
          </h1>
          <h1
            className={`${sf.className} font-light text-7xl sm:text-8xl sm:px-5 text-left text-kyle-dark`}
          >
            designer
          </h1>
          <div className="h-[0rem]" />
        </div>

		{/* Right header text */}
        <div className="w-full justify-center col-span-4 col-start-1 mt-16
		
		md:col-span-6 xl:mt-[18rem] 
		xl:col-span-5 
		bg-purple-700 sm:bg-red-700 md:bg-orange-400 lg:bg-yellow-200 xl:bg-green-700
		">
          <h1
            className={`${sf.className} font-bold text-3xl sm:text-4xl text-left text-kyle-dark w-full`}
          >
            {"{"} {motd} {"}"}
          </h1>

          <div className="w-12 h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark" />

          <p
            className={`${sf.className} font-light text-2xl sm:text-3xl text-left text-kyle-dark`}
          >
            i’m kyle, a multi-disciplinary designer and software engineer based
            in seattle, wa
          </p>
        </div>
      </div>
    </main>
  );
}
