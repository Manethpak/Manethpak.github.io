import React from "react";
import { Clipboard } from "lucide-react";
import { toast } from "react-toastify";

function Copy() {
  function handler() {
    const email = "Manethpak00@gmail.com";
    navigator.clipboard.writeText(email);
    toast("Copied to clipboard!");
  }

  return (
    <button onClick={handler} className="hover:opacity-75">
      <Clipboard className="h-6 w-6" />
    </button>
  );
}

export default Copy;
