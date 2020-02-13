/**
 *  lazeez.js
 *  copyright (c) 2020 dearoneesama
 *  licensed under MIT
 */

import Open from 'open';

export async function goToLazeez(): Promise<void> {
    await Open('https://www.google.ca/maps/search/lazeez/');
}
