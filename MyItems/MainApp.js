import React from 'react'
import "./Mainapp.css"
import Background from "./images/Background-img.png"
import BookOfNight from "./images/demo-book.jpg"
import TomGates from "./images/Tom-gates.jpeg"
import WimpyKid from "./images/wimpy-kid.jpeg"

export default function mainApp() {
  return (
    <div>
        <section className="header">
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-light" href="/home">QRIUS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse nav-navbar navbar-collapse" id="navbarSupportedContent">
{/* ----------------------------------------Search Bar--------------------------------- */}

      <form className="d-flex main-search" role="search">
        <input className="form-control searchbar me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn search-btn btn-outline-success" type="submit text-light">Search</button>
      </form>

{/* --------------------------------------------------------------------------------------------- */}
        <ul className="navbar-nav main-navbar me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-light" href="/features">Features</a>
            </li>
            <li className="nav-item nav-item dropdown">
            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genres
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <table>
                <tbody>
                <tr>
                <td><li><a className="dropdown-item" href="#">Action</a></li></td>
                <td><li><a className="dropdown-item" href="#">Fantasy</a></li></td>
                </tr>
                <tr>
                <td><li><a className="dropdown-item" href="#">Biography</a></li></td>
                <td><li><a className="dropdown-item" href="#">Science Fiction</a></li></td>
                </tr>
                <tr>
                <td><li><a className="dropdown-item" href="#">Mystery</a></li></td>
                <td><li><a className="dropdown-item" href="#">Horror</a></li></td>
                </tr>
                <tr>
                <td><li><a className="dropdown-item" href="#">Philosophy</a></li></td>
                <td><li><a className="dropdown-item" href="#">Short Stories</a></li></td>
                </tr>
                <tr>
                <td><li><a className="dropdown-item" href="#">Educational</a></li></td>
                <td><li><a className="dropdown-item" href="#">Article</a></li></td>
                </tr>
                <tr>
                <td><li><a className="dropdown-item" href="#">Historical Fiction</a></li></td>
                <td><li><a className="dropdown-item" href="#">Mythological</a></li></td>
                </tr>
                <tr>
                <td><li><a className="dropdown-item" href="#">Self Help</a></li></td>
                <td><li><a className="dropdown-item" href="#">Personal Development</a></li></td>
                </tr>
                </tbody>
            </table>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link pricing text-light" href='#pricing'>Pricing</a>
            </li>
            
            <li className="nav-item signIn">
            <a href="/signin"><button type="button" className="btn btn-md signIn btn-light">Sign In</button></a>
            </li>
            <li className="nav-item">
            <a href="/login"><button type="button" className="btn btn-md login-btn logIn btn-light">Log In</button></a>
            </li>
      </ul>
            </div>
            </div>
        </nav>
    </section>
{/* // ---------------------------------------------------------------------Title------------------     */}
    <div>
      <section className="Title">
        {/* <div className="background-img">
          <img className='bg-img' src={Background} alt="img" />
        </div> */}
        <div className="col-lg-6 col-md-12 col-sm-12">
        <h1 className="big-heading">What books are you looking for?</h1>
        <p className='title-p'>Discover your books by checking in our exclusive section of exclusive books</p>
        <button type="button" className="btn btn-lg btn-outline-light btn-lg explore-btn">Explore </button>
      </div>
      </section>
    </div>

{/* ---------------------------------------------Carousal------------------ */}

<div>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">

  <div className="row">


    
  </div>

      <div className="card-group">
        <div className="book-cols  col-lg-4">
            <div className="card">
            <img src={BookOfNight} className="card-img-top BookOfNight" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn borrow-btn btn-primary">Borrow Now!</a>
            </div>
          </div>
        </div>

          <div className="book-cols  col-lg-4">
                <div className="card">
              <img src={TomGates} className="card-img-top TomGates" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn borrow-btn btn-primary">Borrow Now!</a>
              </div>
            </div>
          </div>


        <div className="book-cols   col-lg-4">
            <div className="card">
            <img src={WimpyKid} className="card-img-top WimpyKid" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn borrow-btn btn-primary">Borrow Now!</a>
            </div>
          </div>
            </div> 
        </div>

        

    </div>
    <div className="carousel-item">

      <div className="card-group">
      <div className="book-cols   col-lg-4">
        <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>

      <div className="book-cols   col-lg-4">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">8Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div className="book-cols   col-lg-4">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

        </div>

    </div>
    <div className="carousel-item">

    <div className="card-group">
    <div className="book-cols   col-lg-4">
      <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>

    <div className="book-cols   col-lg-4">
      <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">5Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    </div>

    <div className="book-cols   col-lg-4">
      <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>  
    </div>

        </div>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


</div>


{/* -------------------------------------------------------Pricing--------------- */}

<div>
      <div id="pricing">
      <div className="container">
        <div className="card-group price-grp">

      <div className="col-lg-4">
        <div className="card mr-2">
          <div className="card-head"><h1>Pro</h1></div>
          <hr />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>


      <div className="col-lg-4">
          <div className="card mr-2">
          <div className="card-head"><h1>Premium</h1></div>
          <hr />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          </div>
      </div>

      <div className="col-lg-4">
        <div className="card mr-2">
        <div className="card-head"><h1>Premium Pro</h1></div>
        <hr />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>

        </div>




      </div>

      </div>
    </div>

    {/* --------------------------------------------Foooter-------------------------------      */}

    <div>
      <div id="Footer">
        <div className="social">

          <ul>

            <li><div className="twitter footer-link">
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div></li>

            <li><div className="facebook footer-link">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
          </div></li>

          <li><div className="instagram footer-link">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div></li>

          <li><div className="gmail footer-link">
            <a href="#"><i className="fa-solid fa-envelope"></i></a>
          </div></li>

          </ul>

        </div>
      </div>
    </div>
    </div>
  )
}
