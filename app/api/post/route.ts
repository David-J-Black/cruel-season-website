import {getPosts} from "@/app/api/database";
import Post from "@/model/post";
import {NextResponse} from "next/server";

export async function GET(request: Request, response: Response) {

    let status: number = 0
    let responseBody: Post[] | undefined;

    console.debug("Gonna get those dang posts for the client (This is the serverside talking!)");
    await getPosts()
        .then((posts: Post[]) => {
            console.debug("Got posts!", posts);
            status = 200;
            responseBody = posts
        });
    const outgoingResponse = NextResponse.json(responseBody);
    console.debug("Here are the posts i'm about to return!", outgoingResponse);
    return outgoingResponse;
}