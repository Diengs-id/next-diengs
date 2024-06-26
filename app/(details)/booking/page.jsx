import Link from 'next/link';
import Header from '@/app/ui/booking/header';
import DatePicker from '@/app/ui/booking/date-picker';
import NumberOfGuest from '@/app/ui/booking/number-of-guest';

export default function BookPage() {
  return (
    <div className="max-w-[420px] mx-auto">
      <Header />
      <div className="mx-6 bg-putih">
        <div className="my-3 flex">
          <div className="w-16 h-16 rounded-lg bg-[url('https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')] bg-cover" />
          <div className="ml-4 pt-3 grow">
            <p className="text-sm font-bold">Homestay Langit Senja</p>
            <p className="text-xs font-medium text-abu2">Bintang Standart Room</p>
          </div>
          <Link href="homestay">
            <p className="py-5 text-sm text-hijau"><u>Ubah</u></p>
          </Link>
        </div>
        <DatePicker/>
        <NumberOfGuest/>
        <div>
          <p className="text-sm font-bold mt-8 mb-2">Nama Reservasi</p>
          <form>
            <input className="bg-[#f7f7f7] mb-4 py-4 px-5 w-full rounded-lg text-sm focus:bg-[#dfffea] focus:ring-1 focus:ring-hijau focus:outline-none" type="text" name="" id="email" placeholder="Nama" required/>
            <input className="bg-[#f7f7f7] py-4 px-5 w-full rounded-lg text-sm focus:bg-[#dfffea] focus:ring-1 focus:ring-hijau focus:outline-none" type="text" name="" id="email" placeholder="No Handphone" required/>
          </form>
        </div>
      </div>
      <div className="p-3 pb-4 mt-8 bg-putih justify-betweenw-6xl mx-auto">
        <p className="mb-3 text-center font-bold text-md text-hitam">Total: Rp.700.000</p>
        <Link href="payment/payment-method">
          <div className="bg-hijau rounded-full mb-5 mt-2 py-3 px-10 shadow-hijau shadow-sm">
            <p className="text-putih text-center text-sm">Selanjutya</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
