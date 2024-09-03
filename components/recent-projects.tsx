import { getProjects } from "@/lib/projects"

export default async function RecentProjects() {
    const projects = await getProjects(4)
    return (
        <section className="w-full">
            <div className="">
                <h2 className="title mb-12">My Projects</h2>
                
            </div>  
        </section>
    )
}