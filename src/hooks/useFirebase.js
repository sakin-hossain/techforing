import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebase from "../Pages/Shared/Firebase/firebase.init";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                const destination = '/';
                navigate(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://rocky-plains-09029.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;