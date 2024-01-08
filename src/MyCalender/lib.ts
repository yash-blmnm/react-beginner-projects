import { CALENDER_ROWS, DAYS_MAP, LEAP_YEAR_MONTH, MONTH_MAP } from "./constant";

const getFullCalenderArray = (currentMonth: number, currentYear: number) => {
    let newDate = new Date(`${currentMonth}/1/${currentYear}`)
    let date = newDate.getDate();
    let day = newDate.getDay()
    let year = newDate.getFullYear();
    let month = currentMonth;
    let daysInCurrentMonth = MONTH_MAP[month - 1].daysPerMonth;
    if((year % 4 === 0) && currentMonth === LEAP_YEAR_MONTH) {
        daysInCurrentMonth = MONTH_MAP[month - 1]?.leapYearDaysPerMonth || daysInCurrentMonth;
    }
    let prevMonth = month > 1 ? month - 1 : (MONTH_MAP.length);

    let arr:Date[] = [new Date(`${month}/${date}/${year}`), 
    ...Array(day).fill(0).map((val, index) => {
        date = date - 1;
        if(date <= 0) {
            date = MONTH_MAP[prevMonth - 1].daysPerMonth;
            if((year % 4 === 0) && prevMonth === LEAP_YEAR_MONTH) {
                date = MONTH_MAP[prevMonth - 1]?.leapYearDaysPerMonth || date;
            }
            month = prevMonth;
            year = (prevMonth === MONTH_MAP.length) ? year - 1 : year;
            return new Date(`${month}/${date}/${year}`)
        }
        return new Date(`${month}/${date}/${year}`);
    })]
    let numberOfCellsRemaining = (CALENDER_ROWS * DAYS_MAP.length) - arr.length;
    month = currentMonth;
    year = newDate.getFullYear();
    arr.reverse().push(...Array(numberOfCellsRemaining).fill(0).map((val, i) => {
        let newVal = i + (arr.length ? arr[arr.length - 1].getDate() : 0) + 1;
        if(newVal > daysInCurrentMonth) {
            let nextMonth = month === MONTH_MAP.length ? 1 : month + 1;
            let value = new Date(`${nextMonth}/${newVal - daysInCurrentMonth}/${month === MONTH_MAP.length ? year + 1 : year}`);
            return value;
        }
        return new Date(`${month}/${newVal}/${currentYear}`);
    }))
    let fullCalenderArray = arr.reduce((acc:Date[][], val:Date) => {
        if(!acc?.length || acc[acc?.length -1]?.length === DAYS_MAP.length) {
            acc.push([val])
        }else {
            acc[acc?.length -1]?.push(val)
        }
        return acc;
    },[])
    return fullCalenderArray;
}

export {
    getFullCalenderArray
}