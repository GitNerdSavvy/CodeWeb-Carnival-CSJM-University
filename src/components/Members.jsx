import React from 'react'
import r from "../assets/member/R.png"
import f from "../assets/member/F.png"
import s1 from "../assets/member/sanjeev.png"
import s2 from "../assets/member/satyam.png"
import s3 from "../assets/member/saurabh.png"
import s4 from "../assets/member/abhay.png"
import s5 from "../assets/member/uzala.png"
import s6 from "../assets/member/shiv.png"
import s7 from "../assets/member/aman.png"
import s8 from "../assets/member/abhi.png"
import s9 from "../assets/member/arun.png"
import s10 from "../assets/member/Anika.png"

export default function Members() {




  return (
    <section className="member-section " id="member">
    <div className="container-fluid ">
        <div className="row">
           
            <div className="col-lg-6">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                  
                 <b>Greetings to all students,</b><br></br>
                 I am delighted to present an incredible opportunity that perfectly embodies our dedication to nurturing technological excellence and encouraging a culture of 
                 innovative thinking – <b>CodeWeb Carnival.</b> In this fast-evolving world, coding has evolved into an indispensable skill, 
                 enabling individuals to materialize their concepts into reality through the remarkable power of technology.
                 
                </p>
              </div>
              <div className="client-info">
                <img src={r} alt="no.."></img>
                <h5>Dr. Rabins Porwal</h5>
                <p>Head of Department, Computer Application </p>
              </div>
            </div>
          </div>
            <div className="col-lg-6">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                  
                 <b>Dear students,</b><br></br>
                 I hope this message finds you well. 
                 Today, I am thrilled to introduce a remarkable avenue for you to explore your curiosity, develop your skills, and channel your creativity
                  – <b>CodeWeb Carnival.</b> We are dedicated to providing you with opportunities that empower your growth, 
                  and the CodeWeb Carnival is a testament to that commitment.
                 
                </p>
              </div>
              <div className="client-info">
                <img src={f} alt="no.."></img>
                <h5>Ankit Tiwari</h5>
                <p>Faculty Member, Computer Application </p>
              </div>
            </div>
          </div>
          
         {/* Arun */}
          <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                 <b>Role: </b>President-Open Source Club<br></br><b>Skills: </b>Python<br></br>
                 <b>Experience: </b>Member Dronotics<br></br>
                 
                </p>
               
              </div>
              <div className="client-info">
                <img src={s9} alt="no.."></img>
                <h5>Arun Sharma</h5>
                <p>MCA-2nd Year</p>
              </div>
            </div>
          </div>




          
         {/* Anika */}
          <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                 <b>Role: </b>President-Open Source Club<br></br><b>Skills: </b>Frontend Developer<br></br>
                 <b>Projects: </b>Weather Forecasting<br></br>
                 
                </p>
               
              </div>
              <div className="client-info">
                <img src={s10} alt="no.."></img>
                <h5>Anika Pandey</h5>
                <p>MCA-2nd Year</p>
              </div>
            </div>
          </div>



         {/* Sanjeev */}
          <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                 <b>Role: </b>President-DevX Clan<br></br><b>Skills: </b>MERN Stack Developer<br></br>
                 <b>Projects: </b>JioCinema Clone, MERN Portfolio<br></br>
                 
                </p>
               
              </div>
              <div className="client-info">
                <img src={s1} alt="no.."></img>
                <h5>Sanjeev Yadav</h5>
                <p>BCA-3rd Year</p>
              </div>
            </div>
          </div>


           {/* Ujjwal */}
           <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                <b>Role: </b>President-Code Clan<br></br><b>Skills: </b>Master Coder<br></br>
                 <b>Achievements: </b>#4 in Geek Week Coding Competition
                 
                </p>
               
              </div>
              <div className="client-info">
                <img src={s5} alt="no.."></img>
                <h5>Ujjwal Barnwal</h5>
                <p>BCA-3rd Year</p>
              </div>
            </div>
          </div>


            {/* Aman */}
            <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                <b>Role: </b>Vice President-Python Hunters<br></br><b>Skills: </b>Python Developer<br></br>
                 <b>Project: </b>Blog Website, Image Generator AI<br></br>
                 
                </p>
               
              </div>
              <div className="client-info">
                <img src={s7} alt="no.."></img>
                <h5>Aman Pratap</h5>
                <p>BCA-3rd Year</p>
              </div>
            </div>
          </div>



          {/* Abhi */}
          <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                 <b>Role: </b>President-Python Hunters<br></br><b>Skills: </b>C#, JAVA, Unity<br></br>
                 <b>Experience: </b>Mini Militia Clone<br></br>
                 
                </p>
               
              </div>
              <div className="client-info">
                <img src={s8} alt="no.."></img>
                <h5>Abhishek Patel </h5>
                <p>MCA-2nd Year</p>
              </div>
            </div>
          </div>


            {/* Abhay */}
            <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                <b>Role: </b>Vice President-DevX Clan<br></br><b>Skills: </b>Frontend Developer<br></br>
                 <b>Projects: </b>Portfolio Website<br></br>
                 
                </p>
               
              </div>
              <div className="client-info">
                <img src={s4} alt="no.."></img>
                <h5>Abhay Tripathi</h5>
                <p>BCA-3rd Year</p>
              </div>
            </div>
          </div>



          {/* Satyam */}
          <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                <b>Role: </b> Vice President-Code Clan<br></br><b>Skills: </b>Frontend Developer<br></br>
                 <b>Achievements: </b>#1 in Coding Combat
                 
                </p>
               
              </div>
              <div className="client-info">
                <img src={s2} alt="no.."></img>
                <h5>Satyam Chauhan</h5>
                <p>BCA-3rd Year</p>
              </div>
            </div>
          </div>






      



           {/* Shiv */}
           <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                <b>Role: </b>Vice President-Python Hunters<br></br><b>Skills: </b>Intermediate Coder<br></br>
                 <b>Projects: </b>Scientific Calculator with Python
                 
                </p>
               
              </div>

              <div className="client-info">
                <img src={s6} alt="no.."></img>
                <h5>Shivpoojan Tiwari</h5>
                <p>BCA-3rd Year</p>
              </div>
            </div>
          </div>




           {/* Saurabh */}
           <div className="col-lg-4">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                <b>Role: </b>Manager-DevX Clan<br></br><b>Skills: </b>Master Trader<br></br>
                <b>Achievements: </b>YouTuber with Silver Button

                </p>
               
              </div>
              <div className="client-info">
                <img src={s3} alt="no.."></img>
                <h5>Saurabh Agnihotri</h5>
                <p>BCA-3rd Year</p>
              </div>
            </div>
          </div>



        


          {/* <div className="col-lg-3">
            <div className="testi-item">
              <div className="testi-comment">
                <p>
                 
                <b>Role: </b>President<br></br><b>Skills: </b>Full Stack Developer<br></br>
                 <b>Project: </b>JioCinema Clone, MERN Task Manager<br></br><b>Achievements: </b>GG.
                 
                </p>
               
              </div>
              <div className="client-info">
                <img src={s2} alt="no.."></img>
                <h5>Satyam Chauhan</h5>
                <p>BCA-3rd Year</p>
              </div>
            </div>
          </div> */}
          
        </div>
    </div>
</section>
  )
}
