import Amenity from "./Amenity";

export function RoomCard(room) {

  const amenities = room.amenities || [];

    return (
      <div className="flex mt-[24px] w-full cursor-pointer">
        <img className="w-[318px] h-[239px]" src="/room.png" alt="Room Image" />
        <div className="flex relative flex-col rounded-r-[10px] border-gray-200  border-r-[2px] border-t-[2px] border-b-[2px] p-[16px] w-full">
          <span className="text-[22px] font-semibold">{room.name}</span>
          <span className="text-[13px] font-normal opacity-[65%] mt-[12px]">
            {room.description}
          </span>
          <div className="flex mt-[16px] gap-[12px]">
            {amenities.map((amenity, index) => (
              <Amenity key={index} label={amenity} />
            ))}
          </div>
          <span className="absolute bottom-[15px] text-[28px] justify-self-end">
            {room.price} kr
          </span>
        </div>
      </div>
    );
  }