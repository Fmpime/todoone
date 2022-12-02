import dayjs from "dayjs";
import {DateDestruct} from "./DateDestruct";


export const InvalidDataReport = (value:string) => {
    let dateNow = dayjs().format('YYYY-MM-DDThh:mm')
    //value date
    const InputArray=DateDestruct(value)
    //dateNow date
    const dateNowAr = DateDestruct(dateNow)
    if (dateNowAr.Year < InputArray.Year) {
        return true
    } else if (InputArray.Year === dateNowAr.Year && InputArray.Month < dateNowAr.Month) {
        return true
    } else if (InputArray.Year === dateNowAr.Year && InputArray.Month === dateNowAr.Month && InputArray.Day < dateNowAr.Day) {
        return true
    } else if (InputArray.Year === dateNowAr.Year && InputArray.Month === dateNowAr.Month && InputArray.Day === dateNowAr.Day && InputArray.H < dateNowAr.H) {
        return true
    } else if (InputArray.Year === dateNowAr.Year && InputArray.Month === dateNowAr.Month && InputArray.Day === dateNowAr.Day && InputArray.H === dateNowAr.H && InputArray.M < dateNowAr.M) {
        return true
    } else return false
}

export default InvalidDataReport;