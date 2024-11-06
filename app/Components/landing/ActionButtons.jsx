"use client";
import { addInterestedEvent } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState, useTransition } from "react";

const ActionButtons = ({ eventId, interestedUserIds, formDetails }) => {
  const router = useRouter();
  const { auth } = useAuth();

  const isInterested = interestedUserIds?.find((id) => id === auth?.id);
  const [interested, setInterested] = useState(isInterested);
  const [isPending, startTransition] = useTransition();

  console.log("action button", auth);

  async function toggleInterest() {
    if (auth) {
      await addInterestedEvent(eventId, auth.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  }

  async function markGoing() {
    if (auth) {
      router.push("/payment");
    } else {
      router.push("/login");
    }
  }
  return (
    <div className={`w-full flex gap-4 mt-4 ${formDetails && "flex-1"}`}>
      <button
        onClick={() =>
          startTransition(() => {
            toggleInterest();
          })
        }
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested
      </button>
      <button
        onClick={markGoing}
        className="text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5f5f5f]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </button>
    </div>
  );
};

export default ActionButtons;
