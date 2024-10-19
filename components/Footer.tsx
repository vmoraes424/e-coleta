import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center p-8 border-t-[1px] border-opacity-25 mt-12">
      E-Coleta © {new Date().getFullYear()}
    </div>
  );
}
