import Image from 'next/image'

export function Avatar ({ src, alt, size = 40, className = 'rounded-full' }: { src: string, alt: string, className?: string, size?: number }) {
  return (
    <div className='flex items-center mr-2'>
      <Image src={src} alt={alt} width={size} height={size} className={className} />
    </div>
  )
}
