import { BsBookmarkDashFill } from "react-icons/bs";
import Image from "next/image";
export default function RoomCard({ image }) {
  return (
    <>
      <div className="m-4 flex rounded-2xl bg-putih p-4">
        <Image
          className="m-auto aspect-square w-3/12 rounded-2xl"
          src="/homestay.png" //{image}
          width={0}
          height={0}
          sizes="100vw"
          alt="Picture of the author"
        />
        <div className="mx-4 flex w-7/12 flex-col justify-between py-2">
          <p className="font-bold">President Hotel</p>
          <p className="text-xs text-abu2">Paris, France</p>
          <p className="text-xs text-abu2">
            ⭐ <span className="font-semibold text-hijau">4.5</span> &ensp;
            (4378 reviews)
          </p>
        </div>
        <div className="flex w-2/12 flex-col justify-between py-2 text-center">
          <p className="leading-none">
            <span className="font-bold text-hijau">$35</span>
            <br />
            <span className="mx-auto -mt-1 text-[10px] text-abu2">/ night</span>
          </p>
          <BsBookmarkDashFill className="mx-auto text-hijau" fontSize={20} />
        </div>
      </div>
    </>
  );
}