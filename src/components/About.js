import React,{useState} from 'react'

export default function About(props) {
    //setting mode(dark mode or white mode)
    
   
    return (
        <>
        <div className='container'>
            <h2 className="my-3"   >About Us</h2>
           
            <div className="accordion " id="accordionExample"   >
                <div className="accordion-item"  >
                    <h2 className="accordion-header" id="headingOne"  >
                        <button className="accordion-button" style={{ color:props.mode==='light'?'dark':'white', backgroundColor:props.mode==='light'?'grey':'#b30047'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={{ color:props.mode==='light'?'dark':'white', backgroundColor:props.mode==='light'?'#004d80':'black'}}>
                        <strong>Textutiles give you a way to analyze your text queckly and efficiantly.Be it word count,characters count. </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ color:props.mode==='light'?'dark':'white', backgroundColor:props.mode==='light'?'grey':'#b30047'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color:props.mode==='light'?'dark':'white', backgroundColor:props.mode==='light'?'#004d80':'black'}}>
                            <strong>Text util is a free counter tools that provide instant character count and word count statistics for a given text.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  style={{ color:props.mode==='light'?'dark':'white', backgroundColor:props.mode==='light'?'grey':'#b30047'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color:props.mode==='light'?'dark':'white', backgroundColor:props.mode==='light'?'#004d80':'black'}}>
                            <strong>This word counter software works in any web browsers such as chrome,firefox,IE,safari,opera.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        
        </>
    )
}
