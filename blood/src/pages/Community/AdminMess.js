import { useState } from "react"
import {useFirestore} from '../../hooks/useFirestore'



export default function AdminMess() {

    const [date,setDate] = useState(null);
    const [title,setTitle] = useState(null);
    const [body,setBody] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null);
    
    const {addDocument,response} = useFirestore('communityPosts')

    const handleSubmit =async (e) => {
        e.preventDefault();

        const post = {
            date:date,
            title:title,
            body:body,
            comments:[],
            file:thumbnail
        }
        await addDocument(post)
        console.log(post)
        
    }

    const handleFileChange = (e) => {
        setThumbnail(null);
        let selected = e.target.files[0];
    
        if (!selected) {
          setThumbnailError("Please select img");
          return;
        }
        if (!selected.type.includes("image")) {
          setThumbnailError("Selectes img should be image");
          return;
        }
    
        if (selected.size > 100000) {
          setThumbnailError("iamge size must be less than 100kb");
          return;
        }
    
        setThumbnailError(null);
        setThumbnail(selected);
      };

  return (
    <form onSubmit={handleSubmit}>
        Add Post

        <label>
            <span>Image</span>
            <input type="file"
            onChange={handleFileChange}
             />
            
        </label>

        <label>
            <span>Camp Date</span>
            <input type="date"
            onChange={(e)=>{setDate(e.target.value)}}
            value={date} />
        </label>


        <label>
            <span>Title</span>
            <input type="text"
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}  />
        </label>


        <label>
            <span>body</span>
            <input type="text"
            onChange={(e)=>{setBody(e.target.value)}}
            value={body}  />
        </label>


        <button className="btn">Submit</button>
      
    </form>
  )
}
