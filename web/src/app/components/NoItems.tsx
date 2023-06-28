import { ShoppingBag, HeartOff} from "lucide-react";


interface NoItemsProps{
    text: string,
    iconId: number
}

export default function NoItems({text, iconId}: NoItemsProps) {
    return(
        <div className="flex flex-col justify-center items-center text-black gap-2" >
            {iconId === 1 ? <ShoppingBag color="#000"/> :  <HeartOff color="#000"/>  } 
            <p className="text-lg">Não há itens em {text}</p>
            <a href="./"
            className="hover:text-gray-900 text-md"
            >Vá para a página inicial e selecione alguns!{" -> "}</a>
        </div>
    )
};
