import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState("")
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (name, email, phone, dateOfBirth, bloodGroup, password, address) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      // Create a user document
      await projectFirestore.collection('users').doc(res.user.uid).set({
        uid: res.user.uid,
        name,
        email,
        phone,
        dateOfBirth,
        bloodGroup,
        address,
        password,
        profileURL: "https://firebasestorage.googleapis.com/v0/b/raktduth.appspot.com/o/profile.png?alt=media&token=1b2ed26d-d694-4a87-a9d9-b50be719584f"
      ,
      blogs:[]
      })

      // Dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use. Please choose another email.')
      } else {
        setError(err.message)
      }

      if (!isCancelled) {
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}
