import {db} from "../misc/Firebase"


export function WriteToDatabase(user){
    db.collection("users").doc(user.uid).set({
        uid:user.uid,
        name:user.displayName,
        email:user.email,
        phone:user.phoneNumber,
       
    })
}