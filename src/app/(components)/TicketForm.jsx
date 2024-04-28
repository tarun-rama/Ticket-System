"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function TicketForm({ ticket }) {
  const router = useRouter();
  const EDITMODE = ticket._id === "new" ? false : true;
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // onSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      router.push("/");
      router.refresh();
    } else {
      const res = await fetch(`/api/Tickets`, {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      router.push("/");
      router.refresh();
    }
  };
  // end
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };
  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }
  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col p-4 gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl">
          {EDITMODE ? "Update your Ticket" : "Create your Ticket"}
        </h2>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter Title"
          required={true}
          value={formData.title}
          className="m-1 rounded bg-card p-1"
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          type="text"
          placeholder="Enter Description"
          name="description"
          id="description"
          required={true}
          className="m-1 rounded bg-card p-1"
          rows={5}
          value={formData.description}
          onChange={handleChange}
        />
        <label>Category</label>
        <select
          name="category"
          className="bg-card cursor-pointer"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>Priority</label>
        <div className=" flex gap-4">
          <input
            type="radio"
            id="priority-1"
            name="priority"
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          min="0"
          max="100"
          className="cursor-pointer"
          value={formData.progress}
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          className="bg-card cursor-pointer"
          onChange={handleChange}
          value={formData.status}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          className="bg-blue-500 rounded-full mb-20 cursor-pointer hover:bg-blue-600 transition"
          type="submit"
          value={EDITMODE ? "Update Ticket" : "Create Ticket"}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}
