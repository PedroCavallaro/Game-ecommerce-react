import PaymentMethod from "./PaymentMethod";

export default function MiddleSection() {
    return(
        <>
            <h2 
            className="text-black text-2xl p-2 text-center"
            >Método de pagamento</h2>
            <div className="text-black flex flex-col gap-7 mt-4">
                
                <PaymentMethod/>
            </div>
        </>
    )
};
