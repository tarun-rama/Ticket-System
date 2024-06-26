export default function Status({ status }) {
  const getColor = () => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-200";
        return color;
    }
    return color;
  };
  return (
    <span
      className={`inline-block rounded-full bg-green-400 px-2 py-1 text-gray-700 font-semibold text-xs ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
}
