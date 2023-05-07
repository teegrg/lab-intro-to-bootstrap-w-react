import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import postData from "./data/posts.json";
import Card from "./components/Card";
import images from "./images";



function App() {

  const pic = (location) => {
    Object.keys(images).find(key => key === location)
  }


  return (
    <main>
      <Navbar />
      <Header />
      <SearchBar />
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 mx-5">
          <div className="col">
            
            {postData.map(data =>
              <Card
                key={data.id}
                image={pic(data.location)}
                title={data.title}
                location={data.location}
                content={data.content}
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
