
function handlerClick(event) {
  // event.preventDefault()
  
}

function handlerChange(event) {
  console.log(event.target.value);
}


const SearchBar =() => {
    return (
<nav className="navbar">
  <div className="container-fluid">
  <label htmlFor="search">Search posts by location...</label>
    <form className="d-flex" role="search">
      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={handlerChange}/>
      <button className="btn btn-warning "  onClick={handlerClick}>Cancel</button>
    </form>
  </div>
</nav>
       
    )
}

export default  SearchBar;
