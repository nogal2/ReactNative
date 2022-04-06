import axios from "axios";
import { address } from "../../project.config";
import { MyFavoriteRecipeProps } from "./myFavorite";

export const getMyFavoriteRecipeDatas = (memberId:string):Promise<MyFavoriteRecipeProps[]> => new Promise((resolve, reject) => {
    console.log('getMyFavoriteRecipeDatas')
    axios.get(address+"myFavoriteRecipe", { params: { memberId: memberId } })
            .then(async (response) => {
                await resolve(response.data)
                console.log(response.data)
            })
            .catch((err:Error) => {
                console.log(err)
            })
            .catch(reject)

})