/* eslint-disable react/jsx-no-undef */
 import Header from "./Header"
 import "./Home.css"
 import Product from "./Product"
function Home() {


  return (
    <div className="home"> 
      <Header/>
      <img className="home_image" src=
      "https://navazonconsulting.com/wp-content/uploads/2019/01/amazon-prime-day-2018-banner.jpg" alt="home image" />
      <div className="home_row">
        <Product 
          id="1"
          title="sdfdsf sdf sdf sdf sdf sdf sdfsdfsdf sdf sdf sd f"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81fvH2OAsVL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>

          <Product 
          id="2"
          title="sdfdsf sdf sdf sdf sdf sdf sdfsdfsdf sdf sdf sd f"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81fvH2OAsVL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
      </div>
      <div className="home_row">
        <Product 
          id="3"
          title="sdfdsf sdf sdf sdf sdf sdf sdfsdfsdf sdf sdf sd f"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81fvH2OAsVL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
          
          <Product 
          id="4"
          title="sdfdsf sdf sdf sdf sdf sdf sdfsdfsdf sdf sdf sd f"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81fvH2OAsVL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
          <Product 
          id="5"
          title="sdfdsf sdf sdf sdf sdf sdf sdfsdfsdf sdf sdf sd f"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81fvH2OAsVL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
      </div>
      <Product 
          id="6"
          title="sdfdsf sdf sdf sdf sdf sdf sdfsdfsdf sdf sdf sd f"
          price={11.23}
          rating={5}
          image="https://m.media-amazon.com/images/I/81fvH2OAsVL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
    </div>
    )
  }
  
export default Home