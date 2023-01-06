import { MagnifyingGlass, ShoppingBag } from 'phosphor-react';

export function App() {

  return (
    <div className="w-full h-screen bg-white flex items-center flex-col">
      <header className="w-full h-14  p-6 flex justify-between items-center border-b-2 border-gray-200">
        <strong>USA +</strong>
        <nav className="flex items-center justify-center gap-6">
          <a className="font-bold cursor-pointer">Login</a>
          <a className="font-bold cursor-pointer">Register</a>
          <ShoppingBag size={24} weight="bold" />
        </nav>
      </header>
      <section className='w-[920px] h-14 wide:h-20 flex items-center justify-between font-bold'>
        <img src="/Union.svg"></img>
        <nav className='flex gap-20'>
          <a href="">Mens</a>
          <a href="">Women</a>
          <a href="">Sport</a>
          <a href="">Style</a>
          <a href="">Lookbook</a>
          <MagnifyingGlass size={24} weight="bold" cursor={'pointer'} />
        </nav>
      </section>
      <aside>
        <img src="/section-bg.svg" className='w-[1180px] h-[628px] wide:w-[1480px] wide:h-[728px] absolute wide:absolute left-0 top-20 wide:top-40'>
        </img>
        <div className='w-72 h-80 flex items-center justify-between flex-col absolute left-16 bottom-40 wide:bottom-64 text-white '>
          <span className='text-4xl font-medium '>True Venice Tradition</span>
          <div>
          <p className='text-sm mb-6'>Vehicula purus ultricies et aliquam elementum nulla velit quam ipsum. Adipiscing sit volutpat arcu aliquet sem at. Duis dui diam massa amet mauris vel ante sagittis. Ipsum lacus suspendisse velit convallis vel pellentesque tincidunt varius massa.</p>
            <a href="#" className='cursor-pointer hover:underline'>View the collection</a>
          </div>
        </div>
      </aside>
    </div>
  )
}
