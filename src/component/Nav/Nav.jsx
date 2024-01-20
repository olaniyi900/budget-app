

function NavBar() {
   

    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Budget App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div classNmae="collapse navbar-collapse ml-5" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">Categories <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">Transaction</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">Overview</a>
      </li>
      
    </ul>
  </div>
</nav>
        

    )
    
}

export default NavBar;