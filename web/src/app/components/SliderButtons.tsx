interface SliderProps{
    arr: any[],
    sectionId: string
}
function MoveImageRight(sectionId: string){
    const imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll(".section" + sectionId)
    imgs.forEach((e)=>{
            
        let previousTranslate:number = 0
        previousTranslate = Number(e.dataset?.translate)

        if(previousTranslate !== (-16 * (imgs.length -1)) ){
            let newTranslate = previousTranslate! -= 16    
    
            e.style.transform = `translate(${newTranslate}rem)`
            e.dataset!.translate = String(newTranslate)
            e.style.transition = "1s ease"
        }
   
       
    })
}
function MoveImageLeft(sectionId: string){
    const imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll(".section" + sectionId)
    imgs.forEach((e)=>{
        let previousTranslate:number = 0
        previousTranslate = Number(e.dataset?.translate)

        if(previousTranslate !== 0){
            let newTranslate = previousTranslate! += 16

            e.style.transform = `translate(${newTranslate}rem)`
            e.dataset!.translate = String(newTranslate)
            e.style.transition = "1s ease"
        }
    })
}
export default function SliderButtons({arr, sectionId}: SliderProps) {
    return(
        <>  
        <div className="flex gap-7 justify-center items-center">

        <button
        onClick={() => MoveImageLeft(sectionId)}
        >{"<-"}</button>
          {
            arr.map((index) =>{
                return(
                    <input 
                    className="bg-white h-3 w-3 rounded-full font-extrabold"
                    type="button" value="" key={index} />
                )
            })
          }      
         <button
         onClick={() => MoveImageRight(sectionId)}
         >{"->"}</button>
        </div>
        </>
    )
};
