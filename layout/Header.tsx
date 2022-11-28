import { Brand } from '../components/Brand'
import { H1 } from '../components/H1'

export const Header = () => {
  return (
    <header className='absolute z-10 flex items-center justify-start w-full h-20 gap-3 px-5'>
      <Brand />
      <H1 text='gabriel_silva' extraStyles='tracking-tight text-white' />
    </header>
  )
}