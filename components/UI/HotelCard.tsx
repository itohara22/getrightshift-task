type Props = {
  name: string;
  imageUrl: string;
  price: number;
};

const HotelCard = ({ name, price, imageUrl }: Props) => {
  return (
    <div className="w-[25vw] aspect-[1] min-w-[280px] max-w-[350px] relative group drop-shadow-xl">
      <img
        className="w-[100%] h-[100%] object-cover object-center rounded-xl "
        src={imageUrl}
        alt="camp image"
      />
      <div className="absolute inset-0 bg-black opacity-10 rounded-xl group-hover:opacity-5 transition-all"></div>
      <div className="rounded-bl-xl bg-gradient-to-r from-accent to-transparent z-10 p-4 absolute text-white inset-x-0 bottom-0 group-hover:pl-6 transition-all duration-700">
        <h3 className="font-semibold font-oswald text-3xl">{name}</h3>
        <p className="">INR {price} Per night</p>
      </div>
    </div>
  );
};

export default HotelCard;
