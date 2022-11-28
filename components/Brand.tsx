import Image from 'next/image'

export const Brand = () => {
  return <Image  src="/images/parrot.png" alt="parrot-logo" width={50} height={50} quality={100} priority={true} className='pointer-events-none select-none' />
}