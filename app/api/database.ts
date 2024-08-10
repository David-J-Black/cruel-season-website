import path from "node:path";
import {Database, OPEN_CREATE, OPEN_READWRITE} from "sqlite3";
import Post from "@/model/post";

const dbPath = path.join(process.cwd(), "cruel_season.db");
export const db = new Database(
  dbPath,
  OPEN_READWRITE | OPEN_CREATE,
    (error: Error | null) => {
      if (!!error) {
        console.error("Problem initializing DB!", error);
        throw error;
      }
      console.log("Connected to database");
    }
);

const GET_ALL_POSTS_SQL = "select * from post;"

export async function apiGet(query: string) {
    return await new Promise((resolve, reject) => {
        db.all(query, (err: Error, row) => {
            if (err) {
                console.error("Problem with apiGet", err);
                return reject(err);
            }
            return resolve(row);
        });
    });
}

export async function getPosts(): Promise<Post[]> {
    return await apiGet(GET_ALL_POSTS_SQL) as Post[];
}
