interface FormProps{
    children: any,
    method: ()=>void
   
}

export default function Form({children, method} : FormProps) {
    return(
        <form onSubmit={method} action="">
            <p className="text-black">oi</p>
            {children}

        </form>
    )
};
