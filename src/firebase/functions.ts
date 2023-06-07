import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { DataSnapshot, onValue, ref, remove, set } from "firebase/database";
import { addDoc, collection, doc, DocumentReference, getDocs, updateDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from 'next'
import { uid } from "uid";
import { Db,Auth } from './config'

export class FirebaseFunctions {
    Login(email: string, password: string) {
        return signInWithEmailAndPassword(Auth, email, password)
    }
    Logout(setUser: any) { }

   async WriteDbRecipe(ricetta: any,req: NextApiRequest,
    res: NextApiResponse) {
       
     try {
        await addDoc(collection(Db,"ricette",),{
                ricetta
            })
            console.log("Ricetta aggiunta");
            res.status(200).end("Ricetta aggiunta")
     } catch (e) {
        console.log(e);
     }
    }

   async ReadDbRecipe(req: NextApiRequest,
        res: NextApiResponse) { 
      await getDocs(collection(Db,"ricette")).then((querySnapshot)=>{
        const newData = querySnapshot.docs
        .map((doc)=>({...doc.data(),id:doc.id}));
        console.log(newData);
        res.status(200).json(newData)
      })
    }

   async UpDateDbRecipe(req: NextApiRequest,
    res: NextApiResponse) { 
       try {
         const refRecipe = doc(Db,"ricette","ricetta","TitoloRicetta");
         await updateDoc(refRecipe,{
            TitoloRicetta : "CAZZO CAMBOGGIA"
         }) 
         console.log("RICETTA MODIFICATA")
         res.status(200).end("Ricetta aggiornata")
       } catch (e){
          console.log(e)
       }
    }

    DeleteDbRecipe(ricetta : any) { 
        return  console.log("Ricetta eliminata")
    }

}
/*
const Login = (email:string,password:string) => {
    return signInWithEmailAndPassword(Auth,email,password)
}

const Logout = async (setUser:any) => {
    setUser(null)
    await signOut(Auth)
}

export {
    Login,
    Logout
}*/