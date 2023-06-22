import { ReactNode } from "react";

export interface test {
    tittle: string,
    children: ReactNode
}
export default function ProductButton(test: test) {
    return(
        <>
            <label htmlFor="" 
            className="bg-black rounded-full flex justify-center items-center gap-3 text-white w-32 h-12
                hover:bg-gray-900 cursor-pointer transition-all" >
                    {test.children}
                <input className="cursor-pointer" type="button" value={test.tittle} />
            </label>
        </>
    )
};
