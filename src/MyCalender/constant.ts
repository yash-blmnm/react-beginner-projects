type daysInMonth = 31 | 30 | 29 | 28;

type EachMonthMap = {
    name: string
    daysPerMonth: daysInMonth;
    leapYearDaysPerMonth?: daysInMonth;
}

const MONTH_MAP:EachMonthMap[] = [
    {
        name: 'January',
        daysPerMonth: 31
    },
    {
        name: 'February',
        daysPerMonth: 28,
        leapYearDaysPerMonth: 29
    },
    {
        name: 'March',
        daysPerMonth: 31
    },
    {
        name: 'April',
        daysPerMonth: 30
    },
    {
        name: 'May',
        daysPerMonth: 31
    },
    {
        name: 'June',
        daysPerMonth: 30
    },
    {
        name: 'July',
        daysPerMonth: 31
    },
    {
        name: 'August',
        daysPerMonth: 31
    },
    {
        name: 'September',
        daysPerMonth: 30
    },
    {
        name: 'October',
        daysPerMonth: 31
    },
    {
        name: 'November',
        daysPerMonth: 30
    },
    {
        name: 'December',
        daysPerMonth: 31
    }
]

const DAYS_MAP = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

const CALENDER_ROWS = 6;
const LEAP_YEAR_MONTH = 2;

export enum ChangeProperty {
    today = 'Today',
    previous = 'Previous',
    nextMonth = 'Next'
}


export {
    MONTH_MAP,
    DAYS_MAP,
    CALENDER_ROWS,
    LEAP_YEAR_MONTH
}
