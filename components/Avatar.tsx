import Image from 'next/image'

export function AvatarWithMargin ({ src, alt, size = 40, className = 'rounded-full mr-2' }: { src: string, alt: string, className?: string, size?: number }) {
  return (
    <Avatar src={src} alt={alt} size={size} className={className} />
  )
}
export function Avatar ({ src, alt, size = 40, className = 'rounded-full' }: { src: string, alt: string, className?: string, size?: number }) {
  return (
    <Image src={src} alt={alt} width={size} height={size} className={className} />
  )
}
