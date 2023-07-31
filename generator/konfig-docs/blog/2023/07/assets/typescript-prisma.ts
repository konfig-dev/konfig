import { PrismaClient, User, Post } from "@prisma/client";

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Example function making multiple database calls
async function getUsersAndPosts(
  userId: number
): Promise<{ user: User | null; posts: Post[] }> {
  try {
    // First query to fetch user data
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    // Second query to fetch user's posts
    const posts = await prisma.posts.findMany({
      where: { authorId: userId },
    });

    // Combine the user and post data
    const result = {
      user,
      posts,
    };
    return result;
  } catch (error) {
    throw new Error("An error occurred while fetching data.");
  }
}