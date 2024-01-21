import React from 'react'

function Header() {
  return (
    <header className="bg-gray-300 p-4 text-white fixed top-0 w-full z-10 shadow-lg text-blue-900">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Ruqayah Abdulghani</h1>
      <nav className="space-x-4">
        <a href="#" className=" hover:underline">Projects</a>
        <a href="#" className="hover:underline">Download My Cv</a>
      </nav>
    </div>
  </header> 
   )
}

export default Header