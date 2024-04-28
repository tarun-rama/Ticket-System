import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
// imports end //

export default function NavBar() {
  return (
    <nav className="p-4 bg-nav flex justify-between">
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <FaHome color="white" size={24} />
        </Link>
        <Link href={"/TicketPage/new"}>
          <IoTicketSharp color="white" size={24} />
        </Link>
      </div>
      <div>
        <p className="text-default-text">Tarunmrama@gmail.com</p>
      </div>
    </nav>
  );
}
