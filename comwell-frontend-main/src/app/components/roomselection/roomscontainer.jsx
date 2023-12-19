"use client";
import React, { useState, useEffect } from "react";
import { RoomCard } from "./roomcard";
import { getMonthName } from "@/app/utils/datehelper";

export function RoomSelection({ selectedHotel, guestCounts, checkindate, checkoutdate }) {


  // Function to fetch hotels from API
  const sendBooking = async (booking) => {
    fetch("http://127.0.0.1:2000/bookings/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
  };
  // get the hotels

  const handleSendBooking = (room) => {
    console.log(room)
    var booking = {
      hotel: selectedHotel._id,
      guestInfo: guestCounts,
      Checkin: checkindate,
      Checkout: checkoutdate,
      room: room._id
    }

    sendBooking(booking)
  }



  // Populate rooms of the selected hotel
  const rooms = selectedHotel ? selectedHotel.rooms : [];

  console.log("the rooms TEST: "+ rooms)

  return (
    <div className="absolute z-50 w-full flex justify-center h-screen ">
      <div className="absolute bg-black opacity-40 w-full h-full"></div>
      <div className="bg-white absolute right-[0%] flex flex-col font-bold z-50 w-[55%] h-full container-element">
        <div className="flex p-[20px] justify-around w-full">
          <div className="flex items-center h-fit justify-start w-full text-[13px] gap-[12px]">
            <div className="bg-[#F0EAE2] rounded-full p-[8px] w-fit h-fit mr-[8px]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.36001 10.5826L14.5838 4.35882L13.641 3.41602L6.53148 10.5255L13.6125 18.5507L14.6123 17.6686L8.36001 10.5826Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex gap-[4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.25 2.5H13.75V1.25H12.5V2.5H7.5V1.25H6.25V2.5H3.75C3.0625 2.5 2.5 3.0625 2.5 3.75V16.25C2.5 16.9375 3.0625 17.5 3.75 17.5H16.25C16.9375 17.5 17.5 16.9375 17.5 16.25V3.75C17.5 3.0625 16.9375 2.5 16.25 2.5ZM16.25 16.25H3.75V7.5H16.25V16.25ZM16.25 6.25H3.75V3.75H6.25V5H7.5V3.75H12.5V5H13.75V3.75H16.25V6.25Z"
                  fill="black"
                />
              </svg>
              <span>{checkindate.getDate() + " " + getMonthName(checkindate.getMonth())} - {checkoutdate.getDate() + " " + getMonthName(checkoutdate.getMonth())}</span>
            </div>
            <div className="flex gap-[4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1527 3.02666C11.6388 2.68328 11.0346 2.5 10.4165 2.5C9.5877 2.5 8.79285 2.82924 8.2068 3.41529C7.62074 4.00134 7.2915 4.7962 7.2915 5.625C7.2915 6.24307 7.47478 6.84725 7.81816 7.36116C8.16154 7.87506 8.6496 8.2756 9.22062 8.51212C9.79164 8.74865 10.42 8.81053 11.0262 8.68995C11.6324 8.56938 12.1892 8.27175 12.6262 7.83471C13.0633 7.39767 13.3609 6.84085 13.4815 6.23466C13.602 5.62847 13.5402 5.00013 13.3036 4.42911C13.0671 3.85809 12.6666 3.37004 12.1527 3.02666ZM7.98588 1.98732C8.70535 1.50659 9.55121 1.25 10.4165 1.25C11.5768 1.25 12.6896 1.71094 13.5101 2.53141C14.3306 3.35188 14.7915 4.46468 14.7915 5.625C14.7915 6.49029 14.5349 7.33615 14.0542 8.05562C13.5735 8.77508 12.8902 9.33584 12.0907 9.66697C11.2913 9.99811 10.4117 10.0847 9.56298 9.91593C8.71432 9.74712 7.93477 9.33045 7.32291 8.71859C6.71106 8.10674 6.29438 7.32719 6.12557 6.47852C5.95676 5.62985 6.0434 4.75019 6.37453 3.95076C6.70566 3.15133 7.26642 2.46805 7.98588 1.98732ZM15.8332 18.75H16.6665V15.625C16.6665 14.4647 16.2056 13.3519 15.3851 12.5314C14.5646 11.7109 13.4518 11.25 12.2915 11.25H8.5415C7.38118 11.25 6.26838 11.7109 5.44791 12.5314C4.62744 13.3519 4.1665 14.4647 4.1665 15.625V18.75H4.99984H5.4165H15.4165H15.8332ZM15.4165 17.5V15.625C15.4165 15.2146 15.3357 14.8083 15.1786 14.4291C15.0216 14.05 14.7914 13.7055 14.5012 13.4153C14.211 13.1251 13.8665 12.8949 13.4874 12.7379C13.1082 12.5808 12.7019 12.5 12.2915 12.5H8.5415C7.7127 12.5 6.91785 12.8292 6.3318 13.4153C5.74574 14.0013 5.4165 14.7962 5.4165 15.625V17.5H15.4165Z"
                  fill="black"
                />
              </svg>
              <span>{guestCounts}</span>
            </div>
            <div className="flex gap-[4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 11.25C9.38194 11.25 8.77775 11.0667 8.26385 10.7233C7.74995 10.38 7.34941 9.8919 7.11288 9.32089C6.87636 8.74987 6.81447 8.12153 6.93505 7.51534C7.05563 6.90915 7.35326 6.35233 7.7903 5.91529C8.22734 5.47825 8.78416 5.18062 9.39035 5.06005C9.99654 4.93947 10.6249 5.00135 11.1959 5.23788C11.7669 5.4744 12.255 5.87494 12.5984 6.38884C12.9417 6.90275 13.125 7.50693 13.125 8.125C13.1241 8.95351 12.7945 9.74782 12.2087 10.3337C11.6228 10.9195 10.8285 11.2491 10 11.25ZM10 6.25C9.62917 6.25 9.26665 6.35997 8.95831 6.56599C8.64997 6.77202 8.40965 7.06486 8.26773 7.40747C8.12582 7.75008 8.08869 8.12708 8.16103 8.49079C8.23338 8.85451 8.41196 9.1886 8.67418 9.45083C8.93641 9.71305 9.2705 9.89163 9.63421 9.96397C9.99793 10.0363 10.3749 9.99919 10.7175 9.85727C11.0602 9.71536 11.353 9.47504 11.559 9.16669C11.765 8.85835 11.875 8.49584 11.875 8.125C11.8745 7.62789 11.6767 7.15129 11.3252 6.79978C10.9737 6.44827 10.4971 6.25055 10 6.25Z"
                  fill="black"
                />
                <path
                  d="M10 18.75L4.72782 12.5321C4.69788 12.4964 4.51019 12.2499 4.51019 12.2499C3.60951 11.0636 3.1229 9.6145 3.12501 8.125C3.12501 6.30164 3.84934 4.55295 5.13865 3.26364C6.42796 1.97433 8.17664 1.25 10 1.25C11.8234 1.25 13.5721 1.97433 14.8614 3.26364C16.1507 4.55295 16.875 6.30164 16.875 8.125C16.8772 9.61389 16.391 11.0624 15.4908 12.2483L15.4898 12.2499C15.4898 12.2499 15.3023 12.4964 15.2744 12.5295L10 18.75ZM5.50782 11.4969C5.50782 11.4969 5.65369 11.6895 5.68694 11.7309L10 16.8174L14.3188 11.7237C14.3462 11.6892 14.493 11.4951 14.493 11.4951C15.2288 10.5258 15.6264 9.34195 15.625 8.125C15.625 6.63316 15.0324 5.20242 13.9775 4.14752C12.9226 3.09263 11.4918 2.5 10 2.5C8.50816 2.5 7.07742 3.09263 6.02253 4.14752C4.96764 5.20242 4.37501 6.63316 4.37501 8.125C4.37362 9.34261 4.77156 10.5271 5.50782 11.4969Z"
                  fill="black"
                />
              </svg>
              <span>{selectedHotel.name}</span>
            </div>
          </div>
          <div className="flex justify-end text-[18px] items-center h-fit gap-[12px]">
            <span className="whitespace-nowrap">0 kr.</span>
            <div className="bg-[#F0EAE2] rounded-full p-[8px] w-fit h-fit">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_617_8203)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.625 3.125C5.27982 3.125 5 3.40482 5 3.75V8.125H6.875V5.625C6.875 4.93464 7.43464 4.375 8.125 4.375H11.875C12.5654 4.375 13.125 4.93464 13.125 5.625V8.125H15V3.75C15 3.40482 14.7202 3.125 14.375 3.125H5.625ZM13.125 9.375H6.875H4.61714L3.78381 11.875H16.2162L15.3829 9.375H13.125ZM11.875 8.125V5.625H8.125V8.125H11.875ZM3.75 13.125V15.625H16.25V13.125H3.75ZM3.75 18.125V16.875H16.25V18.125H17.5V11.7736L16.25 8.02358V3.75C16.25 2.71447 15.4105 1.875 14.375 1.875H5.625C4.58947 1.875 3.75 2.71447 3.75 3.75V8.02358L2.5 11.7736V18.125H3.75Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_617_8203">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[48px] px-[74px] justify-center align-middle">
          <span className="text-[36px] font-bold">Choose your room</span>
          <div className="flex mt-[32px] gap-[14px] text-[12px] font-semibold items-center">
            <span className="rounded-full px-[10px] py-[6px] text-white bg-[#AA8D65]">
              Rooms
            </span>
            <span>Packages</span>
          </div>
          {/* Map over rooms and create RoomCard components */}
        {rooms.map((room) => (
          <div onClick={() => handleSendBooking(room)}>
            <RoomCard key={room.name} {...room}></RoomCard>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
