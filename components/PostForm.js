import { useState } from "react";
import axios from "axios";
import moment from "moment";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const PostForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [datetime, setDatetime] = useState("");
  const [platforms, setPlatforms] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const post = { text, datetime, platforms };
    try {
      const res = await axios.post("/api/posts", post);
      onAdd(res.data);
      setText("");
      setDatetime("");
      setPlatforms([]);
      // toast.success("Post scheduled successfully!");
    } catch (error) {
      // toast.error("Error scheduling post.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-6">
      <div>
        <label htmlFor="text" className="block font-medium text-gray-700">
          Text
        </label>
        <div className="mt-1">
          <textarea
            id="text"
            name="text"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="datetime" className="block font-medium text-gray-700">
          Date and Time
        </label>
        <div className="mt-1">
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={moment(datetime).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) => setDatetime(e.target.value)}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="platforms" className="block font-medium text-gray-700">
          Platforms
        </label>
        <div className="mt-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="facebook"
              name="platforms"
              value="facebook"
              checked={platforms.includes("facebook")}
              onChange={(e) =>
                setPlatforms(
                  e.target.checked
                    ? [...platforms, e.target.value]
                    : platforms.filter((p) => p !== e.target.value)
                )
              }
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
                        <label htmlFor="facebook" className="ml-3">
              <div className="flex items-center">
                <FaFacebook className="h-5 w-5 text-gray-500 mr-2" />
                Facebook
              </div>
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="twitter"
              name="platforms"
              value="twitter"
              checked={platforms.includes("twitter")}
              onChange={(e) =>
                setPlatforms(
                  e.target.checked
                    ? [...platforms, e.target.value]
                    : platforms.filter((p) => p !== e.target.value)
                )
              }
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="twitter" className="ml-3">
              <div className="flex items-center">
                <FaTwitter className="h-5 w-5 text-gray-500 mr-2" />
                Twitter
              </div>
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="instagram"
              name="platforms"
              value="instagram"
              checked={platforms.includes("instagram")}
              onChange={(e) =>
                setPlatforms(
                  e.target.checked
                    ? [...platforms, e.target.value]
                    : platforms.filter((p) => p !== e.target.value)
                )
              }
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="instagram" className="ml-3">
              <div className="flex items-center">
                <FaInstagram className="h-5 w-5 text-gray-500 mr-2" />
                Instagram
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Schedule Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;

