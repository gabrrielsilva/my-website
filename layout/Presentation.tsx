import Image from 'next/image';
import { Strong } from '../components/Strong';

export const Presentation = () => {
  return (
    <div className='w-full h-screen'>
      <section className='flex flex-col gap-3 p-6 bg-white h-1/2'>
        <Strong text='Quem sou?' extraStyles='text-purple-500 uppercase' />
        <p className='text-[1.9vh] font-inter text-justify'>Sou Gabriel Silva, desenvolvedor de software desde outubro de 2021, um sitiante que resolve problemas com tecnologia. Gosto de automatizar tarefas e idealizar soluções, sou fullstack, ou seja, desenvolvo aplicações desde o servidor até o cliente.</p>
        <div className='grid w-full h-full grid-cols-2 gap-5'>
          <div>
            <p className='text-[1.9vh] text-justify font-inter'>Gosto da natureza, de uma boa música e um bom café.</p>
          </div>
          <figure className='relative overflow-hidden rounded-md'>
            <Image src='/images/gabriel.jpg' alt='gabriel silva' fill className='object-cover' />
          </figure>
        </div>
      </section>
      <section className='h-1/2'></section>
    </div>
  );
};
