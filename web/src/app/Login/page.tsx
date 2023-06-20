import LoginForm from "@/app/components/LoginForm";

export default function Login() {

    return(
        <div className="w-screen flex justify-center h-[40rem] items-center bg-black overflow-hidden gap-14">
            <div className="">
                
                <h1 className="flex gap-1 cursor-default text-6xl">
                        The Boys <p className="mt-9"> game store</p>
                    </h1>
                </div>
            <div>
                <LoginForm/>
            </div>
        </div>  
    )


}