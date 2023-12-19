
`use client`

import { getDateFromDay, getDateFromDayNextMonth, isLastDayOfNextMonth } from "../../utils/datehelper"
import { SelectionDateEnd, SelectionDateEndRow, SelectionDateGrey, SelectionDateMiddle, SelectionDateMiddleEndRow, SelectionDateMiddleStartRow, SelectionDateNormal, SelectionDateStart, SelectionDateStartRow } from "./selectiondate"
import { getCurrentDate, getNextMonth, daysInMonth, dayOfWeek, getMonthName, daysInMonthMap, dayOfWeekFromDayOfMonth, weekdayMonthStartsOn, getYearOfNextMonth, isLastDayOfMonth } from "@/app/utils/datehelper"


export function CalendarPicker({ selectedCheckinDate, onSelectCheckinDate, selectedCheckoutDate, onSelectCheckoutDate }) {

    let days = []
    days = daysInMonthMap(daysInMonth(getCurrentDate().getMonth() - 1, getCurrentDate().getFullYear()))
    const handleSelectDate = (date) => {
        if (selectedCheckinDate == null) {
            onSelectCheckinDate(date);
            return;
        }
        else if (date.getTime() == selectedCheckinDate.getTime()){
            onSelectCheckinDate(null)
            onSelectCheckoutDate(null)
            return
        }
        if (selectedCheckoutDate == null) {
            if (date.getTime() > selectedCheckinDate.getTime()) {
                onSelectCheckoutDate(date);
                return;
            }
            else {
                onSelectCheckinDate(date);
                return;
            }
        }
        else if (date.getTime() == selectedCheckoutDate.getTime()) {
            onSelectCheckoutDate(null)
            return
        }

        if (date.getTime() < selectedCheckinDate.getTime()) {
            onSelectCheckinDate(date);
            return;
        }
        if (date.getTime() > selectedCheckinDate.getTime()) {
            onSelectCheckoutDate(date);
            return;
        }
    };
    function RenderSelectionDates(day){
        if ((selectedCheckinDate?.getTime() == getDateFromDay(day).getTime())){
            if ((dayOfWeek(getDateFromDay(day)) == 6) || day == 31){
                return <SelectionDateStartRow day={day} />
            }
            else if(selectedCheckoutDate != null) {
                return <SelectionDateStart day={day} />
            }
            else{
                return <SelectionDateStartRow day={day} />
            }
        }
        if ((selectedCheckoutDate?.getTime() == getDateFromDay(day).getTime())) {
            if ((dayOfWeek(getDateFromDay(day)) != 0 || day == 1) ) {
                return <SelectionDateEnd day={day} />
            }
            else {
                return <SelectionDateEndRow day={day} />
            }
        }
        if (getDateFromDay(day).getTime() > selectedCheckinDate?.getTime() && getDateFromDay(day).getTime() < selectedCheckoutDate?.getTime()){
            if ((dayOfWeek(getDateFromDay(day)) == 6) || isLastDayOfMonth(day)) {
                return <SelectionDateMiddleEndRow day={day} />
            }
            else if ((dayOfWeek(getDateFromDay(day)) == 0) || day == 1) {
                return <SelectionDateMiddleStartRow day={day} />
            }
            else{
                return <SelectionDateMiddle day={day}></SelectionDateMiddle>
            }
        }
        return <SelectionDateNormal day={day}></SelectionDateNormal>
    }
    function RenderSelectionDatesNextMonth(day) {
        if ((selectedCheckinDate?.getTime() == getDateFromDayNextMonth(day).getTime())) {
            if ((dayOfWeek(getDateFromDayNextMonth(day)) == 6)) {
                return <SelectionDateStartRow day={day} />
            }
            else if (selectedCheckoutDate != null) {
                return <SelectionDateStart day={day} />
            }
            else {
                return <SelectionDateStartRow day={day} />
            }
        }
        if ((selectedCheckoutDate?.getTime() == getDateFromDayNextMonth(day).getTime())) {
            if ((dayOfWeek(getDateFromDayNextMonth(day)) == 0) || day == 1 ) {
                return <SelectionDateEndRow day={day} />
            }
            else {
                return <SelectionDateEnd day={day} />
            }
        }
        if (getDateFromDayNextMonth(day).getTime() > selectedCheckinDate?.getTime() && getDateFromDayNextMonth(day).getTime() < selectedCheckoutDate?.getTime()) {
            if ((dayOfWeek(getDateFromDayNextMonth(day)) == 6) || isLastDayOfNextMonth(day)) {
                return <SelectionDateMiddleEndRow day={day} />
            }
            else if ((dayOfWeek(getDateFromDayNextMonth(day)) == 0) || day == 1) {
                return <SelectionDateMiddleStartRow day={day} />
            }
            else {
                return <SelectionDateMiddle day={day}></SelectionDateMiddle>
            }
        }
        return <SelectionDateNormal day={day}></SelectionDateNormal>
    }

    return (
        <div className="absolute  z-40 w-full flex justify-center h-screen ">
            <div className="absolute bg-black opacity-40 w-full h-full"></div>
            <div className="absolute  bg-white rounded-[20px]  w-[848px] h-fit top-[200px] flex flex-col font-bold container-element">
                <div className="flex w-full justify-around items-center p-[16px] pb-[40px] relative gap-[38px] px-[44px]">
                    <div className="absolute left-[16px] top-[16px] flex justify-start">
                        <div className="bg-[#F0EAE2] opacity-30 rounded-full p-[8px] w-fit">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.36001 10.5826L14.5838 4.35882L13.641 3.41602L6.53148 10.5255L13.6125 18.5507L14.6123 17.6686L8.36001 10.5826Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute right-[16px] top-[16px] flex justify-end">
                        <div className="bg-[#F0EAE2] rounded-full p-[8px] w-fit">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4758 9.6103L6.64096 3.77549L7.52485 2.8916L14.19 9.55678L7.55156 17.0804L6.61426 16.2534L12.4758 9.6103Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[2px] absolute top-[64px] w-full bg-[#E0E0E0]"></div>

                    <div className="flex flex-col">
                        <span className="flex justify-center">{getMonthName(getCurrentDate().getMonth())}</span>
                        <div className="grid grid-cols-7 grid-rows-5 mt-[24px] h-fit  items-center justify-items-center">
                            <span className="mt-[15px] mb-[24px] text-[12px]" >M</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >T</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >W</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >T</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >F</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >S</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >S</span>
                            {
                                [...Array(dayOfWeekFromDayOfMonth(1, getCurrentDate().getMonth(), getCurrentDate().getFullYear()))].map(x => (
                                    <div></div>
                                ))
                            }
                            {
                                daysInMonthMap(daysInMonth(getCurrentDate().getMonth() - 1, getCurrentDate().getFullYear())).map(day => (
                                    (day < getCurrentDate().getDate()) ?
                                        <SelectionDateGrey
                                            day={day}
                                        /> :
                                        <div onClick={() => handleSelectDate(getDateFromDay(day))}>
                                            {RenderSelectionDates(day)}
                                        </div>
                                ))}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="flex justify-center">{getMonthName(getNextMonth(getCurrentDate()))}</span>

                        <div className="grid grid-cols-7 grid-rows-5 mt-[24px] h-fit  items-center justify-items-center">
                            <span className="mt-[15px] mb-[24px] text-[12px]" >M</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >T</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >W</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >T</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >F</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >S</span>
                            <span className="mt-[15px] mb-[24px] text-[12px]" >S</span>
                            {
                                [...Array(dayOfWeekFromDayOfMonth(1, getNextMonth(getCurrentDate()), getYearOfNextMonth(getCurrentDate())))].map(x => (
                                    <div></div>
                                ))
                            }
                            {
                                daysInMonthMap(daysInMonth(getNextMonth(getCurrentDate()) - 1, getYearOfNextMonth(getCurrentDate()))).map(day => (
                                    <div onClick={() => handleSelectDate(getDateFromDayNextMonth(day))}>
                                        { RenderSelectionDatesNextMonth(day) }
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}