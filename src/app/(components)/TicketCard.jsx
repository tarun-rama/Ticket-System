import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import Progress from "./Progress";
import Status from "./Status";
import Link from "next/link";
export default function TicketCard({ ticket }) {
  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-3">
      <div className="flex flex-row mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4 className="font-bold text-xl">{ticket.title}</h4>
        <hr className="mb-2 h-px border-0 bg-page " />
        <p className="whitespace-pre-wrap mb-2">{ticket.description}</p>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="my-1 text-xs">{formatTimeStamp(ticket.createdAt)}</p>
            <Progress progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <Status status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
}
