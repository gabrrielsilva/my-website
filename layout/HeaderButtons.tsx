import Image from 'next/image';
import { useRouter } from 'next/navigation';

const myNetworks = [
  {
    name: 'Gmail',
    image: '/images/gmail.svg',
    link: 'mailto:gabrielsilvaev@gmail.com',
  },
  {
    name: 'GitHub',
    image: '/images/github.svg',
    link: 'https://github.com/gabrrielsilva'
  },
  {
    name: 'LinkedIn',
    image: '/images/linkedin.svg',
    link: 'https://www.linkedin.com/in/gabriel-silva-44a075208/',
  }
]

export const HeaderButtons = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-2 p-1 bg-white rounded-sm'>
      {myNetworks.map(network => (
        <div key={network.name}>
          <button className='relative w-8 h-8 p-2' onClick={() => router.push(network.link)}>
            <Image src={network.image} alt={network.name} fill />
          </button>
        </div>
      ))}
    </div>
  );
};
