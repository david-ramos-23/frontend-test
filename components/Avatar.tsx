import Image from 'next/image'

export function Avatar ({ src, alt }: { src: string, alt: string }) {
  return (
    <div className='flex items-center mr-2'>
      <Image src={src} alt={alt} width={40} height={40} className='rounded-full' />
    </div>
  )
}
