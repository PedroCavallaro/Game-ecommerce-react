import Link from "next/link";
export default function Links() {
    return(
        <div className="flex flex-col gap-2">
            <p className="text-black text-lg font-semibold">Links relacionados:</p>
            <div className="flex flex-col">
                <Link href={"https://github.com/PedroCavallaro/Theboys-games-store"}
                className="hover:text-gray-800 text-black"
                >Repositório deste projeto</Link>
                
                <Link href={"https://github.com/PedroCavallaro/Game-Ecommerce"}
                className="hover:text-gray-800 text-black"
                >Repositório do projeto anterior</Link>
            </div>
        </div>    
    )
};
