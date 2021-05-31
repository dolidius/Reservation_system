import getRowsIntervals from "../../helpers/getRowsIntervals";

import convertIntervalsToCords from "../../helpers/convertIntervalsToCords";

import { seats } from "../../mock_data";
import IInterval from "../../interfaces/IInterval";
import ICords from "../../interfaces/ICords";

describe("getRowsIntervals", () => {
    it("should get intervals for each row from seats array", () => {
        const intervals: IInterval[] = getRowsIntervals(seats);

        const expectedIntervals = [
            { startY: 11, endY: 14, row: 0 },
            { startY: 2, endY: 4, row: 0 },
            { startY: 2, endY: 3, row: 1 },
            { startY: 6, endY: 7, row: 0 },
        ];

        expect(intervals).toStrictEqual(expectedIntervals);
    });
});

describe("convertIntervalsToCords", () => {
    it("should convert interval to coordinates", () => {
        const intervals: IInterval[] = getRowsIntervals(seats);

        const coords: ICords[] = convertIntervalsToCords(intervals);

        const expectedCoords = [
            { x: 0, y: 11 },
            { x: 0, y: 12 },
            { x: 0, y: 13 },
            { x: 0, y: 14 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 0, y: 4 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 0, y: 6 },
            { x: 0, y: 7 },
        ];

        expect(coords).toStrictEqual(expectedCoords);

    });
});
