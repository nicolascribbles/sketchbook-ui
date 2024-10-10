export type Star = [number, number, boolean?, boolean?];
export const stars: Array<Star> = [
    // Existing stars...
    [4, 4, true, true],
    [4, 44, true],
    [36, 22],
    [50, 146, true, true],
    [64, 43, true, true],
    [76, 30, true],
    [101, 116],
    [140, 36, true],
    [149, 134],
    [162, 74, true],
    [171, 96, true, true],
    [210, 56, true, true],
    [235, 90],
    [275, 82, true, true],
    [306, 6],
    [307, 64, true, true],
    [380, 68, true],
    [380, 108, true, true],
    [391, 148, true, true],
    [405, 18, true],
    [412, 86, true, true],
    [426, 210, true, true],
    [427, 56, true, true],
    [538, 138],
    [563, 88, true, true],
    [611, 154, true, true],
    [637, 150],
    [651, 146, true],
    [682, 70, true, true],
    [683, 128],
    [781, 82, true, true],
    [785, 158, true],
    [832, 146, true, true],
    [852, 89],
    // Add stars for the constellation vertices
    [246, 102], // Star for the first vertex
    [261, 86],  // Star for the second vertex
    [307, 104], // Star for the third vertex
    [357, 36],  // Star for the fourth vertex
    // New stars for the new constellations
    [100, 50],  // Star for new constellation 1
    [150, 60],  // Star for new constellation 1
    [200, 50],  // Star for new constellation 1
    [300, 130], // Star for new constellation 2
    [320, 180], // Star for new constellation 2
    [340, 160], // Star for new constellation 2
    [360, 150], // Star for new constellation 2
];

export const constellations: Array<Array<[number, number]>> = [
    [
        [246, 102],
        [261, 86],
        [307, 104],
        [357, 36],
    ],
    [
        [586, 120],
        [516, 100],
        [491, 62],
        [440, 107],
        [477, 180],
        [516, 100],
    ],
    [
        [733, 99],
        [803, 120],
        [879, 113],
        [823, 164],
        [803, 120],
    ],
    // New constellation with 2 lines
    [
        [100, 50],  // Corresponds to a star
        [150, 60],  // Corresponds to a star
    ],
    // New constellation with 3 lines
    [
        [300, 130], // Corresponds to a star
        [320, 180], // Corresponds to a star
        [340, 160], // Corresponds to a star
    ],
];
