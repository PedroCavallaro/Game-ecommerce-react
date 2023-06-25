import { ReactNode } from "react";
import { Gender } from "../Games/page";

interface FormProps{
    children: ReactNode,
    method: ()=>Gender[]
}

export default function Form({children, method} : FormProps) {
    return(
        <form onSubmit={method} action="">
            <p className="text-black">oi</p>
            {children}

        </form>
    )
};
