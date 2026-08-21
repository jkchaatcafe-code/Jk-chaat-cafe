interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  lazy?: boolean
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  lazy = true 
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
    />
  )
}

export default OptimizedImage