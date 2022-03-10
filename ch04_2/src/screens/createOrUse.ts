const cache: Record<string, any> = {}
// Record 타입은 cache[key] 형태 코드를 컴파일 오류 없이 실행하게 해주며 Record는 Record<키_타입, 값_타입> 형태로 사용하는 제네릭 타입이다.
// cache의 키 타입은 string, 값 타입은 any 이다.

export const createOrUse = <T>(key: string, callback: () => T) => {
    if(!cache[key])
        cache[key] = callback()
    return cache[key]
    // cache[key]에 값이 있으면 그 값을, 없으면 callback을 호출하여 cache[key] 에 값을 저장하고 이 값을 반환하는 것으로,
    // 캐시를 구현하는 전형적인 방법이다.
}