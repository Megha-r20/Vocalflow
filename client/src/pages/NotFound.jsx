import React from "react"; 
export default function NotFound() { 
  return (
    <div className="p-10 text-white">
      <h1>404 Not Found</h1>
      <p className="mt-4 text-[#9CA3AF]">The path "{window.location.pathname}" did not match any routes.</p>
    </div>
  ); 
}
