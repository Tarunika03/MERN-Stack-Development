import React from "react";

function Carousel(){

    return(

        <>

        <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBzY2hvb2x8ZW58MHx8MHx8&w=1000&q=80" height="500px" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Relax and reflect.</h5>
          <p> “Where words fail, music speaks.” — Hans Christian Andersen</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://c0.wallpaperflare.com/preview/666/214/530/guitar-studying-playing-showing.jpg" height="500px" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Play out your soul.</h5>
          <p>“Music is the universal language of mankind.” ― Henry Wadsworth Longfellow</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.teahub.io/photos/full/129-1291393_band-students-join-mrs-rock-band-instruments-wallpaper.jpg" height="500px" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Live your passion</h5>
          <p>“The wise musicians are those who play what they can master.” — Duke Ellington</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

        
        </>
    )
}

export default Carousel