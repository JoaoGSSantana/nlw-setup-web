import dayjs from "dayjs";

export function generateDateFromYearsBeginning() {

    const firstDayOfYear = dayjs().startOf('year');
    const today = new Date();

    let compareDate = firstDayOfYear;

    const dates = [];

    while(compareDate.isBefore(today)) {
        dates.push(compareDate.toDate());
        compareDate= compareDate.add(1, 'day');
    }

    return dates;
}