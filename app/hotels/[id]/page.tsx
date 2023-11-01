type HotelData = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

interface Props {
  params: { id: string };
}

import Link from "next/link";

export default async function Hotel({ params }: Props) {
  const hotelData: HotelData[] = await fetch(
    "http://localhost:3000/api/content",
    { cache: "reload" }
  ).then((res) => res.json());

  const hotel = hotelData.find((hotel) => hotel.id === params.id)!;

  return (
    <div className="min-w-[280px] w-fit mx-auto min-h-[calc(100vh-4rem)]">
      <div className="mt-8">
        <Link className="text-sm font-bold hover:text-accent" href="/hotels">
          All Hotels
        </Link>
      </div>
      <div className="mt-10 mb-2 w-fit">
        <h2 className="text-3xl font-bold ">{hotel?.name}</h2>
      </div>
      <section className="p-4 bg-secondary rounded-lg w-fit">
        <div className="flex flex-col md:flex-row gap-4 min-h-[300px] items-center">
          <img
            className="max-w-full mb-2 self-center max-h-[55vh]"
            src={hotel?.imageUrl}
            alt="camp images"
          />
          <p className="text-md leading-loose text-text md:max-w-[300px] flex-1 self-start md:self-auto">
            {hotel?.description}
          </p>
        </div>
        <div className="flex gap-7 items-center justify-between mt-4">
          <span className="text-xl md:text-3xl">
            <span className="font-bold">Price:</span>
            {hotel?.price}/night
          </span>
        </div>
      </section>
    </div>
  );
}
