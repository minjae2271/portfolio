import path from "path"
import fs from 'fs'
import matter from "gray-matter"

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export type Post = {
    metadata: MetaData
    content: string
}

export type MetaData = {
    title?: string
    summary?: string
    image?: string
    author?: string
    publishedAt?: string
    slug: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' })

    const { data, content } = matter(fileContents)

    return {
        metadata: { ...data, slug }, content
    }
}

export async function getPosts(limit?: number): Promise<MetaData[]>  {
    const files = fs.readdirSync(rootDirectory)

    const posts = files
        .map(file => getPostMetaData(file))
        .sort((a,b) => {
            if ( new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
                return 1   
            } else {
                return -1
            }
        })
    if (limit) {
        return posts.slice(0, limit)
    }

    return posts
}

export function getPostMetaData(filepath: string): MetaData {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'})
    const { data } = matter(fileContent)
    return { ... data, slug }
}