import  Cookie  from "js-cookie"
import { useRouter } from "next/navigation"

export interface ButtonProps {
    id: string,
    tittle: string,
    bgColor: string,
    color: string
}

export function Button( button: ButtonProps) {
    const router = useRouter()
    return (
        <div className={`bg-${button.bgColor} w-[20rem] h-16 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.75)] flex hover:bg-black transition-all `}>
           <button 
           onClick={()=> {
            localStorage.setItem("page", JSON.stringify(button.id))
            if(button.id === "LogOut"){
                Cookie.remove("token")
            }
            router.push(`${button.id === "LogOut" ? "./" : `./${button.id}` }`)} }
           className={`text-${button.color} hover:text-white w-[17rem] flex justify-start items-center ml-3 transition-all `}>
                {button.tittle}
           </button>
        </div>

    )

}