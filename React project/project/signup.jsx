import React,{useState} from "react";
import './signup.css'

function Signup(){
    const [show, setshow]=useState(false)
    

    return(
        
    <div className="bg_image"

    style={{backgroundImage: `url('https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600')`}}

      >     
      
    
         <div id="login-form" className="login-page">
             <div className='form-box'>
                 <div className="button-box">
                     <div id="btn"> 

                          <button type="button" onClick={()=>setshow(true)} className="toggle-btn">
                          
                    login
                          </button>
                          <button type="button" onClick={()=>setshow(false)} className="toggle-btn">
                          
                          register
                          </button>
                     </div>
                     
      <div>
      {
    show?
    <form id="login" className="input-group-login">
        <input type={"text"} className="input-field" placeholder="Email Id"/>
        <input type={"password"} className="input-field" placeholder="enter password" />
        <input type={"checkbox"} className='check-box' /> <span>Remember Password</span>
        <button type="submit" className="submit-btn">
            Log in
        </button>
    </form> : <form id="register" className="input-group-register">
                         <input type={'text'} className='input-field' placeholder="First name"  />
                         <input type={'text'} className='input-field' placeholder="Last name"/>
                         <input type={'email'} className='input-field' placeholder="email id" />
                         <input type={"password"} className='input-field' placeholder="enter the password" />
                         <input type={'checkbox'} className='check-box'/> <span>i agree to the terms and conditions</span>
                       <button type="submit" class='submit-btn'>register</button>  
                      </form>
  }
    
                       
                      </div>
            
                 </div>
 
             </div>
 
         </div>
         
     </div>
         

    )
     
    
}
export default Signup;

// class Signup extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={count : click}
//     }
    
//         this. state = var x document.getElementById('login');
//         var y=document.getElementById('register');
//         var z=document.getElementById('btn');
        
//     var model = document.getElementById('login-form');
//     }
//     register()
//     {
//         x.style.left='-400px'
//         y.style.left='50px'
//         z.style.left='110px'
//     }
//     login()
//     {
//         x.style.left='50px'
//         y.style.left='450px'
//         z.style.left='0px' 

        
//     window.onclick = function(event)
//     {
//         if(event.targe == model)
//     {
//         model.style.display='none'
//     }
//     }
//     }
//     render(props){
//     return(
//     <div className="bg_image"

//    style={{backgroundImage: `url('https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600')`}}
     
//      >
     
   
//         <div id="login-form" className="login-page">
//             <div className='form-box'>
//                 <div className="button-box">
//                     <div id="btn">
//                          <button type="button" onClick={'login()'} className="toggle-btn">
//                             Log In
//                          </button>
//                          <button type="button" onClick={'register()'} className="toggle-btn">
//                             Register
//                          </button>
//                     </div>
//                     <form id="login" className="input-group-login">
//                         <input type={"text"} className="input-field" placeholder="Email Id"/>
//                         <input type={"password"} className="input-field" placeholder="enter password" />
//                         <input type={"checkbox"} className='check-box' /> <span>Remember Password</span>
//                         <button type="submit" className="submit-btn">
//                             Log in
//                         </button>
//                     </form>
//                     <form id="register" className="input-group-register">
//                         <input type={'text'} className='input-field' placeholder="First name"  />
//                         <input type={'text'} className='input-field' placeholder="Last name"/>
//                         <input type={'email'} className='input-field' placeholder="email id" />
//                         <input type={"password"} className='input-field' placeholder="enter the password" />
//                         <input type={'checkbox'} className='check-box'/> <span>i agree to the terms and conditions</span>
//                       <button type="submit" class='submit-btn'>register</button>  
//                      </form>

//                 </div>

//             </div>

//         </div>
        
//     </div>
        
//     )
//     }

// export default Signup;