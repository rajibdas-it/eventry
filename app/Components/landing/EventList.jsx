import React from "react";
import EventCard from "./EventCard";
import { getAllEvents } from "@/db/quries";

const EventList = async () => {
  const items = await getAllEvents();
  console.log(items);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <EventCard />
    </div>
  );
};

export default EventList;
