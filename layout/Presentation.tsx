import { Strong } from '../components/Strong';

export const Presentation = () => {
  return (
    <div className='w-full h-screen'>
      <section className='relative bg-white h-1/2'>
        <div className='absolute inset-y-0 right-0 rotate-90 bg-black'>
          <Strong text='exemplo' extraStyles='text-[#6bd968] uppercase' />
        </div>
      </section>
      <section className='h-1/2'></section>
    </div>
  );
};
