import { ICountry } from "./ICountry";

export const getCountries = (): Promise<ICountry[]> => new Promise((resolve, reject) => {
    console.log('getCountries')
    fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())  // then 메서드는 또 다른 Promise 객체나 어떤 값을 반환할 수 있다. 그리고 이렇게 반환한 Promise 객체나 값은 then메서드를 연달아 호출하여 얻을 수 있다. 이를 then-체인 이라고 한다.
        .then((result: any[]) => {
            console.log('country result: '+ result)
            const countries = result.map((data: any) => {
                const {region, subregion, name, capital, population} = data
                return {region, subregion, name, capital, population} as ICountry
            })
            resolve(countries)
        })
        .catch(reject)
})