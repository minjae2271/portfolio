import { metadata } from '@/app/layout'
import { readFileSync } from 'fs'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export type Project = {
  metadata: ProjectMetaData
  content: string
}

export type ProjectMetaData = {
  title?: string
  summary?: string
  image?: string
  url?: string
  publishedAt?: string
  slug: string
}

const rootDirectory = path.join(process.cwd(), 'content', 'projects')

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(rootDirectory, `${slug}.mdx`) 
  const project = fs.readFileSync(filePath, { encoding: 'utf-8' })

  const { data, content } = matter(project)

  console.log('projectbyslug', data)
  console.log('projectbyslug', content)

  return {
    metadata: { ...data, slug }, content
  }
  
}

export function getProjects(limit?: number): ProjectMetaData[] {
  const files = fs.readdirSync(rootDirectory)

  const projects = files
    .map(file => getProjectMetaData(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
        return 1
      }
      else {
        return -1
      }
    })

    if (limit) {
      return projects.slice(0, limit)
    }
    return projects
}

export function getProjectMetaData(filepath: string): ProjectMetaData {
  const slug = filepath.replace(/\.mdx$/, '')
  console.log(slug)
  const filePath = path.join(rootDirectory, filepath)
  console.log(filePath)
  const projectFile = fs.readFileSync(filePath)
  const { data } = matter(projectFile)

  return { ...data, slug }
}


