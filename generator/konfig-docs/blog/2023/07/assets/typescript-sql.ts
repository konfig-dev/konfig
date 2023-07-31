import { Pool, PoolConfig, QueryResult } from "pg";

// Database configuration
const dbConfig: PoolConfig = {
  user: "postgres_username",
  password: "postgres_password",
  host: "localhost",
  port: 5432,
  database: "my_database",
};

// Create a connection pool
const pool = new Pool(dbConfig);

// TypeScript interfaces for the data types
interface UserData {
  id: number;
  username: string;
  email: string;
}

interface PostData {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

interface UserWithPosts {
  user: UserData | null;
  posts: PostData[];
}

// Example function making multiple database calls
async function getUsersAndPosts(userId: number): Promise<UserWithPosts> {
  try {
    // First query to fetch user data
    const userQuery = "SELECT * FROM users WHERE id = $1";
    const userResult: QueryResult<UserData> = await pool.query(userQuery, [
      userId,
    ]);
    const user: UserData | null = userResult.rows[0];

    // Second query to fetch user's posts
    const postQuery = "SELECT * FROM posts WHERE user_id = $1";
    const postResult: QueryResult<PostData> = await pool.query(postQuery, [
      userId,
    ]);
    const posts: PostData[] = postResult.rows;

    // Combine the user and post data
    const result: UserWithPosts = {
      user,
      posts,
    };
    return result;
  } catch (error) {
    throw new Error("An error occurred while fetching data.");
  }
}
