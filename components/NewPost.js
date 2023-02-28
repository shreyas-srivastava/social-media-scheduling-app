import { useState } from "react";
import axios from "axios";

const NewPost = () => {
  const [text, setText] = useState("");
  const [datetime, setDatetime] = useState("");
  const [platforms, setPlatforms] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDatetimeChange = (e) => {
    setDatetime(e.target.value);
  };

  const handlePlatformChange = (e) => {
    const platform = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setPlatforms([...platforms, platform]);
    } else {
      setPlatforms(platforms.filter((p) => p !== platform));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/posts", {
        text,
        datetime,
        platforms,
      });
      console.log(res.data);
      setText("");
      setDatetime("");
      setPlatforms([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-8 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="text"
          >
            Text
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="text"
            name="text"
            rows="4"
            value={text}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="datetime"
          >
            Date and Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="datetime"
            name="datetime"
            type="datetime-local"
            value={datetime}
            onChange={handleDatetimeChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Platforms
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
                name="platforms"
                value="facebook"
                checked={platforms.includes("facebook")}
                onChange={handlePlatformChange}
              />
              <span className="ml-2">Facebook</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
                name="platforms"
                value="twitter"
                checked={platforms.includes("twitter")}
                onChange={handlePlatformChange}
              />
              <span className="ml-2">Twitter</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                name="platforms"
                value="instagram"
                checked={platforms.includes("instagram")}
                onChange={handlePlatformChange}
              />
              <span className="ml-2">Instagram</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
                name="platforms"
                value="linkedin"
                checked={platforms.includes("linkedin")}
                onChange={handlePlatformChange}
              />
              <span className="ml-2">LinkedIn</span>
            </label>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Schedule Post
          </button>
        </div>
      </form>
    </div>
  );
  };
  
  export default NewPost;
  
