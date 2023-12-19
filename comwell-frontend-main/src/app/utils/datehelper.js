const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


export function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
export function daysInMonthMap(days){
    let daysarray = []
    for(let i = 1; i <= days; i++){
        daysarray.push(i)
    }
    return daysarray
}
export function dayOfWeek(date){
    var day = date.getDay()
    if(day == 0){
        return 6
    }
    return day - 1;
}
export function dayOfWeekFromDayOfMonth(day, month, year){
    var date = new Date(year, month, day);

    return dayOfWeek(date)
}
export function weekdayMonthStartsOn(year , month){
    var day = new Date(year + "-" + month + "-01").getDay()

    if (day == 0) {
        return 6
    }
    return day - 1;
}
export function dayOfWeekName(day) {
    return weekdays[day];
}
export function getCurrentDate(){
    return new Date();
}
export function getNextMonth(date) {
    var month = date.getMonth()
    return (month + 1) % 12 
}
export function getYearOfNextMonth(date){
    if (date.getMonth() == 11) {
        return date.getFullYear() + 1;
    } else {
        return date.getFullYear();
    }
}
export function getMonthName(month){
    return months[month]
}
export function getDateFromDay(day){
    return new Date(getCurrentDate().getFullYear(), getCurrentDate().getMonth(), day)
}
export function getDateFromDayNextMonth(day){
    return new Date(getYearOfNextMonth(getCurrentDate()), getNextMonth(getCurrentDate()), day)
}   
export function isLastDayOfMonth(day){
    var date = getDateFromDay(day)

    console.log(day)
    console.log(daysInMonth(date.getMonth()-1, date.getFullYear()))
    if(day == daysInMonth(date.getMonth()-1, date.getFullYear())){
        return true;
    }
    return false;
}
export function isLastDayOfNextMonth(day) {
    var date = getDateFromDayNextMonth(day)

    if (day == daysInMonth(getNextMonth(date), getYearOfNextMonth(date))) {
        return true;
    }
    return false;
}