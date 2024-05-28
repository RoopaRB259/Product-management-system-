import React from 'react'
import './Logout.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Logout() {
  return (
    <>
    
    {/* <img  id="img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0pgnADav1gbAnhp-AX42SKVsAUE_celul6BMLh1cw3z0kML9LQEeEJKRoSq9CiGu-g&s"/> */}
    
    <Carousel>
      <div>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjbL9k3zRua9myGf7T9zH8l8mxMkR7e7zwXPpQ79HFBgD9J0ieOjYrzl0mw&s "  width="50%" />
         <p className="legend">Legend 1</p>
       </div>
       <div>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCfboZnx0Ks-XeYU9QL2KjD_SbkRIqgLkNvHG_hAUGQYp-qk_HOVQFa6vfw&s"  width="50%" />
         <p className="legend">Legend 2</p>
       </div>
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWNVj2Fr2oOS_NTgdqPaLuTVUWkvm7aTwyzUulO1ukJVaVfA-WbICztWYYg&s"  width="50%" />
      <p className="legend">Legend 3</p>
     </div>
   </Carousel>
    </>
  )
}

export default Logout