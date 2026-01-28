import React, {createContext, useState} from "react"
import type {CardItemComponentProp} from "@/constants/ProductContext"


const ProductContext = createContext<CardItemComponentProp | undefined>(undefined)
// this could be use in the checkout for switching page and mnay more
export default function ProductContextProvider({children} : {children : React.ReactNode}) {

}
