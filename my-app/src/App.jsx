import './App.css';
import Header from './components/header/Header.jsx';

import Footer from './components/footer/Footer.jsx';
import Overlay from './components/overlay/Overlay';
import React from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Favorites from './components/favorites/Favorites';
import Home from './components/Home';
import Form from './components/form/Form';

export const AppContext = React.createContext({})

function App() {
//состояние корзины
const [overlayOpen, setOverlayOpen] = React.useState(false)
//хранение данных туров
const [tours, setTours ] = React.useState([])
//для хранения объектов корзины
const[overlayItems, setOverlayItems] = React.useState([])
//для поиска
const[search, setSearch] = React.useState('')
//Для хранения избранных заявок
const[favorites, setFavorites] = React.useState([])


React.useEffect(() => {
//     fetch('https://63819cad9842ca8d3c965d38.mockapi.io/tours').then((resJson)=>{
//         return resJson.json()
//     }).then((myJson)=> {
//     setTours(myJson)
// });
async function axiosData(){

const toursData = await axios.get('https://63819cad9842ca8d3c965d38.mockapi.io/tours')


const cartData = await axios.get('https://63819cad9842ca8d3c965d38.mockapi.io/cart')

const favoritesData = await axios.get('https://63819cad9842ca8d3c965d38.mockapi.io/favorites')



setOverlayItems (cartData.data)
setFavorites(favoritesData.data)
setTours(toursData.data)
}
axiosData();

}, [])



const deleteItems=(id)=>{

    console.log(id);
    axios.delete(`https://63819cad9842ca8d3c965d38.mockapi.io/cart/${id}`)
    setOverlayItems((objDelete)=> objDelete.filter(item => item.id !== id))

}

const isAdded =(myId)=>{

    return overlayItems.some((objIsAdded) => objIsAdded.myId === myId)


}

const isFav=(myId)=>{

return favorites.some((objIsFav)=> objIsFav.myId === myId)

}



return (
   <AppContext.Provider
   value={{
     tours,
     setTours,
     overlayItems,
     setOverlayItems,
     favorites,
     setFavorites,
     isAdded,
     isFav



   }


   }
>
<div className="app">
    
        {overlayOpen? 
        <Overlay 

      total_price={
     overlayItems.reduce((elements = overlayItems.length, obj) => 
     
     
     elements + obj.price, 0)

      }

        overlayProp={overlayItems} 
        closeOverlay ={()=>  setOverlayOpen(false)}
        deleteItems={deleteItems}
        />: null }
        

    
    <Header openOverlay = {()=> setOverlayOpen(true)} overlayItems={overlayItems}/>

    
    <Routes>



          <Route path='/favorites'
            element={

                <Favorites

                item={tours} 
                overlayItems={overlayItems} 
                setOverlayItems={setOverlayItems}
                favorites={favorites}
                setFavorites={setFavorites}
                />
            }
                 />
                  <Route path='/'
            element={

                <Home
       item={tours} 
        overlayItems={overlayItems} 
        setOverlayItems={setOverlayItems}
        setSearch={setSearch}
        search={search}
       favorites={favorites}
       setFavorites={setFavorites}
                
                />
            }
                 />


<Route path = '/form'
 element={
  <Form/>
 }

 />

          
          
          </Routes>
<Footer/>
        
        
        

</div>

</AppContext.Provider>
)

}
export default App
