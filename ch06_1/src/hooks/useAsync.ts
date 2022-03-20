import { useCallback, useEffect, useState } from "react"


export const useAsync = <T>(asyncCallback: () => Promise<T>, deps:any[] =[]): [Error | null, () => void] => {
    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        asyncCallback().catch(setError)
    }, deps)
    const resetError = useCallback(() => setError((notUsed) => null), [])
    return [error, resetError] 
}
// Promise는 무조건 하나는 반환하고, 또한 에러가 날 경우 에러도 반환한다. 
//그래서 에러가 날 가능성이 있으므로 Error | null과 함께 정상적인 반환값 () => void 를 반환값으로 한 것이다.