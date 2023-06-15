import gow from "../../assets/gow.jpeg"
import Image from 'next/image'


export default function Hero() {
    if(gow){

        return(
            <div className="m-0 flex justify-center items-center overflow-hidden h-[30rem] gap-5">
                <div className="flex justify-center items-center">
                    <Image  
                    className="w-[40rem] h-[25rem] object-cover hover:scale-[1.03] transition"
                    src={gow}
                    alt="gow"/>
                </div>
                <div className="m-0 p-0 flex w-[40rem] h-[25rem] bg-gray-50">
                    <div className="p-5 flex flex-col gap-20 text-black">
                        <h1>God of War: Ragnarok</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ex dolor, rerum incidunt hic ipsum et cumque recusandae nulla. Tempora obcaecati qui recusandae similique est quisquam. Tempore sit sed doloremque.</p>
                        <a href="" 
                        className="bg-black rounded-full pl-3 p-2 text-white w-28
                         hover:bg-gray-900 transition-all ">
                            Saiba mais
                            </a>
                    </div>
                </div>
            </div>
        )
    }    
}
