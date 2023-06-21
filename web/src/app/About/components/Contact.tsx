import Link from "next/link";

export default function Contact() {
    return(
        <div>
            <p className="text-black text-lg font-semibold">Como me contactar:</p>
            <p
            className="text-black hover:text-gray-800"
            >Meu Linkedin: <Link href={"https://www.linkedin.com/in/pedro-cavallaro-1b39b3236/"}>https://www.linkedin.com/in/pedro-cavallaro-1b39b3236/</Link></p>
         <p className="text-black hover:text-gray-800 cursor-default">Email: pedrocavallaro.contato@gmail.com</p>
        </div>
    )
};
