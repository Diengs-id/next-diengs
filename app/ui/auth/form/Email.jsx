import { HiMail } from "react-icons/hi";

export default function Email() {
    return (
        <div className="relative mb-5">
            <HiMail className="absolute top-3 left-3" color="#adadb5" size={20} />
            <input className="bg-[#f7f7f7] py-3 px-10 w-full rounded-xl text-sm focus:bg-[#dfffea] focus:ring-1 focus:ring-hijau focus:outline-none" type="Email" name="" id="email" placeholder="Email"/>
        </div>
    )
}