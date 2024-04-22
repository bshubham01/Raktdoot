import { useState,useEffect } from "react"
import { projectFirestore,projectStorage } from "../firebase/config"
import { useAuthContext } from './useAuthContext'

export  function useUpdateProfile() {

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { user} = useAuthContext()

    const updateProfile = async (thumbnail) =>{
        setError(null);
        setIsPending(true);

        try{

            const res = user.uid;

            // upload user thumbnail
            const uploadPath = `thumbnails/${res}/${thumbnail.name}`
            const img = await projectStorage.ref(uploadPath).put(thumbnail);
            const imgUrl = await img.ref.getDownloadURL();

            // add display name and thumbnail to user
            await user.updateProfile({thumbnail,profileURL:imgUrl})
            console.log(user.profileURL)

            await projectFirestore.collection("users").doc(res).update({
                profileURL:imgUrl
            })

            setIsPending(false);
        }
        catch (err) {
            if (!isCancelled) {
                setIsPending(false);
                setError(err.message);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
      }, [])
  
      return { updateProfile, isPending, error  }
    }