"use client";
import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti";
export default function DeleteBlock({ id }) {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <div>
      <TiDelete
        size={24}
        className={`text-red-400 hover:cursor-pointer hover:text-red-200`}
        onClick={deleteTicket}
      />
    </div>
  );
}
