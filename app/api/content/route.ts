import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";

const hotelsData = [
  {
    id: "1a",
    name: "Luxury Palace Hotel",
    description:
      "A luxurious hotel with stunning views of the city. Perfect for a relaxing getaway.",
    imageUrl:
      "https://images.unsplash.com/photo-1472510580769-cd131ecf37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDM2MjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg4MTQyMjF8&ixlib=rb-4.0.3&q=80&w=400",
    price: 250
  },
  {
    id: "2b",
    name: "Seaside Resort & Spa",
    description:
      "Escape to this seaside resort offering world-class spa treatments and gourmet dining.",
    imageUrl:
      "https://images.unsplash.com/photo-1472510580769-cd131ecf37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDM2MjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg4MTQyMjF8&ixlib=rb-4.0.3&q=80&w=400",
    price: 180
  },
  {
    id: "3c",
    name: "Mountain Lodge Retreat",
    description:
      "Experience tranquility in the heart of the mountains. Cozy cabins and scenic hiking trails await.",
    imageUrl:
      "https://images.unsplash.com/photo-1472510580769-cd131ecf37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDM2MjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg4MTQyMjF8&ixlib=rb-4.0.3&q=80&w=400",
    price: 150
  },
  {
    id: "4d",
    name: "Urban Boutique Hotel",
    description:
      "Chic and stylish rooms, vibrant nightlife, and gourmet restaurants in the heart of the city.",
    imageUrl:
      "https://images.unsplash.com/photo-1472510580769-cd131ecf37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDM2MjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg4MTQyMjF8&ixlib=rb-4.0.3&q=80&w=400",
    price: 200
  },
  {
    id: "5e",
    name: "Historic Inn & Suites",
    description:
      "Step back in time at this charming historic inn. Elegant rooms and classic decor.",
    imageUrl:
      "https://images.unsplash.com/photo-1472510580769-cd131ecf37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDM2MjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg4MTQyMjF8&ixlib=rb-4.0.3&q=80&w=400",
    price: 120
  },
  {
    id: "6f",
    name: "Ito's Inn & Suites",
    description:
      "Step back in time at this charming historic inn. Elegant rooms and classic decor.",
    imageUrl:
      "https://images.unsplash.com/photo-1472510580769-cd131ecf37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDM2MjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg4MTQyMjF8&ixlib=rb-4.0.3&q=80&w=400",
    price: 120
  },
  {
    id: "7g",
    name: "Vill de'ville",
    description:
      "Step back in time at this charming historic inn. Elegant rooms and classic decor.",
    imageUrl:
      "https://images.unsplash.com/photo-1472510580769-cd131ecf37ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDM2MjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg4MTQyMjF8&ixlib=rb-4.0.3&q=80&w=400",
    price: 120
  }
];

// export default hotelsData;
export { hotelsData };

export async function GET() {
  //   const session = await getServerSession();

  return NextResponse.json(hotelsData);
}
