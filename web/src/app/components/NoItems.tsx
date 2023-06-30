import { ShoppingBag, HeartOff} from "lucide-react";
import {MdOutlineRemoveShoppingCart} from "react-icons/md"

interface NoItemsProps{
    text: string,
    iconId: number
}

let IconsArray = [
    <MdOutlineRemoveShoppingCart className="w-10 h-10" key={0}/>,
    <HeartOff key={1} color="#000"/>,
    <ShoppingBag key={2} color="#000"/>
    
]

export default function NoItems({text, iconId}: NoItemsProps) {
    return(
        <div className="flex flex-col justify-center items-center text-black gap-2" >
            {IconsArray[iconId] } 
            <p className="text-lg">Não há itens em {text}</p>
            <a href="./"
            className="hover:text-gray-900 text-md"
            >Vá para a página inicial e selecione alguns!{" -> "}</a>
        </div>
    )
};
