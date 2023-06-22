
import { Product } from "./Card"

export default function HeroButtons(products: Product[], [count, setCount]: any) {
    function moveImageRight(count: number){
        const img: NodeListOf<HTMLImageElement> = document.querySelectorAll(".img")
        
        img[count].classList.add("i")
        img[count].style.transform = "translate(41.9rem)"
        img[count].style.transition = "1s ease"
    }
    function MoveImageLeft(count:number){
        const img: NodeListOf<HTMLImageElement> = document.querySelectorAll(".i")
        
      
        img[count].style.transform = "translate(0%)"
    }
    return(
        <>
        <button 
            className="text-lg font-extrabold"
            onClick={()=> {
                    if(count != 0){
                    if(count === 2){
                        MoveImageLeft(0)
                        setCount(count -= 1)
                    }else{
                        MoveImageLeft(count)
                        setCount(count -= 1)
                    }
                    console.log(count)
                }
            }}>{"<-"}</button>
            {
                products.map((e)=>{
                    return(
                        <input 
                        className="bg-black h-3 w-3 rounded-full"
                        type="button" value="" key={0} />
                    )
                })
            }
            <button 
            className="text-lg font-extrabold"
            onClick={()=> {
                
                if(count != 2){
                    if(count === 0){
                        moveImageRight(2)
                        setCount(count += 1)
                    }else{
                        moveImageRight(count)
                        setCount(count += 1)
                    }
                    console.log(count)
                }
            }}>{"->"}</button>
        
        </>
    )
};
