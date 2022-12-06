import React from "react";
import ".//css/flaticon.css";
import ".//css/ionicons.min.css";
import ".//css/style.css";
import background from ".//images/bg-1.jpg";
import {useNavigate} from "react-router-dom";

function Signup(){

    const navigate = useNavigate()

    return(
    <>
    <div style={{
      backgroundImage: `url("https://c1.wallpaperflare.com/preview/927/348/866/musical-background-music-instruments-on-table-music-background-wooden-background.jpg")`, 
      backgroundRepeat:"no-repeat", backgroundSize:"auto", backgroundPosition: "center", height:"500px", color:"white"}}> 
           
           <div style={{position:"absolute", top:"45%", left:"33%"}}>
            <center> 
                <h1 >Welcome to Sargam</h1>
                <p>Please Sign-Up</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Sign-Up</button>
                <p>I'm already a member! <a onClick={()=> navigate('/signin')}>Sign In</a></p>
            </center>
           </div>


     <div class="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                <div class="tab-pane p-0 " id="signup">
                  <div class="text w-100">
                    <h3 class="mb-4">Sign Up</h3>
                    <form action="#" class="signup-form">
                      <div class="form-group mb-3">
                        <label class="label" for="name">Full Name</label>
                        <input type="text" class="form-control"/>
                      </div>
                      <div class="form-group mb-3">
                        <label class="label" for="email">Email Address</label>
                        <input type="text" class="form-control"/>
                      </div>
                      <div class="form-group mb-3">
                        <label class="label" for="password">Password</label>
                        <input type="password" class="form-control"/>
                      </div>
                      <div class="form-group mb-3">
                        <label class="label" for="cpassword">Confirm Password</label>
                        <input type="password" class="form-control"/>
                      </div>
                      <div class="form-group d-md-flex">
                        <div class="form-check w-100 text-left">
                          <label class="custom-control fill-checkbox">
                            <input type="checkbox" class="fill-control-input"/>
                            <span class="fill-control-indicator"></span>
                            <span class="fill-control-description">I agree all statements in <a href="#">terms of service</a></span>
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign Up</button>
                      </div>
                    </form>
                    <p>I'm already a member! <a onClick={()=> navigate('/signin')}>Sign In</a></p>
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

export default Signup