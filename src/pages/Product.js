import React from 'react';
import './style.css';

const ProjectPage = () => {
  let slideIndex = 0;

  const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
  };

  React.useEffect(() => {
    showSlides();
  }, []);

  return (
    <div className="container">
      <div className="box">
        <img src="" alt="" />
      </div>

      <nav className="shift">
        <ul>
          <li><a href="/">HElooooooooooo</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Downloads</a></li>
          <li><a href="/">More</a></li>
          <li><a href="/">Nice staff</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1>Lorem Ipsum</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
          quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
      </div>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src="snow.jpg" alt="" />
        </div>
        <div className="mySlides fade">
          <img src="always.jpg" alt="" />
        </div>
      </div>

      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <div className="main-div">
        <div className="col1">
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="col2">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
            qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
        </div>
      </div>

      <hr className="custom-hr" />

      <div className="cards">
        <div className="card">
          <img src="./a5.jpg" alt="" />
        </div>
        <div className="card">
          <img src="./a6.png" alt="" />
        </div>
        <div className="card">
          <img src="./a7.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
