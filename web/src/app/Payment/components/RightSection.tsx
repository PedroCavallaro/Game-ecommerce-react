"use client"
import {Input} from "@/app/components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Label from "../../components/Label"
import axios from "axios"
import { Product } from "@/app/components/Card"
import { retrieveUserId } from "@/app/lib/globals"
import { api } from "@/app/lib/api"
import { Toast } from "@/app/lib/swall"


const schema  = z.object({
    address: z.string().min(4, {
        message:"O endereço precisa ser maior"
    }),
    cep: z.coerce.number({
        invalid_type_error: "Apenas numeros"
    }).min(8,{
        message: "O cep dever ter 8 caracteres"
    }),
    uf: z.string({
        invalid_type_error:"Somente letras"
    }).max(2, {
        message:"Só é aceito 2 caracteres"
    }),
    neighborhood: z.string().min(4, {
        message:"O nome do bairro precisa ser maior"
    }),
    city: z.string().min(4,{
        message:"O nome da cidade precisa ser maior"
    }),
    number: z.coerce.number().min(2)    
})

async function getAddressInfo(data: any){
    for(const key in data){
        if(document.getElementById(`${key}`) ){
            let field: any  = document.getElementById(`${key}`)
            field!.value = data[key]
        
        }
    }
}

async function SendInfo(){
    let productsArray: Product[] = []

    productsArray = JSON.parse(localStorage.getItem("cart") || "{}")


    let productsId: string[] = []
    let sum: number = 0
    productsArray.map((e: Product)=>{
        productsId.push(e.id)
        sum += (e.value * e.qtd)
    })
    await api.post("/buys",{
        id: retrieveUserId(),
        products: productsId,
        total: sum
    })

}
type FormData = z.infer<typeof schema>


export default function RightSection() {
    const {
        handleSubmit,
        register,
        formState: { errors }

    } = useForm<FormData>({
        mode:"onBlur",
        resolver: zodResolver(schema)
    })
    const router = useRouter()

    return(
        <>
        <h2 className="text-black text-center text-2xl p-2">Informações para entrega</h2> 
        <form onSubmit={handleSubmit(async ()=> {    
            let arr: any[] = []
            arr = JSON.parse(localStorage.getItem("cart") || "{}")
           
            if(!arr.length){
            Toast.fire({
                icon:"error",
                title:"Não há itens em seu carrinho"
            })
            return false
               
           }
           else if(document.querySelectorAll("input[type='radio']:checked").length === 0){
            Toast.fire({
                icon:"error",
                title:"Selecione o método de pagamento"
                
            })
            return false

           }

            SendInfo()
            localStorage.removeItem("cart") 
            localStorage.setItem("page", JSON.stringify("Buys")) 
            router.push("/Buys")          
         
        })}
          
            className="flex flex-col justify-start ml-9"
        > 
      
        <div 
        className="flex flex-col"
        >
            <Label 
            htmlFor="cep"
            title="Cep"
            >
                <Input
                {...register("cep")}
                onBlur={ async (e)=>{
                    await axios.get(`https://viacep.com.br/ws/${e.currentTarget.value}/json/`)
                            .then(({data}) => getAddressInfo(data))
                            .catch((err)=> console.log(err))
                }}

                id="Cep"
                className="text-white bg-black w-[6rem] h-[2.5rem] p-2"
                type="text"
                placeholder="Cep"
                required
                maxLength={8}
                />  
                {
                    errors?.cep?.message && <span className="text-red-950">{ errors?.cep?.message}</span>
                }
            </Label>   
            <Label 
            htmlFor="logradouro"
            title="Endereço"
            >
                <Input
                {...register("address")}
                id="logradouro"
                className="text-white bg-black w-[25rem] h-[2.5rem] p-2"
                type="text"
                placeholder="Endereço"
                required
                />  
                {errors?.address?.message && <span className="text-red-950">{ errors?.address?.message}</span>}
            </Label>
           
            <Label 
            htmlFor="localidade"
            title="Cidade"
            >
                <Input
                {...register("city")}
                id="localidade"
                className="text-white bg-black w-[25rem] h-[2.5rem] p-2"
                type="text"
                placeholder="Cidade"
                required
                />  
                {errors?.city?.message && <span className="text-red-950">{ errors?.city?.message}</span>}
            </Label>
            <Label 
            htmlFor="bairro"
            title="Bairro"
            >
                <Input
                {...register("neighborhood")}
                id="bairro"
                className="text-white bg-black w-[25rem] h-[2.5rem] p-2"
                type="text"
                placeholder="Bairro"
                required
                />  
                {errors?.neighborhood?.message && <span className="text-red-950">{ errors?.neighborhood?.message}</span>}
            </Label>
            <Label 
            htmlFor="number"
            title="Número"
            >
                <Input
                {...register("number")}
                id="number"
                className="text-white bg-black w-[5rem] h-[2.5rem] p-2"
                type="text"
                placeholder="Número"
                required
               
                />  
                {errors?.number?.message && <span className="text-red-950">{ errors?.number?.message}</span>}
            </Label>
            <Label 
            htmlFor="uf"
            title="Estado"
            >
                <Input
                {...register("uf")}
                id="uf"
                className="text-white bg-black w-[3rem] h-[2.5rem] p-2"
                type="text"
                placeholder="UF"
                required
                maxLength={2}
                />  
                {errors?.uf?.message && <span className="text-red-950">{ errors?.uf?.message}</span>}
            </Label>
            
           </div> 
           <div className="relative ">
                <Input
                className="text-white bg-black rounded-full cursor-pointer h-[2.5rem] w-[12rem] mt-2 relative left-56 hover:bg-gray-900 transition-all"
                value="Finalizar Compra"
                type="submit"

                />
           </div>
        </form>
        
        
        </>
    )

}