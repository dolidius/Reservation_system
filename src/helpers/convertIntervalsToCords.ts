import ICords from "../interfaces/ICords";
import IInterval from "../interfaces/IInterval";

const convertIntervalsToCords = (intervals: IInterval[]) => {
    const cords: ICords[] = [];

    intervals.forEach((interval) => {
        for (let i = interval.startY; i <= interval.endY; i++) {
            cords.push({ x: interval.row, y: i });
        }
    });

    return cords;
};

export default convertIntervalsToCords;