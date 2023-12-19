`use client`;
import { useState, useEffect } from "react";

export function GuestsContainer({onGuestCountChange}) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);

  const handleGuestChange = (type, action) => {
    switch (type) {
      case "adults":
        setAdults((prevAdults) => (action === "increment" ? prevAdults + 1 : Math.max(prevAdults - 1, 1)));
        break;
      case "children":
        setChildren((prevChildren) => (action === "increment" ? prevChildren + 1 : Math.max(prevChildren - 1, 0)));
        break;
      case "babies":
        setBabies((prevBabies) => (action === "increment" ? prevBabies + 1 : Math.max(prevBabies - 1, 0)));
        break;
      default:
        break;
    }
  };

   // Call the callback prop whenever the guest values change
   useEffect(() => {
    const totalGuests = adults + children + babies;
    onGuestCountChange({ adults, children, babies, totalGuests });
  }, [adults, children, babies, onGuestCountChange]);


  return (
    <div className="absolute  z-40 w-full flex justify-center h-screen ">
      <div className="absolute bg-black opacity-40 w-full h-full"></div>
      <div className="absolute right-[55%] bg-white rounded-[20px] p-[32px] h-fit top-[200px] flex flex-col font-bold gap-[18px] container-element">
        <span className="text-[11px] opacity-[65%] mb-[6px]">ROOM 1</span>
        <div className="flex items-center justify-between w-[244px]">
          <span className="text-[18px]">Adults</span>
          <div className="flex gap-[8px]">
            <div className="bg-[#F0EAE2] p-[8px] rounded-full cursor-pointer"
            onClick={() => handleGuestChange("adults", "decrement")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[16px] h-[16px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </div>
            <div className="ring-2 relative ring-[#F0EAE2] p-[16px] rounded-full text-center flex justify-center items-center text-[14px]">
              <span className="absolute">{adults}</span>
            </div>
            <div className="bg-[#F0EAE2] p-[8px] rounded-full cursor-pointer"
             onClick={() => handleGuestChange("adults", "increment")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.49967 8.50016V13.6668H8.49967V8.50016H13.6663V7.50016H8.49967V2.3335H7.49967V7.50016H2.33301V8.50016H7.49967Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="text-[18px]">Children</span>
            <span className="text-[13px] opacity-[65%] font-normal">
              3-5 years old
            </span>
          </div>

          <div className="flex gap-[8px]">
            <div className="bg-[#F0EAE2] p-[8px] rounded-full cursor-pointer"
            onClick={() => handleGuestChange("children", "decrement")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[16px] h-[16px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </div>
            <div className="ring-2 relative ring-[#F0EAE2] p-[16px] rounded-full text-center flex justify-center items-center text-[14px]">
              <span className="absolute">{children}</span>
            </div>
            <div className="bg-[#F0EAE2] p-[8px] rounded-full cursor-pointer"
            onClick={() => handleGuestChange("children", "increment")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.49967 8.50016V13.6668H8.49967V8.50016H13.6663V7.50016H8.49967V2.3335H7.49967V7.50016H2.33301V8.50016H7.49967Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex flex-col">
            <span className="text-[18px]">Babies</span>
            <span className="text-[13px] opacity-[65%] font-normal">
              0-2 years old
            </span>
          </div>
          <div className="flex justify-self-end gap-[8px]">
            <div className="bg-[#F0EAE2] p-[8px] rounded-full cursor-pointer"
            onClick={() => handleGuestChange("babies", "decrement")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[16px] h-[16px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </div>
            <div className="ring-2 relative ring-[#F0EAE2] p-[16px] rounded-full text-center flex justify-center items-center text-[14px]">
              <span className="absolute">{babies}</span>
            </div>
            <div className="bg-[#F0EAE2] p-[8px] rounded-full cursor-pointer"
            onClick={() => handleGuestChange("babies", "increment")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16" 
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.49967 8.50016V13.6668H8.49967V8.50016H13.6663V7.50016H8.49967V2.3335H7.49967V7.50016H2.33301V8.50016H7.49967Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
