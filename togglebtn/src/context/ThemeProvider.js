import React, { useContext } from 'react';

export const  Theme = React.createContext({
    themeMode:"light",
    lighttheme:()=>{},
    darktheme:()=>{},
})
export const  ThemeProvider=Theme.Provider;


export default function useTheme(){
    return useContext(Theme);
}
