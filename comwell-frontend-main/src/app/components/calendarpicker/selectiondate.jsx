export function SelectionDateGrey({day}) {
    return (
        <div className="items-center align-middle text-center justify-center flex rounded-full opacity-40 p-[8px] h-[49px] w-[49px]">
            <span className="absolute text-[15px]">{day}</span>
        </div>
    )
}
export function SelectionDateNormal({day}) {
    return (
        <div className="items-center cursor-pointer align-middle text-center justify-center flex rounded-full p-[8px] h-[49px] w-[49px]">
            <span className="absolute text-[15px]">{day}</span>
        </div>
    )
}

export function SelectionDateStart({day}){
    return(
        <div className="relative items-center cursor-pointer align-middle text-center justify-center flex rounded-l-full  bg-[#F0EAE2] text-white p-[8px] h-[49px] w-[49px] z-40">
            <span className="absolute rounded-full p-[8px] h-[49px] w-[49px] bg-[#AA8D65] z-10"></span>
            <span className="absolute text-[15px] z-40">{day}</span>
        </div>
    )
}
export function SelectionDateStartRow({day}) {
    return (
        <div className="items-center cursor-pointer align-middle text-center justify-center flex rounded-full bg-[#AA8D65] text-white  p-[8px] h-[49px] w-[49px]">
            <span className="absolute text-[15px]">{day}</span>
        </div>
    )
}
export function SelectionDateEnd({day}) {
    return (
        <div className="relative items-center cursor-pointer align-middle text-center justify-center flex rounded-r-full  bg-[#F0EAE2] text-white p-[8px] h-[49px] w-[49px] z-40">
            <span className="absolute rounded-full p-[8px] h-[49px] w-[49px] bg-[#AA8D65] z-10"></span>
            <span className="absolute text-[15px] z-40">{day}</span>
        </div>
    )
}
export function SelectionDateEndRow({day}) {
    return (
        <div className="items-center cursor-pointer align-middle text-center justify-center flex rounded-full bg-[#AA8D65] text-white  p-[8px] h-[49px] w-[49px]">
            <span className="absolute text-[15px]">{day}</span>
        </div>
    )
}
export function SelectionDateMiddleStartRow({ day }) {
    return (
        <div className="relative items-center cursor-pointer align-middle text-center justify-center flex  rounded-l-full bg-[#F0EAE2]  p-[8px] h-[49px] w-[49px] z-40">
            <span className="absolute text-[15px] z-40">{day} </span>
        </div>
    )
}
export function SelectionDateMiddle({day}) {
    return (
        <div className="relative items-center cursor-pointer align-middle text-center justify-center flex   bg-[#F0EAE2]  p-[8px] h-[49px] w-[49px] z-40">
            <span className="absolute text-[15px] z-40">{day}</span>
        </div>
    )
}
export function SelectionDateMiddleEndRow({ day }) {
    return (
        <div className="relative items-center cursor-pointer align-middle text-center justify-center flex rounded-r-full  bg-[#F0EAE2]  p-[8px] h-[49px] w-[49px] z-40">
            <span className="absolute text-[15px] z-40">{day}</span>
        </div>
    )
}