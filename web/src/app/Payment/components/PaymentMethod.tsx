import { Input } from "@/app/components/Input";

export default function PaymentMethod() {
    return(
        <label htmlFor="">
            <Input
            name="payment"
            type="checkbox"
            className="flex-none"
            />
            <p></p>
        </label>
    )
};
