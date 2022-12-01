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
    <div className='flex gap-3 p-1 rounded-sm'>
      {myNetworks.map(network => (
        <div key={network.name}>
          <button className='relative w-[3vh] h-[3vh] p-2' onClick={() => router.push(network.link)}>
            <Image src={network.image} alt={network.name} fill />
          </button>
        </div>
      ))}
    </div>
  );
};
