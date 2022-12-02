export const DateDestruct = (value: string) => {
    type NewTimeType = {
        Year:string,
        Month:string,
        Day:string,
        H:string,
        M:string
    }
    const NewTime:NewTimeType= {
        Year: "",
        Month: "",
        Day: "",
        H: "",
        M: ""
    }
    let DateAndTime = value.split('T');
    let Date = DateAndTime[0].split('-');
    NewTime.Year = Date[0];
    NewTime.Month = Date[1];
    NewTime.Day = Date[2];
    let Time = DateAndTime[1].split(':');
    NewTime.H = Time[0]
    NewTime.M = Time[1]
    return NewTime;
};
export const MonthMath = (a: number) => {
    switch (a) {
        case 1 | 3 | 5 | 7 | 8 | 10 | 12: {
            return 31
        }
        case 4 | 6 | 8 | 9 |11: {
            return 30
        }
        case 2: {
            return 28
        }
        default:{
            return null
        }

    }

}
const getTimeRemaining = (e:string) => {
    const total = Date.parse(e) - Date.parse(`${new Date()}`);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / 1000 / 60 / 60 / 24)
    return {
        total, hours, minutes, seconds,days
    };
}

export const TotalHour = (deadLine: string,setter: ((arg0: boolean) => void)):string => {
    if (deadLine===null){
        return "No time Limit"
    }
    let a = getTimeRemaining(deadLine)
    if (a.seconds<0&&a.hours<0&&a.minutes<0){
        setter(true)
    }
    return `${a.days}Day:${a.hours}h:${a.minutes}m:${a.seconds}s`}