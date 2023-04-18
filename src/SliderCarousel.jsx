import Slider from "react-slick";
import { SkillsGrid } from "./SkillsGrid";

export const SliderCarousel = ({skillArray}) => {
    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      centerPadding: '50px',
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
  };
    return (
      <Slider {...settings} >
        {
          skillArray.map((ctner) => {
            return (
              <SkillsGrid key={ctner} route={ `skills/${ctner}.png`} />
            )
          })
        }
      </Slider>





        // <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        //     <div className="carousel-inner">
        //     <div className="carousel-item active" style={{"backgroundImage": "url(https://source.unsplash.com/featured/?ocean)"}}>
        //         <div className="carousel-caption d-none d-md-block">
        //         <h5>Slide 1</h5>
        //         <p>This is the first slide.</p>
        //         </div>
        //     </div>
        //     <div className="carousel-item" style={{"backgroundImage": "url(https://source.unsplash.com/featured/?mountain)"}}>
        //         <div className="carousel-caption d-none d-md-block">
        //         <h5>Slide 2</h5>
        //         <p>This is the second slide.</p>
        //         </div>
        //     </div>
        //     <div className="carousel-item" style={{"backgroundImage": "url(https://source.unsplash.com/featured/?beach)"}}>
        //         <div className="carousel-caption d-none d-md-block">
        //         <h5>Slide 3</h5>
        //         <p>This is the third slide.</p>
        //         </div>
        //     </div>
        //     </div>
        //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //     <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //     <span className="visually-hidden">Next</span>
        //     </button>
        // </div>
  )
}
