import {auth} from "../../misc/Firebase"

export async function signUpFunc (){

    const Name=document.querySelector("#name").value
    const Email=document.querySelector("#email").value
    const Password=document.querySelector("#password").value
    const Phone=document.querySelector("#phoneNo").value
    const ClgName=document.querySelector("#clgName").value
    // console.log(Name,Email,Password,Phone,ClgName)
    try {
        const result =await auth.createUserWithEmailAndPassword(Email,Password)
        console.log(result)
        await result.user.updateProfile({
            Displayname:{Name}
        })
        // await result.user.sendEmailVerification()

        
    } catch (error) {
        console.log(error.message)
    }
}