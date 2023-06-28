import LeftSection from "./components/LeftSection";
import MiddleSection from "./components/MiddleSection";
import RightSection from "./components/RightSection";
import Section from "./components/Section";

export default function Payment() {
    return(
    <div className="flex justify-center items-center gap-10  h-screen p-3">
        <Section>
           <LeftSection/>
        </Section> 
        <Section>
            <MiddleSection/>
        </Section> 
        <Section>
            <RightSection/>       
        </Section> 
    </div>
    )
};
