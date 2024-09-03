import { ProjectMetaData } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  projects: ProjectMetaData[]
}

export default function Projects({ projects }: Props) {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
      {projects.map(project => (
        <div className='flex flex-col items-center justify-center' key={project.slug}>
            <Link className='overflow-hidden rounded-2xl' href={`/projects/${project.slug}`} key={project.slug}>
                <Image   
                  src={project.image as string}
                  alt='project image'
                  width={250}
                  height={250}
                  className='transition-transform duration-500 ease-in-out hover:scale-110 object-cover'
                />
            </Link>
            <span className='mt-1 text-lg line-clamp-1'>{project.title}</span>
            <span className='text-sm font-light text-muted-foreground line-clamp-1'>{project.summary}</span>

        </div>
        ))}
    </div>
  )
}
