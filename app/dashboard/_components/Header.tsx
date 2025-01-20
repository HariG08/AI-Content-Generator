import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
      {/* Search Bar */}
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg w-full">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full px-2"
        />
      </div>

      {/* Membership Banner */}
      <div className="ml-4">
        <h2 className="p-2 bg-primary text-white text-xs rounded-full px-4 shadow-md">
          🔥 Join membership just for $15.99/month
        </h2>
      </div>
    </div>
  );
}

export default Header;

