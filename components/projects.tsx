import { ProjectMetaData } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  projects: ProjectMetaData[]
}

export default function Projects({ projects }: Props) {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {projects.map(project => (
        <div className='flex flex-col items-center justify-center' key={project.slug}>
            <Link className='overflow-hidden rounded-2xl' href={project.url as string} key={project.slug}>
                <Image   
                  src={project.image as string}
                  alt='project image'
                  width={250}
                  height={250}
                  className='transition-transform duration-500 ease-in-out hover:scale-110 object-cover'
                />
            </Link>
            <span className='mt-1 text-lg'>{project.title}</span>
            <span className='text-sm font-light text-muted-foreground'>{project.summary}</span>

        </div>
        ))}
    </div>
  )
}
