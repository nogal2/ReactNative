import AsyncStorage from '@react-native-async-storage/async-storage'

export const writeToStorage = (key:string, value: string) => new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, value).then(resolve).catch(reject)
})

export const readFromStorage = (key:string) => new Promise<string>((resolve, reject) => {
    AsyncStorage.getItem(key)
        .then((value) => {  // null 이 아니라 항상 string으로 반환
            if(value && value.length > 0) {
                resolve(value)
            } else resolve('')
        })
        .catch(reject)
})