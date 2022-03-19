import React, { createContext, FC, useContext } from "react"

export type ToggleThemeContextType = {
    //공유하려는 데이터 속성
    toggleTheme: () => void
}

const defaultToggleThemeContext = {
    // 공유하려는 데이터 속성 초기값
    toggleTheme: () => {}
}

const ToggleThemeContext = createContext<ToggleThemeContextType> (
    defaultToggleThemeContext
)

type ToggleThemeContextProps = {
    toggleTheme: () => void
}
export const ToggleThemeProvider: FC<ToggleThemeContextProps> = ({
    children,
    toggleTheme
}) => {
    const value = {
        toggleTheme
    }
    return(
    <ToggleThemeContext.Provider value={value}>
        {children}
    </ToggleThemeContext.Provider>)
}

export const useToggleTheme = () => {
    const {toggleTheme} = useContext(ToggleThemeContext)
    return toggleTheme
}