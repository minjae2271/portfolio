import Projects from "@/components/projects"
import { getProjects } from "@/lib/projects"

export default async function ProjectPage() {
    const projects = await getProjects()
    return (
        <section className="pb-24 pt-40">
            <div className="container max-w-3xl">
                <h2 className="title mb-12">projects</h2>
                <Projects projects={projects}/>
            </div>
        </section>
    )
}