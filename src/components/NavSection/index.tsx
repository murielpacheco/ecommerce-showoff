import { NavLink } from 'react-router-dom';  
import { MagnifyingGlass } from "phosphor-react";
export function NavSection() {
  return (
    <section className='w-[920px] h-14 wide:h-20 flex items-center justify-evenly font-bold'>
      <NavLink to="/">
        <img src="/Union.svg" />
      </NavLink>
        <nav className='flex gap-20'>
          <NavLink to="/women" className="cursor-pointer" >Women</NavLink>
          <NavLink to="sport" className="cursor-pointer" >Sport</NavLink>
          <NavLink to="/lookbook" className="cursor-pointer" >Lookbook</NavLink>
          <MagnifyingGlass size={24} weight="bold" cursor={'pointer'} />
        </nav>
    </section>
  )
}