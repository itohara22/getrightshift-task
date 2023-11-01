type HotelData = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

import HotelCard from "@/components/UI/HotelCard";
import Link from "next/link";

const Hotels = async () => {
  const hotelData: HotelData[] = await fetch(
    "http://localhost:3000/api/content",
    { cache: "reload" }
  ).then((res) => res.json());

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 md:px-8 relative z-10">
      <div className="mx-auto w-[90vw] md:w-[85vw] pt-12 ">
        <h1 className="text-text font-bold text-3xl mb-8 pl-12">All Hotels</h1>
        <ul className="mt-4 pb-4 flex flex-wrap gap-4 justify-around">
          {hotelData.map((hotel) => {
            return (
              <li key={hotel.id}>
                <Link href={`/hotels/${hotel.id}`}>
                  <HotelCard
                    name={hotel.name}
                    imageUrl={hotel.imageUrl}
                    price={hotel.price}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Hotels;
