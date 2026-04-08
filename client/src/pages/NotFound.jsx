import React from "react"; 
export default function NotFound() { 
  return (
    <div className="p-10 text-white">
      <h1>404 Not Found</h1>
      <p className="mt-4 text-[#9CA3AF]">The path "{window.location.pathname}" did not match any routes.</p>
      <p className="mt-2 text-[#6B7280]">Build Time: {new Date().toLocaleTimeString()}</p>
    </div>
  ); 
}
