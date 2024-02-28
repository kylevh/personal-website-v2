"use client";
import { sf } from "@/app/fonts";
import React from "react";

function LocalTime() {
  let motd = "";

  const localClientTime = new Date().getHours();
  if (5 <= localClientTime && localClientTime < 12) {
    motd = "good morning.";
  } else if (12 <= localClientTime && localClientTime < 18) {
    motd = "good afternoon.";
  } else {
    motd = "good evening.";
  }
  return (
    <h2
      className={`${sf.className} w-96 lg:mt-40 font-bold text-3xl xl sm:text-4xl text-left text-kyle-dark `}
    >
      {" "}
      {"{"} {motd} {"}"}{" "}
    </h2>
  );
}

export default LocalTime;
