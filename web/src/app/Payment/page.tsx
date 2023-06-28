import LeftSection from "./components/LeftSection";
import Section from "./components/Section";

export default function Payment() {
    return(
    <div className="flex justify-center items-center gap-10  h-screen p-3">
        <Section>
           <LeftSection/>
        </Section> 
        <Section>
            <p className="text-black">oi</p>
        </Section> 
        <Section>
            <p className="text-black">oi</p>
        </Section> 
    </div>
    )
};
