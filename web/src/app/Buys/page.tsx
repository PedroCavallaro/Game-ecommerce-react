import LeftMenu from "../components/LeftMenu";
import BuyInfo from "./components/BuyInfo";

export default function Buys() {
    return(
        <>
        <main className="flex mt-16 justify-center items-center">
			<div className='flex justify-center  gap-20'>
				<LeftMenu/>
                <div className="bg-white w-[50rem] h-[30rem] overflow-scroll overflow-x-hidden text-black flex" >  
                    <BuyInfo/>
                </div>
			</div>
		</main>
        </>
    )
};
