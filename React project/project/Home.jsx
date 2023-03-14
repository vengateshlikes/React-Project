import React from "react";
import './Home.css'
 
function Home(){
    return( 
      <div className="homeimage"
        
    style={{backgroundImage: `url('https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')`}}> 
        <div class= 'homehead'>

            <h2  className="trending">Top Courses</h2>
    <div class="homebox">
        <div class="top"> 
            <h3 >Angular development course</h3>
            <p >Angular is popular for making and looking dynamic application and  its information official reliance infusion includes altogethers</p>
           <h6> <button className="button">show details</button> </h6>
        </div>
        <div  class="top">
            <h3>React <br/>development course</h3>
            <p>Angular is popular for making and looking dynamic application and its information official reliance infusion includes altogether less..</p>
         <h6>   <button className="button">show details</button> </h6>
        </div>
        <div  class="top">
            <h3>Mean Stack Development Course</h3>
            <p>Angular is popular for making dynamic application and its information official reliance infusion includes altogether less..</p>
         <h6> <button className="button">show details</button> </h6>
        </div>
        <div  class="top">
            <h3>Full Stack Development Course</h3>   
            <p>Angular is popular for making dynamic application and its information official reliance infusion includes altogether less..</p>
         <h6> <button className="button" >show details</button></h6>
        </div>
        <div class="top">
            <h3>Java <br /> development course</h3>
            <p>AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
            <h6 ><button className="button">show details</button></h6>
        </div>
         <div class="top">
            <h3>web <br /> developments  course</h3>
            <p>AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
            <h6><button className="button">show details</button></h6>
        </div>
         <div class="top">
            <h3>Digital development course</h3>
            <p>AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
            <h6 ><button className="button">show details</button></h6>
        </div>
         <div class="top">
            <h3>Iconic development course</h3>
            <p>AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
            <h6><button className="button">show details</button></h6>
        </div>
        </div>
          <h2 className="trending">new courses</h2>
          <div className="homebox">
          <div class="top">
            <h3>Script development course</h3>
          <p>AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
          <h6><button className="button">show details</button></h6>
        </div>
          <div  class="top">
          <h3>Web <br /> developments course</h3>
          <p>AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
          <h6><button className="button">show details</button></h6>
        </div>
          
          <div  class="top">
          <h3>Digital development course</h3>
          <p>AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
          <h6><button className="button">show details</button></h6>
        </div>
          
          <div  class="top">
          <h3>Iconic development course</h3>
          <p>AchieversIT is dedicated to its services to enhance your skills to make a better move towards a better future in your career.</p>
          <h6 ><button className="button">show details</button></h6>
        </div>
        </div>
        </div>

        </div>

    )
}
export default Home;
