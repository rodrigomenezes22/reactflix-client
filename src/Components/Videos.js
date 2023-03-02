import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from 'react-bootstrap/Container'

function Videos() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const videos = [
        {image: "https://cdn.shopify.com/s/files/1/0548/8404/0870/products/TheFamilyComedy-PersonalizedMoviePoster_b59527ba-7360-415b-98b3-33b4086e7c06_1200x.jpg?v=1617385439"},
        {image: "https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png"},
        {image: "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/thor-the-dark-world-crowded-691x1024.jpg"},
        {image: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg"},
        {image: "https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SY679_.jpg"} 

        
    ]

  return (
    <section className='videos'>
        <Container>
            <Carousel responsive={responsive}>
            {
                videos.map((video) => ( <div className='video-wrappers'><img src={video.image} className="video-covers" alt="" /></div>))
            }
            </Carousel>
        </Container>
    </section>
  )
}

export default Videos
