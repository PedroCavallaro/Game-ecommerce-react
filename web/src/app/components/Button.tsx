export interface ButtonProps {
    id: string,
    tittle: string,
    bgColor: string,
    color: string
}

export function Button( button: ButtonProps) {
    return (
        <div className={`bg-${button.bgColor} w-[20rem] h-16 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.75)] flex hover:bg-black transition-all `}>
           <a href={`./${button.id}`} className={`text-${button.color} hover:text-white w-[17rem] flex justify-start items-center ml-3 transition-all `}>
                {button.tittle}
           </a>
        </div>

    )

}