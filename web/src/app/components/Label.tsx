import { LabelHTMLAttributes, ReactNode } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export default function Label({htmlFor='', title='', children, ...props}: LabelProps) {
    return(
        <label 
        className="text-black flex flex-col"
        htmlFor={htmlFor}>
            <p>{title}</p>
            {children}
        </label>
    )
};
