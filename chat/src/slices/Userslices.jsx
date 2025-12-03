import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "firebase/auth";
import { auth, db } from "../firebase";
import { 
  addDoc, 
  collection, 
  getDocs, 
  setDoc, 
  doc 
} from "firebase/firestore";

/* ------------------------------------------------------
   SIGN UP (Create account)
------------------------------------------------------ */
export const signUp = createAsyncThunk(
  "user/signup",
  async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
    };

    // Save to Firestore
    await setDoc(doc(db, "users", user.email), user);

    return user;
  }
);

/* ------------------------------------------------------
   SIGN IN (Login)
------------------------------------------------------ */
export const signIn = createAsyncThunk(
  "user/signin",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
    };

    return user;
  }
);

/* ------------------------------------------------------
   FETCH USERS
------------------------------------------------------ */
export const fetchUser = createAsyncThunk("user/fetch", async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => doc.data());
});

/* ------------------------------------------------------
   INITIAL STATE
------------------------------------------------------ */
const initialState = {
  users: [],
  currentUser: {},
  isLoading: false,
  error: null,
};

/* ------------------------------------------------------
   SLICE
------------------------------------------------------ */
const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    getUser: (state) => {
      state.currentUser =
        JSON.parse(localStorage.getItem("user")) || {};
    },

    logout: (state) => {
      state.currentUser = {};
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    /* ------------ SIGN UP ------------ */
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.users.push(action.payload);
      state.isLoading = false;
      alert("Sign up successfully!");
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    /* ------------ SIGN IN ------------ */
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      const user = action.payload;

      // Prevent duplicates
      if (!state.users.find((e) => e.email === user.email)) {
        state.users.push(user);
      }

      // Save login session
      localStorage.setItem("user", JSON.stringify(user));
      state.currentUser = user;
      state.isLoading = false;

      alert("Signed in successfully!");
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      alert("Sign-in failed!");
    });

    /* ------------ FETCH USERS ------------ */
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { getUser, logout } = userSlice.actions;
