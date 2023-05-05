import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import postData from "./data/posts.json";
import Card from "./components/Card";
import images from "./images";
import { useState } from "react";


function App() {

  const pic = (location) => {
    console.log(); (Object.keys(images).find(key => key == location))
  }

  // const [card, setCard] = useState("")

  // function search() {
  //   if (postData.includes(handlerChange)){
  //     setCard()
  //   }
  // }

  return (
    <main >
      <Navbar />
      <Header />
      <SearchBar />
      {postData.map(data =>
        <Card
          key={data.id}
          image={pic}
          title={data.title}
          location={data.location}
          content={data.content}
        />
      )}
      <SideBar postData={postData} />
      <Footer />
    </main>
  )
}

export default App;
