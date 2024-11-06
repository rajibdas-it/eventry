"use client";
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import React, { useState } from "react";

const ActionButtons = ({ eventId, interestedUserIds, formDetails }) => {
  const { auth } = useAuth();

  const isInterested = interestedUserIds.find((id) => id === auth?.id);
  const [interested, setInterested] = useState(isInterested);
  return (
    <div className={`w-full flex gap-4 mt-4 ${formDetails && "flex-1"}`}>
      <button
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested
      </button>
      <Link
        href="/payment"
        className="text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5f5f5f]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </Link>
    </div>
  );
};

export default ActionButtons;
