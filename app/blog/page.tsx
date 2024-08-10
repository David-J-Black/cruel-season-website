'use server'
import appStyles from "@/appStyle";
import Post from "@/model/post";
import {getPosts} from "@/app/api/database";
import CruelSeasonCard from "@/component/CruelSeasonCard";
import CruelSeasonText from "@/component/CruelSeasonText";

export default async function BlogPage() {
    let posts: Post[] = await getPosts();

    return (
        <div style={appStyles.body}>
            <CruelSeasonText type={'title'}>
                Blog
            </CruelSeasonText>
            {posts.map((post, index) => (
                <CruelSeasonCard key={index}>
                    <CruelSeasonText type={'title'}>
                        {post?.title}
                    </CruelSeasonText>
                    <CruelSeasonText type={'normal'}>
                        {post?.message}
                    </CruelSeasonText>
                    <CruelSeasonText type={'normal'}>
                        {post?.create_dt}
                    </CruelSeasonText>
                </CruelSeasonCard>
            ))}
        </div>
    )
}