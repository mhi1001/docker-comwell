`use client`
import { HotelCard } from "./hotelcard"
import { useState, useEffect } from 'react';

export function HotelsContainer({ onSelectHotel }) {

    const [hotels, setHotels] = useState([]);


    useEffect(() => {
        // Function to fetch hotels from API
        const fetchHotels = async () => {
            try {
                const response = await fetch('http://127.0.0.1:2000/hotels');
                const data = await response.json();
                
                setHotels(data);
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        };

        // get the hotels
        fetchHotels();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    return (
        <div className="absolute z-40 w-full flex justify-center h-screen ">
            <div className="absolute bg-black opacity-40 w-full h-full"></div>
            <div className="bg-white absolute px-[24px]  top-[200px] pt-[32px] pb-[48px] rounded-[20px] flex font-bold z-50 w-fit h-fit container-element">

                {/* Mapping through the hotels and rendering HotelCards */}
                {hotels.map((hotel) => (
                    <div key={hotel._id} className="flex flex-col gap-[12px] w-[256px]" onClick={() => onSelectHotel(hotel)}>
                        <span className="mb-[13px]">{hotel.location}</span>
                        {/* Rendering HotelCard without mapping rooms */}
                        <HotelCard 
                            id={hotel._id}
                            name={hotel.name}
                            location={hotel.location}
                        />
                    </div>
                ))}
                
            </div>
        </div>
    );
}