import {setHotel} from "@/app/utils/bookingflow"

export function HotelCard({ id, name, location }) {

    function selectHotel(){
        let hotel = {
            id: id,
            name: name,
            location : location
        }
        setHotel(hotel)
    }

    return (
        <div onClick={selectHotel} className="flex gap-[12px] cursor-pointer">
            <img className="w-[54px] h-[44px]" src="/hotelimg.png" alt="Hotel" />
            <div className="flex flex-col">
                <span>{name}</span>
                <span className="text-[13px] opacity-[65%]">{location}</span>
            </div>
        </div>
    );
}
