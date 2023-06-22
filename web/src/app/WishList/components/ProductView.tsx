import { Product } from "@/app/components/Card";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { setProductId } from "../../components/Card";
import { retrieveUserId } from "@/app/lib/globals";


export default function ProductView(product: Omit<Product, "qtd" | "desc">) {
    const router = useRouter()
    
    return(
        <div className="flex p-3  h-[10rem]">
            <div className="flex shadow-[0px_0px_4px_0px_rgba(0,0,0,0.75)] w-[35rem]  justify-between">
                <div className="flex">
                    <Image src={`/assets/${product.coverUrl}`} alt={product.name}
                    width={1000}
                    height={1000}
                    className="w-28"/>
                    <div className="flex flex-col gap-4  text-black ml-3">
                            <h2>{product.name}</h2>
                            <p>R$ {product.value }</p>
                    </div>
                </div>
                    <button onClick={() => setProductId(product.id, router  )} className="text-white  mr-3 mt-3 bg-black h-8 p-1 text-sm hover:bg-gray-900">
                        Mais Informações
                    </button>
            </div>
        </div>
    )
};
