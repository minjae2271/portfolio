import Image from 'next/image'
import authorImage from '@/public/images/authors/Small.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hi, I&#39;m Min Jae.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Here I present my interest in React & Next.js. I do projects for
          people to see the fun side of life and at the same time use those
          opportunities for self-improvement.
        </p>
      </div>
      {/* <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='minjae'
          width={175}
          height={175}
          priority
        />
      </div> */}
    </section>
  )
}
