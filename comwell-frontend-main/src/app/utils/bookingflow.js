let booking = {
    hotel : null,
    guests : null,
    checkin: null,
    checkout: null,
    room: null,
}


export function setHotel(iHotel){
    booking.hotel = iHotel
    console.log(booking.hotel)
}
export function setGuests(iGuests) {
    booking.guests = iGuests
}
export function setCheckin(iCheckin) {
    booking.checkin = iCheckin
}
export function setCheckout(iCheckout) {
    booking.checkout = iCheckout
}
export function setRoom(IRoom) {
    booking.room = IRoom
}
export function sendBooking(){

}