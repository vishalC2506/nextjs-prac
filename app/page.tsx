import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Image from "next/image";
export default function Home() {
  return (
    <main
      className={`grid sm:grid-cols-[minmax(0,25vw)_minmax(0,5fr)] min-h-100vh
    grid-cols-1 min-w-0 min-h-0 overflow-clip gap-2 
                   w-full grid-rows-[minmax(0,1fr)]  bg-Noble`}
    >
      <NavBar />
      <div
        className={`row-span-[1/-1] col-span-1    w-full sm:col-span-[2/-1]  h-100vh
      grid sm:grid-rows-[minmax(min-content,2fr)_minmax(min-content,5fr)_minmax(0,1.1fr)] gap-2  absolute left-0 top-0 sm:relative
      grid-rows-[minmax(min-content,1fr)_minmax(min-content,7fr)_minmax(0,1fr)] `}
      >
        <Header />
        <Body />
        <div className=" w-[100%] text-white bg-[#0D0F10]  sm:p-4 flex items-center justify-around rounded-lg">
          <Image
            src="/images/mic.png"
            alt="load err"
            width={10}
            height={10}
            className="sm:w-[clamp(1rem,0.8vw+0.4rem,1vw+0.6rem)] hidden sm:flex"
          />
          <input
            placeholder="What you want to do with this asset?"
            className="text-[#676e74] bg-Noble w-[clamp(6rem,75%+2rem,80%+2rem)] sm:p-2 
                    rounded-md overflow-hidden "
          />
          <button>
            <Image
              src="/images/clip.png"
              alt="load err"
              width={10}
              height={10}
              className="w-[clamp(1.2rem,0.8vw+0.4rem,1vw+0.6rem)]"
            />
          </button>
          <button>
            <Image
              src="/images/sendIcon.png"
              alt="load err"
              width={10}
              height={10}
              className="w-[clamp(1.8rem,1vw+1rem,1vw+1.8rem)]"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
