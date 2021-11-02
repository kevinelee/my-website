import React from "react";
import Link from "next/link";

export default function IndeedButton() {
  return (
    <Link href="/indeed">
      <a
        style={{ zIndex: "200" }}
        onClick={() => {
          console.log("hi");
        }}
        className="p-4 absolute text-gray-100 cursor-default"
      >
        indeed
      </a>
    </Link>
  );
}
