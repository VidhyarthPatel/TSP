"use client";

import Link from "next/link";
import LastCurveWithText from "@/components/LastCurveWithText";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">


      {/* Last Curve SVG with Animated Text */}
      <div className="">
        <LastCurveWithText />
      </div>

    </div>
  );
}