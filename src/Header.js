import React from 'react'
import logo from "./components/images/icons/logo.png"
import cart from "./components/images/icons/cart.png"
import search from "./components/images/icons/search-icon.png"
function Header() {
  return (
    <div>
        <header class="fixed-top">
            <div class="edu p-2">
            <div class="container  ">
                <a class="ed text-decoration-none pe-2 border-end border-1" href="#">Education Store Home</a>

                <a class="ed text-decoration-none ps-2" href="#">Exit</a>
            </div>
            </div>
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark bga   ">
                <div class="container  ">

                <button class="navbar-toggler" type="toggle" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand d-lg-none" href="#"><img src={logo}width="20px" height="20px"
                    alt=""/></a>
                <a class="navbar-brand d-lg-none" href="#"><img src={cart} width="20px" height="20px"
/></a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav  mx-auto gap-lg-2 " >
                        <form class="navbar-expand-ms d-md-none">
                            <input class="form-control me-2 mt-4 bg-dark text-light" type="search" placeholder="Search apple.com"
                            aria-label="Search" />

                        </form>
                        <hr/>

                        <a class="navbar-brand d-none d-md-block" href="#"><img src={logo} width="20px"
                            height="20px" alt=""/></a>
                        <li class="nav-item ">
                            <a class="nav-link " href="#">store</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">mac</a>
                        </li>

                        <li class="nav-item  ">
                            <a class="nav-link" href="#">ipad</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">iphone</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">watch</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">airpods</a>
                        </li>
                        <li class="nav-item  ">
                            <a class="nav-link" href="#">tv & home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">only on apple</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Accessories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Support</a>
                        </li>
                        <li class="ps-1 pe-1">
                            <a class="navbar-brand d-none d-lg-block " href="#"><img src={cart} width="20px"
                                height="20px" alt=""/></a>
                        </li>

                        <a class="navbar-brand  d-none d-lg-block" href="#"><img src={search} width="20px"
                            height="20px" alt=""/></a>

                    </ul>
                </div>


                </div>
            </nav>
            </div>
        </header>
        
    </div>
  )
}

export default Header