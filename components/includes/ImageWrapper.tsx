import Image from 'next/image'
import { useState } from 'react'
import cn from 'clsx'
import styles from '@styles/modules/ImageWrapper.module.css'

const ImageWrapper = (props) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className={styles['image-wrapper']}>
        <Image
          {...props}
          className={cn(
            props.className,
            `${styles['image-animation']}`,
            isLoading
              ? 'image-blur'
              : ''
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </>
  )
}

export default ImageWrapper