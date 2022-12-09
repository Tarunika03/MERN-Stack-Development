import React from "react";
import Carousel from "../Carousel";
import ".//css/flaticon.css";
import ".//css/ionicons.min.css";
import ".//css/style.css";
import background from ".//images/bg-1.jpg";
function Home(){
    return(
        
        <>
        <Carousel/>
        <div style = {{backgroundColor: "#191919"}}>
        <div class="container mt-3" style={{marginLeft:"50px"}}>
  <div class="row">
    <div class="col-8" style={{backgroundColor:"rgb(255, 253, 240)",
    borderRadius: "15px"}}>
      <ul style={{marginTop: "20px", fontSize: "18px"}}>
        <li>Wide range of instruments to learn.</li>
        <li>Guided Mentorship to help you become an expert</li>
        <li>Online live sessions for remote learners.</li>
        <li>Job opportunities for merit holders *(for eligible candidates only)</li>
        <li>Welcome kit for selected interns</li>
        <li>Interact in a close-knit group of industry experts</li>
        <li>From top talent to Successful Career</li>
        <li>20+ preparatory assessments with live session</li>
        </ul>

    </div>
    <div class="col-4">
      <iframe width="407" height="300" src="https://www.youtube.com/embed/wAfbTvEeMmw" title="Basic Guitar Lesson 1 (Introduction of Guitar) for Beginners in (Hindi)  by Acoustic Pahadi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>



<div class="container mt-3">
  <h1 style= {{color:"antiquewhite"}}>Popular courses</h1>
  <div class="row">
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm" height='100px'>
        <img src="https://static.toiimg.com/photo/msid-86937496/86937496.jpg" width="100%" height="225" />
        <div class="card-body">
          <h5>Acoustic Guitar</h5>
          <p class="card-text">An acoustic guitar is a fretted musical instrument that produces sound via vibrating strings above a hollow chamber in the guitar's body. The vibrations carry through the air and do not require electrical amplification.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example">Enroll Now</button>
            </div>
            <div class="text-muted" fontSize='55px'>$30</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://cdn.mos.cms.futurecdn.net/yq7dki2Ev5eaRcijMovHL5.jpg" width="100%" height="225" />
        <div class="card-body" height='100px'>
          <h5>Electronic Keyboard</h5>
          <p class="card-text"> Keyboards typically contain keys for playing the twelve notes of the Western musical scale, with a combination of larger, longer keys and smaller, shorter keys that repeats at the interval of an octave.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example">Enroll Now</button>

            </div>
            <div class="text-muted" fontSize='55px'>$30</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        
        <img src="http://www.voxhumanajournal.com/images/cover/carrettin.jpg" width="100%" height="225" />
        <div class="card-body" height='100px'>
          <h5>Baroque Violin</h5>
          <p class="card-text">The modern violin sounds forceful and declamatory in comparison with its baroque ancestor. Baroque violin playing has a gentler tone with hardly any vibrato. The complex nuances of bowing give it a sort of swelling-fading sound.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example">Enroll Now</button>
              
            </div>
            <div class="text-muted" fontSize='55px'>$30</div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://img.jakpost.net/c/2020/08/21/2020_08_21_102809_1597979670._large.jpg" width="100%" height="225" />
        <div class="card-body" height='100px'>
          <h5>Alto Saxophone</h5>
          <p class="card-text">The alto saxophone is pitched in E♭, smaller than the B♭ tenor but larger than the B♭ soprano. It is the most common saxophone and is used in popular music, chamber music, solo repertoire and jazz.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example">Enroll Now</button>

            </div>
            <div class="text-muted" fontSize='55px'>$30</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://ak.picdn.net/shutterstock/videos/13228220/thumb/1.jpg" width="100%" height="225" />
        <div class="card-body" height='100px'>
          <h5>Tabla</h5>
          <p class="card-text">The tabla consists of two small drums of slightly different sizes and shapes.The dowels and hoops are used to tighten the tension of the membranes for tuning the drums.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example">Enroll Now</button>

            </div>
            <div class="text-muted" fontSize='55px'>$30</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://cdn.shopify.com/s/files/1/0557/0556/7432/articles/learn-flute-feature_ffbcb575-4497-4c65-b0c9-a1dbb6841156.jpg" width="100%" height="225" />
        <div class="card-body" height='100px'>
          <h5>Piccolo Flute</h5>
          <p class="card-text">The piccolo is a half-size flute,the modern piccolo has most of the same fingerings as its larger sibling, the standard transverse flute, but the sound it produces is an octave higher than written.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example">Enroll Now</button>
            </div>
            <div class="text-muted" fontSize='55px'>$30</div>
          </div>
        </div>
      </div>
    </div>

     
<div class="modal fade" id="example" tabIndex="-1" role="dialog" aria-labelledby="example" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="ion-ios-close"></span>
        </button>
      </div>
      <div class="row no-gutters">
        <div class="col-md-6 d-flex">
          <div class="modal-body p-5 img d-flex img text-center d-flex align-items-center" style={{backgroundImage: `url(${background})`}}>
          </div>
        </div>
        <div class="col-md-6 d-flex">
          <div class="modal-body p-4 p-md-5 align-items-center color-2">
            <div class="tabulation tabulation2">
              

              
              <div class="tab-content border-0">
                <div class="tab-pane p-0 container active" id="signin">
                  <div class="text w-100">
                    <h3 class="mb-4">Enroll</h3>
                    <form action="#" class="signin-form">
                      <div class="form-group mb-3">
                        <label class="label" for="name">Email</label>
                        <input type="email" class="form-control" placeholder="Email"/>
                      </div>
                      <div class="form-group mb-3">
                        <label class="label" for="password">Starting Date</label>
                        <input type="date" class="form-control" />
                      </div>
                      <div style={{fontSize:'10px'}}>*You can access the course for an year only</div><br/>
                      <div class="form-group mb-3">
                        <div style={{fontSize:'15px'}}>Course Fee : $30</div>
                      </div>
                      <div class="form-group">
                        <button type="submit" class="form-control btn btn-primary rounded submit px-3" >Proceed to Pay</button>
                      </div>
                    </form>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
  </div>
</div>


</div>
        </>
    )
}

export default Home;