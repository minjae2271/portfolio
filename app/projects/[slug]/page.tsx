import { getProjectBySlug } from '@/lib/projects'
import MDXContent from '@/components/mdx-content'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) return null

  const { metadata, content } = project
  const { title, summary, image, url, publishedAt } = metadata

  return (
    <main className='mt-40'>
      <div className='container flex max-w-3xl flex-col items-center justify-center'>
        {/* title */}
        <section>
          <h2 className='title mb-12'>{project.metadata.title}</h2>
        </section>
        <div className='flex flex-col items-center justify-center'>
          <Link
            className='overflow-hidden rounded-2xl'
            href={url as string}
          >
            <Image
              src={image as string}
              alt='project image'
              width={500}
              height={500}
            //   sizes='100vw'
              className='object-cover transition-transform duration-500 ease-in-out hover:scale-110'
            />
          </Link>
        </div>
        {/* description */}
        <section>
          <main className='prose mt-16 dark:prose-invert'>
            <MDXContent source={content} />
          </main>
        </section>
        {/* skills */}
        <section></section>
      </div>
    </main>
  )
}
