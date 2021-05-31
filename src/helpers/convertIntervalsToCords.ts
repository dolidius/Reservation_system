import ICords from "../interfaces/ICords";
import IInterval from "../interfaces/IInterval";

export default (intervals: IInterval[]) => {
    const cords: ICords[] = [];

    intervals.forEach((interval) => {
        for (let i = interval.startY; i <= interval.endY; i++) {
            cords.push({ x: interval.row, y: i });
        }
    });

    console.log(cords);

    return cords;
};
