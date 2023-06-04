import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase.config";

const dbRef = collection(db, "posts");
export const postStatus = (data) => {
  addDoc(dbRef, data)
    .then((res) => {
      console.log("Document has been uploaded successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

const queryRef = query(dbRef,orderBy("id","desc"))
export const getPosts =(setPosts)=>{
    onSnapshot(queryRef,(resp)=>{
        setPosts(
            resp.docs.map((docs)=>{
                return {...docs.data()}
            })
        )
    })

}