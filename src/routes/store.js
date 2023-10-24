import { writable } from 'svelte/store';

export const isDarkMode = writable(false);
export const screenSize = writable(0);