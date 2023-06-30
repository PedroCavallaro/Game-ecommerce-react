"use client"
import { Input } from "@/app/components/Input";
import { ReactElement } from "react";
import {FaPix} from "react-icons/fa6"
import {BsFillCreditCardFill, BsFillCreditCard2BackFill} from "react-icons/bs"
import {RiBillFill} from "react-icons/ri"
interface PaymentMethods{
    title: string
    icon: ReactElement
}

const paymentMethods: PaymentMethods[] = [
    {
        title: "Cartão de crédito",
        icon: <BsFillCreditCardFill />
       
    },
    {
        title: "Cartão de Débito",
        icon: <BsFillCreditCard2BackFill />
    },
    {
        title: "PIX",
        icon: <FaPix/>

    },
    {
        title: "Boleto",
        icon: <RiBillFill />
    },
]
export default function PaymentMethod() {
    return(
        <>
        {
            paymentMethods.map((e)=>{
                return(
                <div  key={e.title}
                className="flex justify-center items-center"
                >
                    <label
                    onClick={(e)=>{
                        document.querySelectorAll<HTMLLabelElement>(".payment").forEach((e)=>{
                            e.style.backgroundColor = "white"
                            e.style.color = "black"
                        })

                        e.currentTarget.style.backgroundColor = "black"
                        e.currentTarget.style.color = "white"
                    }}
                    className="flex items-center text-lg cursor-pointer gap-4 border-solid w-[20rem] border-black border-2 p-2 rounded-lg
                    hover:bg-black hover:text-white transition-all payment"
                    htmlFor={e.title}>
                        {e.icon}
                        <Input  
                        name="payment"
                        type="radio"
                        value={e.title}
                        id={e.title}
                        className="hidden"
                        />
                        <p>{e.title}</p>
                    </label>
                </div>
                )
            })
        }  
        </>
        
    )
};
