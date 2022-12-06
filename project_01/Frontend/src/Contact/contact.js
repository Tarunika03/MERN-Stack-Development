import React from "react";
import ".//contact.css";

function Contact(){
    return(
    <>

    <div style={{color:'white'}}><center><h1>Get in touch</h1></center></div>
    <div style={{ display: 'flex',
        justifyContent: 'space-around', borderColor:'white', borderStyle:'solid', margin:'30px 60px', borderRadius:'15px'
      }}>
        <div style={{  backgroundColor: '#f1f1f1',width: '150px', margin: '10px', 
        textAlign: 'center', lineHeight: '40px', fontSize: '15px', borderRadius:'8px'}}>info@sargam.ac.in</div>
        <div style={{  backgroundColor: '#f1f1f1',width: '150px', margin: '10px', 
        textAlign: 'center', lineHeight: '40px', fontSize: '15px', borderRadius:'8px'}}>1800-123-456</div>
        <div style={{  backgroundColor: '#f1f1f1',width: '150px', margin: '10px', 
        textAlign: 'center', lineHeight: '40px', fontSize: '15px', borderRadius:'8px'}}>Address</div>  
    </div>
    
    <center>
    <div style={{margin: '50px'}}>
    <form action="/" class="decor" style={{position: 'relative', width: '80%', borderColor: '#fff'
                                          , borderRadius: '30px', background:'#191919'}}>
      <div class="form-left-decoration"></div>
      <div class="form-right-decoration"></div>
      <div class="circle"></div>
      <div class="form-inner">
        <h1>Feedback</h1>
        <input type="text" placeholder="Username"/>
        <input type="email" placeholder="Email"/>
        <textarea placeholder="Message..." rows="5"></textarea>
        <button type="submit" href="/">Submit</button>
      </div>
    </form>
    </div>
    </center>
</> 
     )
}

export default Contact