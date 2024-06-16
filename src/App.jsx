

// search type1 type2 and type3 to see their respective codes


import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import  {ScrollTrigger} from 'gsap/ScrollTrigger' ;
const App = () => {

    gsap.registerPlugin(ScrollTrigger);
    const gsapref = useRef() ;
    const navbtn = useRef() ;

    const value = 360;
    
const [rotate, setRotate] = useState(0) ;
const [rotate2, setRotate2] = useState(0) ;

//these both states will help in the rotation for a specific button

    const btnClick  = () => {
setRotate(rotate + 360)
 }

    const btnClick2  = () => {   
setRotate2(rotate2 + 360)
}

//type3 : btnclicks to set random values to the state by which the button wiill rotate

    useGSAP(
    () => {
        gsap.to(
            navbtn.current , {
                rotate : rotate ,
                duration : .5
            } ,
        )
    } , [rotate]
    ) //type3

    useGSAP(
        () => {
            gsap.to(
                gsapref.current , {
                    rotate : rotate2 ,
                    duration : .5
                } ,
            )
        } , [rotate2]
        ) //type3

    useGSAP(
        ()=> {

            

         
            const tl  = gsap.timeline() ;

            tl.from(
                ".logo , .ul li", {
                    opacity : 0 ,
                    x:-50 ,
                    delay: .5 ,
                    stagger : .2 ,
                    duration : .5
                }
            ) //type1 : the li's in the nav bar are moving from left to right when on screen


            tl.from(
                ".heading1 , .para ", {
                    opacity : 0 ,
                    x : -300 ,
                    stagger : .5 ,
                    duration : .8
                }
            )//type1
            
            tl.from(
                ".btn ", {
                    opacity : 0 ,
                    x : -100 ,
                    duration : .5
                }
            )//type1
            
            
            tl.from(
                ".img ", {
                    opacity : 0 ,
                    x : 200 ,
                    duration : .8
                } , "-=1"
            ) //type1 : but from right to left

            tl.from(
                ".images img" ,{
                    scrollTrigger : {
                        trigger : ".images",
                        scroller : "body" ,
                        // markers : true ,
                        start : "top 70%",
                        end : "top 0" ,
                        scrub : 3
                    } ,
                    y: 100, 
                    opacity : 0,
                    duration : 2,
                    stagger : .3 ,
                    delay : 1
                }
            )  //type 2 : when the screen goes down, it only moves then 

            

            var tl2 = gsap.timeline({
                scrollTrigger : {
                    trigger : ".mainbody",
                    scroller : "body" ,
                    // markers : true ,
                    start : "top 45%",
                    end : "top 0" ,
                    scrub : 3
                }
            }) ; //type2 : by using the scroll trigger
            


            // tl2.from(
            //     ".images img" ,{
                    
            //         y: 100, 
            //         opacity : 0,
            //         duration : .4 ,
            //         stagger : .3 
            //     }
            // )
            
            tl2.from(
                ".services" , {
                    y: 30,
                    duration : 1 ,
                    opacity : 0
                }
            ) //type2
            
            

            //all the ones with tl2 are all type 2
            
            
            tl2.from(
                ".left.line1" , {
                      x : -300, 
                      duration : 5,
                      opacity : 0 ,
                
                } , "ani"
            )
            
            
            tl2.from(
                ".right.line1" , {
                      x : 300, 
                      duration : 5,
                      opacity : 0 
                } , "ani"
            )
            
            
            tl2.from(
                ".left.line2" , {
                      x : -300, 
                      duration : 5,
                      opacity : 0 ,
                   
                } , "anim"
            )
            
            
            tl2.from(
                ".right.line2" , {
                      x : 300, 
                      duration : 5,
                      opacity : 0 
                } , "anim"
            )
            
            
            tl2.from(
                ".left.line3" , {
                      x : -300, 
                      duration : 5,
                      opacity : 0 ,
                      
                } , "anima"
            )
            
            
            tl2.from(
                ".right.line3" , {
                      x : 300, 
                      duration : 5,
                      opacity : 0 
                } , "anima"
            )
            
            
            
            
            tl2.from(
                ".left.line4" , {
                      x : -300, 
                      duration :5,
                      opacity : 0 ,
                      
                } , "animal"
            )
            
            
            tl2.from(
                ".right.line4" , {
                      x : 300, 
                      duration : 5,
                      opacity : 0 
                } , "animal"
            )
            



        }
    )

  return (
    <div>

<div>
  <nav className="flex items-center justify-between px-10 py-10 ">
    <div  className="logo text-2xl font-bold flex gap-5 ">
      <div className="rotate-45">
        <i className="ri-shining-2-fill" />
      </div>
      WizardZ
    </div>
    <div>
      <ul className=" ul flex gap-10 items-center list-none">
        <li>About Us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>
          <button ref={navbtn} onClick={btnClick} className=" border border-black py-2 px-5 rounded">
            Request a quote
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <div className="grid grid-cols-2 px-10 py-[70px]">
    <div className="pe-5">
      <div className="tracking-wider heading1 font-semibold text-7xl">
        Navigating the digital landscape for success
      </div>
      <div className="py-10 para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        similique id nisi distinctio officia neque quos tenetur ipsum? Error
        voluptatem blanditiis ullam magnam, debitis eaque odit! Corporis
        blanditiis labore adipisci?
      </div>
      <div>
        <button ref={gsapref} onClick={btnClick2} className="btn border border-black rounded px-5 py-2 ">
          Book a consultation
        </button>
      </div>
    </div>
    <div className="flex  ps-[100px] ">
      <img className="scale-[1.3] img" src="/images/download.png" alt="" />
    </div>
  </div>
  <div className="flex justify-center images gap-[50px] px-[100px] py-[100px] ">
    <div>
      <img className="h-[60px] " src="/images/pngimg.com - amazon_PNG25.png" alt="" />
    </div>
    <div>
      <img className="h-[60px] " src="/images/download dribble(1).png" alt="" />
    </div>
    <div>
      <img className="h-[60px] " src="/images/5842a629a6515b1e0ad75afa.png" alt="" />
    </div>
    <div>
      <img
        className="h-[60px] "
        src="/images/png-transparent-notion-logo-landscape-tech-companies-thumbnail.png"
        alt=""
      />
    </div>
    <div>
      <img className="h-[60px] " src="/images/pngwing.com.png" alt="" />
    </div>
    <div>
      <img className="h-[60px] " src="/images/pngwing.com (1).png" alt="" />
    </div>
  </div>
  <div className="flex  px-[100px] gap-10">
    <div className="text-5xl services font-semibold px-3 py-1 bg-[#859600] ">
      Services
    </div>
    <div className="max-w-[750px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fugit
      harum consequuntur neque aut placeat repellendus quo maxime, voluptates
      reiciendis molestiae sapiente ut excepturi eos.
    </div>
  </div>
  <div className="py-10 mainbody grid grid-cols-2 gap-10 px-[100px]">
    <div>
      <div className="border grid grid-cols-2 left line1 py-5 border-black rounded-lg">
        <div className="px-5">
          <div className="text-3xl font-semibold ">
            Search engine optimization
          </div>
          <div className="flex gap-2 items-center pt-[100px] ">
            <div className="rotate-[315deg]  ">
              <i className="ri-arrow-right-circle-fill text-2xl" />
            </div>
            Learn More
          </div>
        </div>
        <div>
          <img src="/images/download.png" alt="" />
        </div>
      </div>
      <div className="border left line2 grid grid-cols-2 py-5 border-black rounded-lg">
        <div className="px-5">
          <div className="text-3xl font-semibold ">Social media marketing</div>
          <div className="flex gap-2 items-center pt-[100px] ">
            <div className="rotate-[315deg]  ">
              <i className="ri-arrow-right-circle-fill text-2xl" />
            </div>
            Learn More
          </div>
        </div>
        <div>
          <img src="/images/download.png" alt="" />
        </div>
      </div>
    </div>
    <div>
      <div className="border line1 right grid grid-cols-2 py-5 border-black rounded-lg">
        <div className="px-5">
          <div className="text-3xl font-semibold ">Pay per click</div>
          <div className="flex gap-2 items-center pt-[100px] ">
            <div className="rotate-[315deg]  ">
              <i className="ri-arrow-right-circle-fill text-2xl" />
            </div>
            Learn More
          </div>
        </div>
        <div>
          <img src="/images/download.png" alt="" />
        </div>
      </div>
      <div className="border right line2 grid grid-cols-2 py-5 border-black rounded-lg">
        <div className="px-5">
          <div className="text-3xl font-semibold ">E-mail Marketing</div>
          <div className="flex gap-2 items-center pt-[100px] ">
            <div className="rotate-[315deg]  ">
              <i className="ri-arrow-right-circle-fill text-2xl" />
            </div>
            Learn More
          </div>
        </div>
        <div>
          <img src="/images/download.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="pb-10  grid grid-cols-2 gap-10 px-[100px]">
    <div>
      <div className="border left line3  grid grid-cols-2 py-5 border-black rounded-lg">
        <div className="px-5">
          <div className="text-3xl font-semibold ">
            Search engine optimization
          </div>
          <div className="flex gap-2 items-center pt-[100px] ">
            <div className="rotate-[315deg]  ">
              <i className="ri-arrow-right-circle-fill text-2xl" />
            </div>
            Learn More
          </div>
        </div>
        <div>
          <img src="/images/download.png" alt="" />
        </div>
      </div>
      <div className="border line4 left grid grid-cols-2 py-5 border-black rounded-lg">
        <div className="px-5">
          <div className="text-3xl font-semibold ">Social media marketing</div>
          <div className="flex gap-2 items-center pt-[100px] ">
            <div className="rotate-[315deg]  ">
              <i className="ri-arrow-right-circle-fill text-2xl" />
            </div>
            Learn More
          </div>
        </div>
        <div>
          <img src="/images/download.png" alt="" />
        </div>
      </div>
    </div>
    <div>
      <div className="border line3  right grid grid-cols-2 py-5 border-black rounded-lg">
        <div className="px-5">
          <div className="text-3xl font-semibold ">Pay per click</div>
          <div className="flex gap-2 items-center pt-[100px] ">
            <div className="rotate-[315deg]  ">
              <i className="ri-arrow-right-circle-fill text-2xl" />
            </div>
            Learn More
          </div>
        </div>
        <div>
          <img src="/images/download.png" alt="" />
        </div>
      </div>
      <div className="border line4 right grid grid-cols-2 py-5 border-black rounded-lg">
        <div className="px-5">
          <div className="text-3xl font-semibold ">E-mail Marketing</div>
          <div className="flex gap-2 items-center pt-[100px] ">
            <div className="rotate-[315deg]  ">
              <i className="ri-arrow-right-circle-fill text-2xl" />
            </div>
            Learn More
          </div>
        </div>
        <div>
          <img src="/images/download.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default App