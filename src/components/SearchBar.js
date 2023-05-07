
function handlerClick(event) {
  // event.preventDefault()

}

function handlerChange(event) {
  console.log(event.target.value);
}


const SearchBar = () => {
  return (
    <div className="container mt-4 mb-2">
      <div className="row ">
        <div className="col-auto pt-1" htmlFor="search">Search posts by location...</div>
        <input className="form-control me-3 col" type="search" placeholder="Search" aria-label="Search" onChange={handlerChange} />
        <button className="btn btn-warning col-auto" onClick={handlerClick}>Cancel</button>
      </div>
    </div>
   

  )
}

export default SearchBar;
