import { IPerson } from "./IPerson";
import * as U from './util'
import * as F from './faker'
import moment from "moment";

export const createRandomPerson = ():IPerson => {
    const name = F.randomName()
    return {
        id: F.randomId(),
        createdDate: F.randomDate(),
        modifiedDate: new Date,
        name,
        email: F.randomEmail(),
        avatar: F.randomAvatarUrl(name),
        image: F.randomImage(),
        comments: F.randomParagraphs(4),
        counts: {
            comment: U.random(10, 100),
            retweet: U.random(10, 100),
            heart: U.random(100, 1000)
        }
    }
}