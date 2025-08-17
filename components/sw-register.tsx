"use client";

import { useEffect } from "react";

export default function SWRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/jobs" })
        .then(() => console.log("Service Worker registered"))
        .catch((err) =>
          console.error("Service Worker registration failed:", err)
        );
    }
  }, []);

  return null;
}
