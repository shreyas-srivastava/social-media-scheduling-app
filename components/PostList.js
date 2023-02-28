import React from "react";
import axios from "axios";

const PostList = ({ posts, setPosts }) => {
  const handleDelete = (postId) => {
    axios.delete(`/api/posts/${postId}`).then((response) => {
      setPosts(posts.filter((post) => post._id !== postId));
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-medium mb-4">Scheduled Posts</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow overflow-hidden sm:rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {post.text}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {new Date(post.datetime).toLocaleString()}
              </p>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <ul className="flex justify-between">
                <li>
                  <ul className="flex">
                    {post.platforms.includes("twitter") && (
                      <li className="mr-3">
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.text)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                           d="M8.98 20.019c7.278 0 11.26-6.028 11.26-11.26 0-.172 0-.344-.011-.516.77-.55 1.438-1.232 1.97-2.012-.706.316-1.45.526-2.22.616.797-.477 1.41-1.23 1.698-2.122-.748.44-1.57.758-2.434.932-.701-.75-1.697-1.217-2.793-1.217-2.113 0-3.819 1.706-3.819 3.82 0 .3.022.588.083.868C5.48 9.585 3.06 7.622 1.233 4.936c-.332.572-.523 1.236-.523 1.943 0 1.333.678 2.51 1.71 3.204-.63-.021-1.221-.193-1.733-.48v.048c0 1.864 1.327 3.42 3.085 3.774-.323.087-.663.131-1.013.131-.247 0-.484-.023-.719-.067.484 1.584 1.907 2.737 3.588 2.77-1.31 1.02-2.963 1.633-4.764 1.633-.311 0-.62-.018-.927-.05C2.69 18.204.558 19.29.558 20.57c0 .923.492 1.734 1.233 2.199-.456.13-.936.2-1.426.2-.347 0-.686-.03-1.019-.092.686 1.872 2.665 3.23 4.998 3.265-1.83 1.43-4.13 2.283-6.62 2.283-.43 0-.86-.025-1.287-.075 2.358 1.512 5.14 2.393 8.126 2.393"
                           fill="currentColor"
                         />
                         </svg>
                         </a>
                         </li>
                    )};</ul>
                <li>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(post._id)}
                  >
                    <span className="sr-only">Delete</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.343 5.343a1 1 0 011.414 0L10 8.586l2.243-2.243a1 1 0 011.414 1.414L11.414 10l2.243 2.243a1 1 0 01-1.414 1.414L10 11.414l-2.243 2.243a1 1 0 01-1.414-1.414L8.586 10 6.343 7.757a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostList;