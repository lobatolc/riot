import axios from "axios";

export async function GetGitHub(){
    let url = "https://api.github.com/users/lobatolc"

    return await axios
    .get(url)
    .then((res) => {
        return res
    })
    .catch((e) => {
        console.log(e)
    })
}