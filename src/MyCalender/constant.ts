type EachMonthMap = {
    name: string
    daysPerMonth: 31 | 30 | 28
    leapYearDaysPerMonth?: 29
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
        name: 'MArch',
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

export {
    MONTH_MAP,
    DAYS_MAP
}