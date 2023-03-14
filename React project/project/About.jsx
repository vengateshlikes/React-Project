import React from "react";
import './About.css'

export default function About(){   
 
 
return(
  <div className="Abouttitle">
    <div className="Abouthead">
    <h1> THE COMPANY DETAILS</h1>
    <h3>TOP COMAPNIES</h3>
    </div>
    <div className="Aboutbottom">
    
    <div className="mbox1">
           <h2 className="box1">Patner 1</h2>
           <div className="sbox">
            Chairman1
           </div>
        </div>
        <div className="mbox2">
            <h2 className="box2">patner 2</h2>
            <div className="sbox2">
            Chairman2
            </div>
        </div>
        <div className="mbox3">
            <h2 className="box3">patner 3</h2>
            <div className="sbox3">
                Chairman3
            </div>
        </div>
    <div className="mbox4">
            <h2 className="box4">patner 4</h2>
            <div className="sbox4">
                chairman4
            </div>
        </div>
        <div class="mbox5">
            <h2 class="box5">patners</h2>
            <div class="ssbox5">
            <img className="Aboutimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/220px-Marvel_Studios_2016_logo.svg.png" alt="" />
        

            </div>
        </div>

        <div className="mbox6">
            <h2 className="box6">patners</h2>
            <div className="ssbox6">
                <img className="Aboutimg" src="https://cdn.pixabay.com/photo/2015/06/01/09/00/adwords-793034__340.jpg" alt=""/>
            </div>
        </div>
        
        <div className="mbox7">
            <h2 className="box7">patners</h2>
            <div className="ssbox7">
                <img className="Aboutimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/220px-Google_Images_2015_logo.svg.png" alt=""/>
            </div>

            <div className="Aboutusers">
               <div className="Aboutusersub">

               
              <div className="Abouttitle">

                USER DETAILS

              </div>
              <div>
                 <label className="label1" htmlFor="username"> Username</label> <br />
                 <input className="input1" type="text" id="username" />
                
              </div>
              <div>

                <label className="label2" htmlFor="age">Age</label> <br />
                <input className="input2" type="number"  id="age" />
              </div>

              <div>
              <label className="label3" htmlFor="email">Email</label> <br />
                <input className="input3" type="email"  id="email" />
           
              </div>

              <div>
                <button className="submitme">submit</button>

              </div>
              </div>
              

            </div>
    </div>

  </div>

</div>

)
}
  