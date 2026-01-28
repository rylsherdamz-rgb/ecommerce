import React, {createContext, useState} from "react"
import type {CardItemComponentProp} from "@/constants/ProductContext"

interface productContextType = {
  Product : CardItemComponentProp
  setProduct : React.Dispatch<React.SetStateAction<CardItemComponentProp>>
}

const ProductContext = createContext<CardItemComponentProp | undefined>(undefined)
// this could be use in the checkout for switching page and mnay more
export default function ProductContextProvider({children} : {children : React.ReactNode}) {

  return <ProductConctext.Provider valu={{}}>

  </ProductConctext.Provider>
}
