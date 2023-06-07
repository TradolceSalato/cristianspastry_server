

import { FirebaseFunctions } from '@/firebase/functions';
import { InferGetStaticPropsType } from 'next';
import React from 'react'

function ricette() {
 const res = fetch(`http://localhost:3000/api/recipe`).then((response)=>response.json).then((data)=>console.log(data)) 
 return (
    //<>{fetch(`http://localhost:3000/api/recipe`).then((response)=>response.json).then((data)=>console.log(data))}</>
   <>
    <h1>Ricette!!!</h1>
   </>
  
    )
}

export default ricette;