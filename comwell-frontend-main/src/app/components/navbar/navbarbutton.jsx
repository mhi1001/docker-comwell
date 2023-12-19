export function NavbarButton({text1, text2, active, isDatePickerLeft, isDatePickerRight}){
    
    return(
        <div className={` ${active ? `${isDatePickerLeft? "rounded-l-full" : (isDatePickerRight? "rounded-r-full" : "rounded-full")} bg-white pr-[91px]` : ""} py-[12px] px-[20px]  flex cursor-pointer justify-between items-center`}>
            <div className="flex flex-col justify-start items-start text-center">
                <span className={`${active ? "text-blac" : "text-gray-500"}`}>{text1}</span>
                <span className="text-[15px] font-bold block">{text2}</span>
            </div>
            {
                !active ? (
                <div className="pl-[71px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="29" viewBox="0 0 2 29" fill="none">
                        <path opacity="0.15" d="M1 0V29" stroke="black" />
                    </svg>
                </div>
                ):(<div></div>)
            }
            
        </div>
    )
}