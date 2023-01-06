import { ShoppingBag } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full h-16  p-6 flex justify-between items-center border-b-2 border-gray-200">
        <strong>USA +</strong>
        <nav className="flex items-center justify-center gap-6">
          <a className="font-bold cursor-pointer">Login</a>
          <a className="font-bold cursor-pointer">Register</a>
          <ShoppingBag size={24} weight="bold" />
        </nav>
      </header>
  )
}