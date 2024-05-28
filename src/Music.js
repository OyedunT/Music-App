import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Img from './Img'
import App from './App';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import {ClipLoader} from 'react-spinners';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Music = () => {
  const navigate = useNavigate();
  // const route = useParams();
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
   

 useEffect(() => {
    axios.get("https://robo-music-api.onrender.com/music/my-api")
    .then((res)=>{
        console.log(res.data);
        setdata(res.data)
        setLoading(false);
     }).catch((err)=>{
        console.log(err);
        setLoading(false);
     })
 }, [])

 const more = (id) =>{
  console.log(id);
  navigate(`/playing/${id}`);
 }
 const handleSearchChange = (e) => {
   setSearch(e.target.value);
 };

 const filteredData = data.filter(item =>
   item.songTitle.toLowerCase().includes(search.toLowerCase()) ||
   item.artistName.toLowerCase().includes(search.toLowerCase())
 );

 return (
   <div className='main-container'>
   <div className='side-card'>
     <div className='icon-text'>
       <FontAwesomeIcon icon={faHome} className='home-icon' />
       <span className='home-text'>Home</span>
     </div>
     <div className='search-container'>
       <FontAwesomeIcon icon={faSearch} className='search-icon' />
       <input 
         type='text'
         className='search-input'
         placeholder='Search...'
         value={search}
         onChange={handleSearchChange}
       />
     </div>
   </div>
   <div className='music-container'>
     {loading ? (
       <div className='spinner-container'>
         <ClipLoader color={'#ffffff'} loading={loading} size={150} />
       </div>
     ) : (
       filteredData.map((el, i) =>
         <div key={i} className='card' onClick={() => more(el.id)}>
           <Img sty="card-image rounded-circle" image={el.songImage} />
           <Img text={el.songTitle} />
              <Img cont={el.artistName} />
         </div>
       )
     )}
   </div>
 </div>
 );
}

export default Music