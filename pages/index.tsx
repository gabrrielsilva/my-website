import { Header } from '../layout/Header';
import { Home } from '../layout/Home';
import { Presentation } from '../layout/Presentation';

export default function Page() {
  return (
    <div className='flex flex-col w-screen h-full min-h-screen bg-[#1f2028]'>
      <Header />
      <Home />
      <Presentation />
    </div>
  )
}