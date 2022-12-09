import React from "react";
import ".//css/flaticon.css";
import ".//css/ionicons.min.css";
import ".//css/style.css";
import background from ".//images/bg-1.jpg";

function Keys(){

    return(

     <>
     <div style={{color:'white', marginTop:'10px'}}><center><h1>Keys</h1></center></div>
<div class="container mt-4">
    <div class="row">
        <div class="col-auto mb-3">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                <img src="https://cdn.mos.cms.futurecdn.net/yq7dki2Ev5eaRcijMovHL5.jpg" width="100%" height="225" /><br/>
                    <h5 class="card-title">Electronic Keyboard</h5>
                    <p class="card-text">Recorded lectures and 4 live sessions</p>
                    <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example">Enroll Now</button>
                     </div>
                     <div class="text-muted" fontSize='55px'>$30</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-auto mb-3">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                <img src="https://playgroundprofessionals.com/sites/playgroundprofessionals.com/files/2020/June/kids-playing-piano.jpg" width="100%" height="225" /><br/>
                    <h5 class="card-title">Piano</h5>
                    <p class="card-text">Recorded lectures and 6 live sessions</p>
                    <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#example">Enroll Now</button>
                     </div>
                     <div class="text-muted" fontSize='55px'>$30</div>
                    </div>
                </div>
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


     </>

    )
}

export default Keys