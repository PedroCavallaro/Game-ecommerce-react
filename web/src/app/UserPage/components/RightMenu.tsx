import { Button } from "./Button";

export default function RightMenu() {

    return (
        <div className="bg-white w-[50rem] relative " >
            <div className="shadow">
                <p className="text-black">oi</p>
            </div>
             <input value={"Finalizar Compra"} type="submit" className="text-white absolute cursor-pointer right-3 top-0 mt-2 p-2 bg-black hover:bg-gray-900"/>
        </div>    
    )
}