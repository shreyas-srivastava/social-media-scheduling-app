import { useState } from "react";
import axios from "axios";
const CreatePost = () => {
    const [text, setText] = useState("");
    const [datetime, setDatetime] = useState("");
    const [platforms, setPlatforms] = useState([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  
    const handleTextChange = (e) => {
      setText(e.target.value);
    };
  
    const handleDatetimeChange = (e) => {
      setDatetime(e.target.value);
    };
  
    const handlePlatformChange = (e) => {
      const platform = e.target.value;
      if (selectedPlatforms.includes(platform)) {
        setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
      } else {
        setSelectedPlatforms([...selectedPlatforms, platform]);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/posts", {
          text,
          datetime,
          platforms: selectedPlatforms,
        });
        setText("");
        setDatetime("");
        setPlatforms([]);
        setSelectedPlatforms([]);
        toast.success("Post created!");
      } catch (err) {
        toast.error("Error creating post");
      }
    };
  
    return (
      <div className="mt-8 max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
              Text
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="datetime"
            >
              Datetime
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="datetime"
              type="datetime-local"
              value={datetime}
              onChange={handleDatetimeChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Platforms
            </label>
            {platforms.map((platform) => (
              <div key={platform}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    value={platform}
                    checked={selectedPlatforms.includes(platform)}
                    onChange={handlePlatformChange}
                  />
                  <span className="ml-2 text-gray-700">{platform}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Post
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setPlatforms(["Facebook", "Twitter", "Instagram"])}
            >
              Add Platforms
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default CreatePost;
  