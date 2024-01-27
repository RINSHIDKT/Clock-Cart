import React, { useEffect, useState } from 'react'
import './Index.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

const Index = () => {

  const [id, setId] = useState("")
  const naviagate = useNavigate()
  // const navigateItself=useNavigate()
  const [msg, setMsg] = useState("")
  const value = JSON.parse(localStorage.getItem('customer_token'));

  const getName = async () => {
    const res = await axios.get("http://localhost:3003/wholewatch/CustHome", {
      headers: { Authorization: `Bearer ${value}` },
    })
    console.log(res.data);
    setMsg(res.data.msg)
    setId(res.data.id)
  }
  useEffect(() => {
    getName()
  }, [])
  console.log(id);


  const Logout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    window.location.reload()
    if (isConfirmed) {
      localStorage.clear();
      naviagate("/")

    }
  };

  const [getProducts, setProducts] = useState([])

  
  const getAllProducts = async () => {
    const res = await axios.get("http://localhost:3003/wholewatch/getAllProducts")
    // console.log(res.data);
    setProducts(res.data)
    console.log(getProducts);
  }
  useEffect(() => {
    getAllProducts()
  }, [])


  // const gotoCartOrWishList=(e)=>{
  //   e.preventDefault()
  //   if(msg.length===0){
  //     alert ("Please Login")
  //     navigateItself("/CustomerLogin")
  //   }
  // }






  return (
    <div>

      <div className="main-ind">
        {/* <div className="main-sub-ind">

          <div className="log-phone-ind">
            <span><i className="fa fa-phone" aria-hidden="true" ></i></span><Link to={`/whishList/${id}`}  id='Linkkkkss'><span id='ind-num'>WISH</span></Link>
          </div>

          <div className="text-sub-ind">
            <p></p>
          </div>

          <div className="log-cart-ind">
            <span><Link to={`CartCustomer/${id}`} id='Linkkkkss' > CART</Link> </span> <span><Link to={'/CustomerReg'} id='Linkkkkss'><span id='log-ind-l'>LOGIN</span></Link>  OR REGISTER</span>
          </div>

        </div> */}

      <Navbar />

      </div>


    



      <div className="center-ind">
        <img src="../../../public/OneOClock.png" alt="" />
      </div>

      <div className="container-fluid">
        <nav className="navbar-id-color navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-main-ind" id="navbarNav">

              <div>
                <a className="nav-link active" aria-current="page" href="#" id="change-section"><span id='color-nav-ind'>HOME</span></a>
              </div>

             


              <div>
                <div><a className="nav-link active" href="#"><span id='color-nav-ind2'>LUXURY</span></a></div>
              </div>



              <div><a className="nav-link active" href="#"><span id='color-nav-ind2'>OFFERS</span></a></div>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search " />
              </form>


              <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
              </div>


            </div>
          </div>
        </nav>
      </div>


      <div className="HOME-IND">
        <span>HOME @ Collections &   Guess Collections </span>
        <div className='home-ind-2'>
          {msg ? (
            <>
              <Link className="nav-link mx-2 text-uppercase active" to='/' id="sign-ind"><i className="fa fa-user" aria-hidden="true"></i>   {msg}  <button className='logout-ind' onClick={Logout}>Logout</button></Link>

            </>
          ) : (
            <Link className="nav-link mx-2 text-uppercase active" to='/CustomerLogin' id="sign-ind">Sign in</Link>
          )}
        </div>
      </div>


      <div className="banner">


        <div className="mainbtn">








        </div>



      </div>



      <div className="main-ind-brown">

      </div>


      





      <div className='whole-data-and-img-sect'>
        <div className="ind-6images-full-section"><span>CATEGORIES</span></div>
        <div className="ind-6images-full-section-2"><span>DIGITAL</span></div>

        <div className="ind-classic">
          {
            getProducts.filter((data) => data.category_name === 'DIGITAL')
              .map((data, index) => (
                <Link key={index} to={`/productDetailsCustomer/${data._id}`} className='Link-view-products-ind'>
                  <div className="ind-1st-image">
                    <img src={data.banner} alt="" />
                  </div>
                  <div className="prices-ind">
                    <div><p className='price-ind'>₹ {data.price}</p></div>
                    <div><strike><p className='og-price'>₹ 79988</p></strike></div>
                  </div>

                </Link>
              ))
          }

        </div>



        <div className="ind-6images-full-section-2"><span>ANALOG</span></div>

        <div className="ind-classic">
          {
            getProducts.filter((data) => data.category_name === 'ANALOG')
              .map((data, index) => (
                <Link key={index} to={`/productDetailsCustomer/${data._id}`} className='Link-view-products-ind'>
                  <div className="ind-1st-image">
                    <img src={data.banner} alt="" />
                  </div>
                  <div className="prices-ind">
                    <div><p className='price-ind'>₹ {data.price}</p></div>
                    <div><strike><p className='og-price'>₹ 99988</p></strike></div>
                  </div>

                </Link>
              ))
          }

        </div>
    

      </div>
      <div className="banner-ind-tissot">

        <p id='banner-para-tissot'>DIGITAL</p>
        <button id='para-btn-discover'>Discover</button>

      </div>
      
      <div className="banner-ind1-tissot">

        <p id='banner-para-tissot'>ANALOG</p>
        <button id='para-btn-discover'>Discover</button>

      </div>

      <div className="About-tissot-ind">
        <div className="About-tissot-ind-contents">
          <h5>ANALOG CLOCK</h5>
          <p id='para-tissot'>An analog clock is a clock or watch that has moving hands and (usually) hours marked from 1 to 12 to show you the time. Some have Roman Numerals (I, II, III, etc) instead, or no numbers at all, instead only relying on the positioning of the hands and what angle they're at to indicate the time.</p>
        </div>
        <div className="About-tissot-ind-img">
          <img src="/analog-about.avif" alt="" />
        </div>

      </div>


      <div className="About-tissot-ind">
        <div className="About-tissot-ind-contents">
          <h5>DIGITAL CLOCK</h5>
          <p id='para-tissot'>A digital clock displays the time digitally (i.e. in numerals or other symbols), as opposed to an analogue clock. Digital clocks are often associated with electronic drives, but the "digital" description refers only to the display, not to the drive mechanism.</p>
        </div>
        <div className="About-tissot-ind-img">
          <img src="/digi-clock-new-img.jpg" alt="" />
        </div>

      </div>








      <div className="footer-main">
        <div className="footer-icons-main">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <div className="footer-flex-main-contents">
          <div className="footer-first">
            <h3>ABOUT US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-second">
            <h3>Newsletter</h3>
            <div><a href="">SUBSCRIBE</a></div>
          </div>
          <div className="footer-third">
            <h3>NEED HELP</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed doLorem ipsum dolor sit amet,</p>
          </div>
          <div className="footer-four">
            <h3>CONTACT US</h3>
            <div className="footer-four-for-margin">
              <div><i className="fa fa-map-marker" aria-hidden="true"></i><span><a href="">Gb road 123 london Uk</a></span>
              </div>
              <div><i className="fa fa-phone" aria-hidden="true"></i> <span><a href="">+01 12345678901</a></span></div>
              <div><i className="fa fa-envelope" aria-hidden="true"></i><span><a href="">demo@gmail.com</a></span></div>
            </div>
          </div>





        </div>

      </div>






    </div>
  )
}

export default Index
