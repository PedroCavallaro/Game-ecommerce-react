
import { Paragraph } from "./components/Paragraph";
import Links from "./components/Links";
import Contact from "./components/Contact";

export default function About() {
    return(
        <main className="flex h-[40rem] justify-center items-center overflow-hidden">
            <article className="flex flex-col w-[40rem]  relative  bg-white gap-5 p-4">
               <Paragraph/> 
                <Links/>
                <Contact/>
            </article>
        </main>
    )


}