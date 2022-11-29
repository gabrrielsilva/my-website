import { Brand } from '../components/Brand'
import { H1 } from '../components/H1'
import { HeaderButtons } from './HeaderButtons'

export const Header = () => {
  return (
    <header className='absolute z-10 flex items-center justify-between w-full h-20 px-5'>
      <section className='flex items-center gap-3'>
        <Brand />
        <H1 text='gabriel silva' extraStyles='tracking-tight text-white whitespace-nowrap' />
      </section>
      <section className='absolute top-0 right-0'>
        <HeaderButtons />
      </section>
    </header>
  )
}