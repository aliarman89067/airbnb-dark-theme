import React, { useState } from "react";
import axios from "axios";

export default function UploadPhoto({
  photoLink,
  setPhotoLink,
  photos,
  setPhotos,
}) {
  const [loading, setLoading] = useState(undefined);
  //Title and Para Function
  function handleText(title, para) {
    return (
      <>
        <h2 className="text-white dark:text-gray-700 text-2xl tracking-wide">
          {title}
        </h2>
        <p className="text-gray-300 dark:text-gray-600 text-md mb-2">{para}</p>
      </>
    );
  }
  //Photo With Link Function
  async function handlePhotoLink(e) {
    e.preventDefault();
    if (photoLink) {
      setLoading(true);
      const { data } = await axios.post("/photo-link", { link: photoLink });
      setPhotos([...photos, data]);
      setLoading(false);
      setPhotoLink("");
    } else {
      alert("First Enter Photo Link !");
    }
  }
  //Photo From Computer Function
  async function uploadPhoto(e) {
    const file = e.target.files;
    const data = new FormData();
    for (let i = 0; i < file.length; i++) {
      data.append("photos", file[i]);
    }
    const { data: photoData } = await axios.post("/upload-photo", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setPhotos([...photos, ...photoData]);
  }
  //Photo Delete Function
  function handleDeletePhoto(photoId, e) {
    e.preventDefault();
    setPhotos([...photos.filter((photo) => photo !== photoId)]);
  }
  //Photo Listing Function
  function handleListingPhoto(photoId, e) {
    e.preventDefault();
    setPhotos([photoId, ...photos.filter((photo) => photo !== photoId)]);
  }
  return (
    <div className="my-2">
      {handleText("Photos", "The photos you submit will be show in gallery")}
      <div className="w-full border dark:border-gray-700 p-2 rounded-xl">
        {handleText("", "Add photo by pasting any image link")}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter image link"
            value={photoLink}
            onChange={(e) => setPhotoLink(e.target.value)}
          />
          <button
            onClick={handlePhotoLink}
            disabled={loading}
            className="bg-primary dark:bg-lPrimary w-32 text-white rounded-lg"
          >
            {loading ? "Loading" : "Add Photo"}
          </button>
        </div>
        {handleText("", "Or upload with your computer")}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-3">
          {photos.length > 0 &&
            photos.map((photo) => (
              <div key={photo} className="h-[160px] relative">
                <img
                  className="rounded-lg h-full w-full object-cover"
                  src={`http://localhost:4000/uploads/${photo}`}
                  alt=""
                />
                <button
                  onClick={(e) => handleDeletePhoto(photo, e)}
                  className="absolute top-2 right-2 bg-[rgba(0,0,0,.6)] p-1 rounded-full text-white cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => handleListingPhoto(photo, e)}
                  className="absolute top-2 left-2 bg-[rgba(0,0,0,.6)] p-1 rounded-full text-white cursor-pointer"
                >
                  {photos[0] === photo ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          <label className="flex flex-col items-center justify-center gap-2 bg-gray-600 dark:bg-gray-400 h-[160px] rounded-lg text-white text-center cursor-pointer">
            Upload
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <input
              type="file"
              name="photos"
              multiple
              className="hidden"
              onChange={uploadPhoto}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
