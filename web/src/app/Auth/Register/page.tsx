import RegisterForm from "../../components/Register";

export default function Register() {


    return(
        <div className="w-screen flex justify-center items-center bg-black h-[40rem] gap-14">
        <div>
            
            <h1 className="flex gap-1 cursor-default text-6xl">
                    The Boys <p className="mt-9"> game store</p>
                </h1>
            </div>
        <div>
            <RegisterForm/>
        </div>
    </div>  
    )
}