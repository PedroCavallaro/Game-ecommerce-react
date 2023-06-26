interface SliderProps{
    arr: any[]
}
export default function SliderButtons({arr}: SliderProps) {
    return(
        <>  
        <div className="flex gap-7 justify-center items-center">

        <button>{"<-"}</button>
          {
            arr.map((element, index) =>{
                return(
                    <input 
                    className="bg-white h-3 w-3 rounded-full"
                    type="button" value="" key={index} />
                )
            })
          }      
         <button>{"->"}</button>
        </div>
        </>
    )
};
