"use client"
import {Input} from "@/app/components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Label from "../../components/Label"
import { api } from "@/app/lib/api"
import axios from "axios"


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

    })
})

async function getAddressInfo(data: any){
    for(const key in data){
        if(document.getElementById(`${key}`) ){
            let field: any  = document.getElementById(`${key}`)
            field!.value = data[key]
        
        }
    }
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
        <form onSubmit={handleSubmit((data)=> console.log(data))}
            onChange={(data) => console.log(errors)}
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
                className="text-white bg-black w-[15rem] h-[2.5rem] p-2"
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
                {errors?.address?.message && <span className="text-red-950">{ errors?.address?.message}</span>}
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
            htmlFor="uf"
            title="Estado"
            >
                <Input
                {...register("uf")}
                id="uf"
                className="text-white bg-black w-[5rem] h-[2.5rem] p-2"
                type="text"
                placeholder="UF"
                required
                maxLength={2}
                />  
                {errors?.uf?.message && <span className="text-red-950">{ errors?.uf?.message}</span>}
            </Label>
           </div> 
           <div className="relative">
                <Input
                className="text-white bg-black rounded-full cursor-pointer h-[2rem] w-[10rem] relative left-60 hover:bg-gray-900 transition-all"
                value="Enviar"
                type="submit"

                />
           </div>
        </form>
        
        
        </>
    )

}