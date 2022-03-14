import { useCallback, useState } from "react"


export const useToggle = (initialValue: boolean=false, deps: any[] = []): [boolean, ()=>void] => {
    const [value, setValue] = useState(initialValue)
    console.log(`useToggle initialValue: ${initialValue} value:${value}`)
    const toggleValue = useCallback(() => setValue((value) => !value), deps)
    console.log(`value ${value}`)
    return [value, toggleValue]
}