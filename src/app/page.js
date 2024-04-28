import TicketForm from "@/app/(components)/TicketForm";
import TicketCard from "@/app/(components)/TicketCard";
const getTickets = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error(message);
  }
};
export default async function TicketPage() {
  const { tickets } = await getTickets();
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filterTicket, _index) => (
                    <TicketCard 
                      id={_index}
                      key={_index}
                      ticket={filterTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
