import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] grid grid-flow-col place-items-center">
      <div className=" md:block bg-[url('../public/home.jpg')] bg-cover bg-top  h-full w-full md:w-1/2 absolute top-0 md:right-0 z-[-2]"></div>
      <div className="md:mr-[50%]">
        <h1 className="text-8xl leading-[150px] font-serif font-bold md:text-7xl lg:text-8xl text-center md:leading-[100px] lg:leading-[150px] mr-4 text-white md:text-text drop-shadow-[5px_8px_2px_rgba(0,0,0,0.8)] md:drop-shadow-none">
          Find your Dream{" "}
          <span className="text-primary">
            <Link href={"/"}>Hotel</Link>
          </span>
        </h1>
      </div>
    </div>
  );
}
