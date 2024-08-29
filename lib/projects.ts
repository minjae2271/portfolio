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

export function getProjects(): ProjectMetaData[] {
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
