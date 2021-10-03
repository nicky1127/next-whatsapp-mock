import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import Login from "./login";
import Loading from "../components/Loading";
import { auth, db } from "../firebase";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const createUser = async () => {
      // await setDoc(doc(db, "users", user.uid), {
      //   email: user.email,
      //   lastSeen: serverTimestamp(),
      //   photoURL: user.photoURL,
      // });
      const docRef = doc(db, "users", user.uid);

      await setDoc(
        docRef,
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    };
    if (user) {
      createUser();
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
