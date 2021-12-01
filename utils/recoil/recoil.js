import { atom, selector } from "recoil";

export const darkModeState = atom({
    key: "darkModeState",
    default: false
});

export const handleDarkMode = selector({
    key: "darkModeToogle",
    set: ({ get, set }) => {
        const currentValue = get(darkModeState);
        set(darkModeState, !currentValue);
    },
    get: () => { }
});