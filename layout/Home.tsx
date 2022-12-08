import { CodeBracketIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Button } from '../components/Button';
import { Strong } from '../components/Strong';

export const Home = () => {
  return (
    <div className='relative flex flex-col justify-center w-full h-screen px-6 overflow-hidden'>
      <section className='flex flex-col justify-center w-full h-full gap-6 -mt-40'>
        <Strong text='Desenvolvo soluções de software para seu negócio' extraStyles='text-gray-100 mr-10' />
        <Button
          text='Ver projetos'
          Icon={CodeBracketIcon}
          extraStyles='bg-[#3992ff] text-white hover:bg-[#2d74cc] transition-colors duration-200'
        />
      </section>
      <figure className='absolute inset-x-0 w-screen h-full top-[30%]'>
        <Image src='/images/programming.svg' alt='programming' fill quality={100} className='px-10 pointer-events-none select-none' />
      </figure>
    </div>
  );
};
