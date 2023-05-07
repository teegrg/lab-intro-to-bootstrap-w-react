const Navbar =() => {
    return (
        <nav className="navbar navbar-expand-lg mx-5">
      <div className="container-fluid ">
        <h1 className="">Travel <span className="script-font text-warning" >Blog</span></h1>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">           
            <a className="nav-link mx-4" href="#">About</a>
            <a className="nav-link" href="#">Popular Post</a>           
          </div>
        </div>
      </div>
    </nav>
    )
}


export default  Navbar;
