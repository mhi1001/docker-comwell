"use client";
import React, { useState, useEffect } from "react";
import { HotelsContainer } from "../hotelcontainer/hotelscontainer";
import { GuestsContainer } from "../guestscontainer/guestscontainer";
import { CalendarPicker } from "../calendarpicker/calendarpicker";
import { RoomSelection } from "../roomselection/roomscontainer";
import { NavbarButton } from "./navbarbutton";
import {
  getCurrentDate,
  getNextMonth,
  daysInMonth,
  dayOfWeek, getMonthName,
} from "@/app/utils/datehelper";

export function NavbarSecondary() {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".container-element")) {
        closeContainers();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    //Clean up event listener
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function closeContainers() {
    setShowHotelsContainer(false);
    setShowGuestsContainer(false);
    setShowCalendarPicker(false);
    setShowRoomContainer(false);
  }

  const [showHotelsContainer, setShowHotelsContainer] = useState(false);
  const [showGuestsContainer, setShowGuestsContainer] = useState(false);
  const [showCalendarPicker, setShowCalendarPicker] = useState(false);
  const [showRoomContainer, setShowRoomContainer] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedCheckinDate, setSelectedCheckinDate] = useState(null);
  const [selectedCheckoutDate, setSelectedCheckoutDate] = useState(null);

  function handleContainersToggle(id) {
    switch (id) {
      case 1:
        setShowHotelsContainer(!showHotelsContainer);
        setShowGuestsContainer(false);
        setShowCalendarPicker(false);
        setShowRoomContainer(false);
        break;
      case 2:
        setShowGuestsContainer(!showGuestsContainer);
        setShowHotelsContainer(false);
        setShowCalendarPicker(false);
        setShowRoomContainer(false);
        break;
      case 3:
        setShowCalendarPicker(!showCalendarPicker);
        setShowHotelsContainer(false);
        setShowGuestsContainer(false);
        setShowRoomContainer(false);
        break;
      case 4:
        // Only open the room container if a hotel is selected
        if (selectedHotel) {
          setShowRoomContainer(!showRoomContainer);
        }
        setShowGuestsContainer(false);
        setShowCalendarPicker(false);
        setShowCalendarPicker(false);
        break;
    }
  }

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
    //debug
    console.log("Selected Hotel:", hotel);
    setShowHotelsContainer(false);
    setShowGuestsContainer(true); // Open the next container (e.g., GuestsContainer)
  };
  const handleSelectCheckinDate = (chekindate) => {
    setSelectedCheckinDate(chekindate);
    //debug
    console.log("Selected checkin date:", chekindate);
  };
  const handleSelectCheckoutDate = (chekoutdate) => {
    setSelectedCheckoutDate(chekoutdate);
    //debug
    console.log("Selected checkout date:", chekoutdate);
  };

  const [guestCounts, setGuestCounts] = useState({
    adults: 1,
    children: 0,
    babies: 0,
    totalGuests: 1,
  });

  const handleGuestCountChange = (newGuestCounts) => {
    // Check if the new guest counts are different from the current state
    if (
        newGuestCounts.adults !== guestCounts.adults ||
        newGuestCounts.children !== guestCounts.children ||
        newGuestCounts.babies !== guestCounts.babies ||
        newGuestCounts.totalGuests !== guestCounts.totalGuests
      ) {
        setGuestCounts(newGuestCounts);
      }
  };
  console.log(guestCounts)
  return (
    //Important for this div to have the navbar-secondary. So that it doesnt disappear when you click on it
    <div className="w-full flex h-full navbar-secondary">
      {showHotelsContainer && (
        <HotelsContainer onSelectHotel={handleSelectHotel}></HotelsContainer>
      )}
      {showGuestsContainer && (
        <GuestsContainer
          onGuestCountChange={handleGuestCountChange}
        ></GuestsContainer>
      )}
      {showCalendarPicker && (
        <CalendarPicker
          selectedCheckinDate={selectedCheckinDate}
          onSelectCheckinDate={handleSelectCheckinDate}
          selectedCheckoutDate={selectedCheckoutDate}
          onSelectCheckoutDate={handleSelectCheckoutDate}
        ></CalendarPicker>
      )}
      {showRoomContainer && (
        <RoomSelection 
        selectedHotel={selectedHotel}
        guestCounts={null}
        checkindate={selectedCheckinDate}
        checkoutdate={selectedCheckoutDate}
        ></RoomSelection>
      )}
      <div className="w-full relative flex flex-col z-40 justify-between px-[80px] pt-[24px] pb-[12px] bg-[#F9F6F2] ">
        <div className="flex w-full">
          <div className="w-1/3 flex justify-start">
            <a href="/">
              <img className="w-[128px] h-[33px]" src="/logodark.png " />
            </a>
          </div>

          <div className="w-1/3 flex justify-center items-center gap-[14px] text-[12px] font-semibold">
            <div className="rounded-full bg-[#AA8D65] px-[10px] py-[6px] text-white">
              Over night
            </div>
            <div>Meetings & conferences</div>
            <div>Parties</div>
          </div>

          <div className="w-1/3 flex justify-end">
            <div className="flex gap-[28px] font-bold text-[15px]">
              <button className="flex items-center gap-[2px]">
                Locations
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <g clip-path="url(#clip0_552_7834)">
                    <path
                      d="M3 5L7 9L11 5"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="square"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_552_7834">
                      <rect width="12" height="12" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <a href="/login" className="flex items-center gap-[2px]">
                Profile
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.33398 0.75C7.5923 0.75 6.86728 0.969934 6.2506 
                                1.38199C5.63391 1.79404 5.15326 2.37971 4.86944 3.06494C4.58561 3.75016 4.51135 4.50416 4.65604 5.23159C4.80073
                                 5.95902 5.15789 6.6272 5.68233 7.15165C6.20678 7.6761 6.87497 8.03325 7.6024 8.17794C8.32982 8.32264 9.08382 
                                 8.24838 9.76905 7.96455C10.4543 7.68072 11.0399 7.20007 11.452 6.58339C11.8641 5.9667 12.084 5.24168 12.084 
                                 4.5C12.084 3.50544 11.6889 2.55161 10.9856 1.84835C10.2824 1.14509 9.32855 0.75 8.33398 0.75ZM6.74299 
                                 2.90901C7.16495 2.48705 7.73725 2.25 8.33398 2.25C8.77899 2.25 9.21401 2.38196 9.58402 2.62919C9.95403 2.87643 10.2424 3.22783 10.4127 3.63896C10.583 
                                4.0501 10.6276 4.5025 10.5408 4.93895C10.4539 5.37541 10.2396 5.77632 9.92497 6.09099C9.61031 6.40566
                                 9.20939 6.61995 8.77294 6.70677C8.33648 6.79358 7.88408 6.74903 7.47295 6.57873C7.06181 6.40843 6.71041
                                 6.12004 6.46318 5.75003C6.21594 5.38002 6.08398 4.94501 6.08398 4.5C6.08398 3.90326 6.32104 3.33097
                                  6.74299 2.90901ZM6.83398 8.75C5.83942 8.75 4.8856 9.14509 4.18233 9.84835C3.47907 10.5516 3.08398 11.5054 3.08398 
                                  12.5V15.25H3.75033H4.58398H12.084H12.917H13.584V12.5C13.584 11.5054 13.1889 10.5516 12.4856 9.84835C11.7824 9.14509
                                   10.8285 8.75 9.83398 8.75H6.83398ZM12.084 13.75V12.5C12.084 12.2045 12.0258 11.9119 11.9127 11.639C11.7996 11.366 11.6339
                                    11.1179 11.425 10.909C11.216 10.7001 10.968 10.5343 10.695 10.4213C10.422 10.3082 10.1295 10.25 9.83398 10.25H6.83398C6.23725 
                                    10.25 5.66495 10.4871 5.24299 10.909C4.82104 11.331 4.58398 11.9033 4.58398 12.5V13.75H12.084Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <button className="flex items-center gap-[2px]">
                Menu
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.6673 3.41602H1.33398V1.91602H14.6673V3.41602ZM14.6673 8.75H1.33398V7.25H14.6673V8.75ZM1.33398 14.084H14.6673V12.584H1.33398V14.084Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-[18px] mb-[12px] ">
          <div
            id="rootContainer"
            className="rounded-full flex w-fit p-[8px] gap-[20px] items-center"
          >
            <div className="flex text-[15px]  items-center justify-center text-center">
              <div onClick={() => handleContainersToggle(1)}>
                <NavbarButton
                  text1={"Hotel"}
                  text2={selectedHotel != null ? selectedHotel.name + " - " + selectedHotel.location : "Choose hotel"}
                  active={showHotelsContainer}
                  isDatePickerLeft={false}
                  isDatePickerRight={false}
                />
              </div>
              <div onClick={() => handleContainersToggle(2)}>
                <NavbarButton
                  text1={"1 room"}
                  text2={"1 adult"}
                  active={showGuestsContainer}
                  isDatePickerLeft={false}
                  isDatePickerRight={false}
                />
              </div>
              <div onClick={() => handleContainersToggle(3)}>
                <NavbarButton
                  text1={"Check-in"}
                  text2={selectedCheckinDate != null ? selectedCheckinDate.getDate() + " " + getMonthName(selectedCheckinDate.getMonth()) : "-"}
                  active={showCalendarPicker}
                  isDatePickerLeft={true}
                  isDatePickerRight={false}
                />
              </div>
              <div onClick={() => handleContainersToggle(3)}>
                <NavbarButton
                  text1={"Check-out"}
                  text2={selectedCheckoutDate != null ? selectedCheckoutDate.getDate() + " " + getMonthName(selectedCheckoutDate.getMonth()) : "-"}
                  active={showCalendarPicker}
                  isDatePickerLeft={false}
                  isDatePickerRight={true}
                />
              </div>
              <div className="justify-center items-center text-center  flex ml-[20px] mr-[87px] cursor-pointer">
                <div className="bg-white rounded-full p-[2px]">
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
                      d="M7.50065 8.49967V13.6663H8.50065V8.49967H13.6673V7.49967H8.50065V2.33301H7.50065V7.49967H2.33398V8.49967H7.50065Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <span className="text-black text-[12px] ml-[10px]">
                  Add promo code
                </span>
              </div>
            </div>

            <div
              onClick={() => handleContainersToggle(4)}
              className="px-[18px] py-[14px] bg-[#AA8D65] rounded-full flex text-white items-center cursor-pointer"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="17" fill="#AA8D65" />
                <circle
                  cx="16"
                  cy="16"
                  r="5.25"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path d="M20 20L24 24" stroke="white" stroke-width="1.5" />
              </svg>
              <span className="mr-[10px]">Search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
