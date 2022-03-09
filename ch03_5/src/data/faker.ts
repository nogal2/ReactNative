import * as U from './util'
export const randomId = (): string => uuid()
export const randomName = (): string => uuid()
export const randomEmail = (): string => uuEmail()
export const randomAvatarUrl = (name?:string): string => U.avatarUriByName(name ?? randomName())
export const randomDate = (): Date => currentDate()
export const randomParagraphs = (count: number=2):string => U.makeArray(count).map(rContent).join('\n')
export const randomImage = ():string => U.unsplashUrl(U.random(800, 1000), U.random(800,1000))


const rContent = () => [
    '중앙선거관리위원회는 9일 오후 4시 현재 20대 대통령선거 투표율이 71.1%로 집계됐다고 밝혔다. 같은 시각 지난 19대 대선 투표율 67.1%보다 4%포인트 높은 수치다.'
]

function uuid() {
    return Math.random().toString(36).slice(2)
}

function uuEmail() {
    const email = `${Math.random().toString(36).slice(2)}@${Math.random().toString(36).slice(2)}.com`
    return email
}

function currentDate() {
    return new Date()
}

