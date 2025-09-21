const url = "https://inote-book-backend-chi.vercel.app"

export const allAPI ={
   Signup : {
  url : `${url}/api/user/createuser`
},
Login : {
  url : `${url}/api/user/login`
},
addNote : {
  url : `${url}/api/note`
},
getNoteByUser : {
  url : `${url}/api/note/usernote`
},
updateNote : {
  url : `${url}/api/note`
},
fetchUser : {
  url : `${url}/api/auth/verify`
}
}
