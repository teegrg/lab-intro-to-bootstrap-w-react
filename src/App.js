import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import postData from "./data/posts.json";
import Card from "./components/Card";
import { useState } from "react";


function App() {
  const [search, setSearch] = useState("") 

  function handlerChange(event) {
    setSearch(event.target.value);
  }

  const searchItem = postData.filter(el => {
    if (search === ""){
      return true //instead of el cos staisfly netlifly deployment issue//
    }else if (el.location.toLowerCase().includes(search.toLocaleLowerCase())){
      return el
    }
    return false;//added to satisfy netlify issue//
  })
  

  function handlerClick() {
    setSearch("") 
  }



  return (
    <main>
      <Navbar />
      <Header />
      <SearchBar handlerChange={handlerChange} handlerClick={handlerClick}/>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 mx-5">
          <div className="col">
            
            {searchItem.map(data =>
              <Card
                key={data.id}
                data={data}
              />
            )}
          </div>
          <div className="col-4">
            <SideBar postData={postData} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default App;
