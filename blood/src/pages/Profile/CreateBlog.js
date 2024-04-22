import { useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useFirestore } from '../../hooks/useFirestore';
import { useDocument } from "../../hooks/useDocument";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import firebase from "firebase/app";
import "firebase/storage";


export default function CreateBlog() {
  const history = useHistory();


  const { user } = useAuthContext();
  const { updateDocument, response } = useFirestore("users");
  const { document, error } = useDocument("users", user.uid);

  const {addDocument} = useFirestore('AllBlogs');


  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const storageRef = firebase.storage().ref();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!thumbnail) {
      setThumbnailError("Please select an image");
      return;
    }

    // Upload thumbnail image to Firebase Storage
    const fileRef = storageRef.child(`thumbnails/${thumbnail.name}`);
    await fileRef.put(thumbnail);

    // Get the download URL for the uploaded image
    const imageUrl = await fileRef.getDownloadURL();

    const userBlog = {
      date: date,
      title: title,
      body: body,
      comments: [],
      thumbnailUrl: imageUrl, // Store image URL in Firestore
      createdAt: timestamp.fromDate(new Date()),
      id:Math.floor(Math.random()*100)
    };

    const Blog = {
      uid:user.uid,
      profileImg:document.profileURL,
      date: date,
      title: title,
      body: body,
      comments: [],
      thumbnailUrl: imageUrl, // Store image URL in Firestore
      createdAt: timestamp.fromDate(new Date()),
      id:Math.floor(Math.random()*100)
    };

    await addDocument(Blog)

    await updateDocument(user.uid, {
      blogs: [...document.blogs, userBlog]
    });

    if (!response.error) {
      // Clear form state after successful submission
      setBody('');
      setDate('');
      setThumbnail(null);
      setTitle('');
      setThumbnailError(null);
    }

    if(!response.error){

        history.push("/host/success")

    }

  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError("Please select an image");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file should be an image");
      return;
    }

    if (selected.size > 100000) {
      setThumbnailError("Image size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Blog</h3>
      <label>
        <span>Image</span>
        <input type="file" onChange={handleFileChange} required />
        {thumbnailError && <p className="error">{thumbnailError}</p>}
      </label>
      <label>
        <span>Camp Date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
      </label>
      <label>
        <span>Title</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </label>
      <label>
        <span>Body</span>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        />
      </label>
      <button className="btn" type="submit">Submit</button>
    </form>
  );
}
