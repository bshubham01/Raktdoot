import { useState } from "react";
import {useHistory} from "react-router-dom";
import {useUpdateProfile} from "../../hooks/useUpdateProfile"
import { useAuthContext } from "../../hooks/useAuthContext";


export default function ProfileEdit() {
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const {updateProfile}  = useUpdateProfile()
  const {user}  = useAuthContext()
  const usehistory = useHistory()

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError("Please select Image");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Please select Image File");
      return;
    }

    if (selected.size > 100000) {
      setThumbnailError("File size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    updateProfile(thumbnail)
    usehistory.push(`/profile/${user.uid}`)
  }
  return (
    <div>
      <h1>Choose img</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <input type="file" required onChange={handleFileChange} />

          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
        <button className="btn" disabled={thumbnailError ? true : false}>Save</button>
      </form>
    </div>
  );
}
