import {NavLink,Link} from 'react-router-dom';

const Navbar =()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/">
        <h1 className="text-center fs-3" >React <span className="text-primary">Project</span> </h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end navbarClass" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
        <NavLink to="/" activeClassName="active" className="nav-link active">Characters </NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/episodes" className="nav-link active">Episodes </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/location" className="nav-link active">Location </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar