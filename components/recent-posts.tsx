import { getPosts } from "@/lib/posts";
import Posts from "./posts";
import Link from "next/link";

export default async function RecentPosts() {
    const posts = await getPosts(4)

    return (
        <section className="pb-24">
            <div>
                <h2 className="title mb-12">Recent Posts</h2>
                <Posts posts={posts} />
                <Link
                    href='/posts'
                    className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
                >
                <span>All Posts</span>
                </Link>
            </div>
        </section>
    )
}