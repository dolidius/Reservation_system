import IInterval from "../interfaces/IInterval";
import ISeat from "../interfaces/ISeat";

const getRowIntervals = (seats: ISeat[]) => {
 
    const intervals: IInterval[] = [];

    // x(row) y(column)
    let startY = -1;
    let endY = -1;
    let lastX = -1;
    let lastY = -1;

    seats.forEach((seat: ISeat) => {

        const { x, y } = seat.cords;

        if (startY === -1) {

            if (!seat.reserved) {
                startY = y;
            }

        } else if (x > lastX || y - 1 !== lastY ||seat.reserved) {
            endY = lastY;
            intervals.push({
                startY, endY, row: x > lastX ? lastX : x
            });

            if (seat.reserved) {
                startY = -1;
            } else {
                startY = y;
            }

        } else if (seats[seats.length - 1] === seat && !seat.reserved) {
            intervals.push({
                startY, endY: y, row: x
            })

        }

        lastX = x;
        lastY = y;

    });

    intervals.sort((int1: IInterval, int2: IInterval) => (
        (int1.endY - int1.startY) + 1 < (int2.endY - int2.startY) + 1 ? 1 : -1
    ));

    return intervals;
    
}

export default getRowIntervals;