import { faker } from "@faker-js/faker";
import { createContext } from "react";
import { useState } from "react";

//Create a context for avoiding prop drilling
export const PostContext = createContext()

export function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}



export default function PostComponent({children}){

    const [searchQuery, setSearchQuery] = useState("");
      const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
     // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

        function handleAddPost(post) {
          setPosts((posts) => [post, ...posts]);
        }
      
        function handleClearPosts() {
          setPosts([]);
        }




    return(
        <>
        <PostContext.Provider value={
                {
                  posts : searchedPosts,
                  onClearPosts : handleClearPosts,
                  searchQuery : searchQuery,
                  setSearchQuery : setSearchQuery,
                  onAddPost : handleAddPost
                }
              }>
            {children}
            </PostContext.Provider>
        </>
    )
}