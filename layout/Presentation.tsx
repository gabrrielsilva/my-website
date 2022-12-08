import Image from 'next/image';
import { Strong } from '../components/Strong';
import { HeaderButtons } from './HeaderButtons';

const techLogosPath = '/images/tech-logos';
const technologies = [
  {
    name: 'HTML',
    logoPath: `${techLogosPath}/html.svg`
  },
  {
    name: 'CSS',
    logoPath: `${techLogosPath}/css.svg`
  },
  {
    name: 'JavaScript',
    logoPath: `${techLogosPath}/javascript.svg`
  },
  {
    name: 'TypeScript',
    logoPath: `${techLogosPath}/typescript.svg`
  },
  {
    name: 'NodeJS',
    logoPath: `${techLogosPath}/nodejs.svg`
  },
  {
    name: 'NestJS',
    logoPath: `${techLogosPath}/nestjs.svg`
  },
  {
    name: 'Jest',
    logoPath: `${techLogosPath}/jest.svg`
  },
  {
    name: 'PostgreSQL',
    logoPath: `${techLogosPath}/postgresql.svg`
  },
  {
    name: 'Docker',
    logoPath: `${techLogosPath}/docker.svg`
  },
  {
    name: 'ReactJS',
    logoPath: `${techLogosPath}/react.svg`
  },
  {
    name: 'NextJS',
    logoPath: `${techLogosPath}/nextjs.svg`
  },
  {
    name: 'TailwindCSS',
    logoPath: `${techLogosPath}/tailwindcss.svg`
  },
  {
    name: 'Git',
    logoPath: `${techLogosPath}/git.svg`
  }
]

export const Presentation = () => {
  return (
    <main className='w-full h-screen bg-inherit'>
      <section className='flex flex-col gap-3 p-6 bg-white h-1/2'>
        <Strong text='Quem sou?' extraStyles='text-zinc-700 uppercase' />
        <p className='text-[1.9vh] font-inter text-justify'>Sou Gabriel Silva, desenvolvedor de software desde outubro de 2021, um sitiante que resolve problemas com tecnologia. Gosto de automatizar tarefas e idealizar soluções, sou fullstack, ou seja, desenvolvo aplicações desde o servidor até o cliente.</p>
        <div className='grid w-full h-full grid-cols-2 gap-5'>
          <div className='relative'>
            <p className='text-[1.9vh] text-justify font-inter'>Gosto da natureza, de uma boa música e um bom café.</p>
            <section className='absolute bottom-0 left-0'>
              <HeaderButtons />
            </section>
          </div>
          <figure className='relative overflow-hidden rounded-md'>
            <Image src='/images/gabriel.jpg' alt='gabriel silva' fill className='object-cover' />
          </figure>
        </div>
      </section>
      <section className='flex w-screen h-12 bg-[#121212] border-b-4 border-b-white'>
        {technologies.map(technology => (
          <figure key={technology.name} className='relative w-full h-full'>
            <Image src={technology.logoPath} alt={technology.name} quality={100} fill />
          </figure>
        ))}
      </section>
      <section className='w-screen h-screen px-6 py-14 bg-inherit'>
        <Strong text='Projetos' extraStyles='text-white uppercase' />
      </section>
    </main>
  );
};
