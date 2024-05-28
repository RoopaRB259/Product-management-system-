import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



function Home() {
  return (
    <>
     {/* <img id="h1"src="https://c8.alamy.com/comp/FRWR8M/product-management-word-cloud-FRWR8M.jpg"/> */}
     
    <Carousel>
      <div>
         <img src="https://www.shutterstock.com/image-photo/jakarta-indonesia-january-11-2019-260nw-1281152428.jpg" width="50%" />
         <p className="legend">Legend 1</p>
       </div>
       <div>
         <img src="https://m.media-amazon.com/images/I/41tSQSq1xJL._SX300_SY300_QL70_FMwebp_.jpg" width="50%" />
         <p className="legend">Legend 2</p>
       </div>
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZ4scMjxYhPYvODU5apSogJCe9FzjWk4l-89ZJ2c8kw&s" width="50%"  />
      <p className="legend">Legend 3</p>
     </div>
   </Carousel>
  

    </>
  )
}

export default Home