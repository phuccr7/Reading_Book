import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import Style from "../../components/userPage/style1.module.css"

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    async function getBookDetails(){
      try{
        // const response = await fetch(`${URL}${id}.json`);
        // const data = await response.json();
        // console.log(data);

        // if(data){
          const {description, title, covers, author} = {description: "description description description description description description description description description description description description description description description description description description description description description description description description", title: "Teamfight tactics", covers: "https://images.unsplash.com/photo-1621827979802-6d778e161b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", author: "Thanh"};
          const newBook = {
            description: description,
            title: title,
            author: author,
            cover_img: covers 
          };
          setBook(newBook);
        // } else {
        //   setBook(null);
        // }
        // setLoading(false);
      } catch(error){
        console.log(error);
        // setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

//   if(loading) return <Loading />;

  return (
    <section className={Style.bookDetails}>
      <div className='container'>
        
        <div className={Style.bookDetailsContent}>
          <div className={Style.bookDetailsImg}>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className={Style.bookDetailsInfo}>
            <div className={Style.bookDetailsItem}>
              <span className='fw-6 fs-24' style={{fontWeight:"bold",fontSize:"30px"}}>{book?.title}</span>
            </div>
            <div className={Style.bookDetailsItem}>
              <span className='fw-6 fs-24' >Tác giả: {book?.author}</span>
            </div>
            <div className={Style.bookDetailsItem}>
              <span>Nội dung: {book?.description}</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails