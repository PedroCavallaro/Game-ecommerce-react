import { ReactNode } from "react";

export default function Section({children} : {children: ReactNode}) {
    return(
        <section className="h-[40rem] w-[30rem] bg-white overflow-scroll">
            {children}
        </section>
    )
};
