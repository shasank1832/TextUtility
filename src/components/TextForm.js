import React, { useState } from 'react'

export default function TextForm(props) { 
    const [text, setText] = useState("");
       //for counting words
       var new_txt = text.split(" ");
       let value = "";
       let new_txt2 = new_txt.filter(function (item) {
           return item !== value
       })
       var len = new_txt2.length;

     
       
    const handleUpperClick = () => {
        // console.log("uppercase was clicked");
        var text3 = text.toUpperCase();
        setText(text3);
        {props.showAlert("uppercase clicked","primary")};
    }
  
    const handleLowerClick = () => {
        // console.log("lowercase was clicked");
        var text2 = text.toLowerCase();
        setText(text2);
        {props.showAlert("Lowercase clicked","secondary")};

    }
    const handleTrim = () => {
        // console.log("lowercase was clicked");
        let text2 = text.trim();
        console.log(text2);
        setText(text2);
        {props.showAlert("First and Last spaces are removed ","success")};

    }
    const handleOnChange = (event) => {
        console.log("onchange");
        setText(event.target.value);
       

    }
    const handleRemoveSpace = () => {
        // var new_txt=text.replace (/\s+/g, " ") 
        var new_txt = text.split(" ");
        // let arr=new_txt.remove();

        let value = "";
        let new_txt2 = new_txt.filter(function (item) {
            return item !== value
        })
        var len = new_txt2.length;
        // console.log(`length is ${len}`);
        console.log(new_txt2);
        var nt = "";
        for (let i = 0; i < len; i++) {
            nt = nt + " " + new_txt2[i];
        }
        let nt2 = nt.trim();
        setText(nt2);
        {props.showAlert("All unwanted spaces are removed","dark")};


    }
    const handleClear = () => {
        let text6 = "";
        setText(text6);
        {props.showAlert("Text cleared","danger")};

    }
    const handleCopy=()=>{
        var txt=document.getElementById('textArea');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        {props.showAlert("copied to clipboard","warning")};


    }

    return (
        <>
            <div className="container my-3 " >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1 " className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="textArea" onChange={handleOnChange} rows="6" value={text}   style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}  />  
                </div>
                <div className='flb'>
                <button className='btn btn-primary mx-2  '  id="uclk" onClick={handleUpperClick} >Convert to uppercase</button>
                <button className='btn btn-secondary mx-2  ' id="uclk2" onClick={handleLowerClick} >Convert to Lowercase</button>
                <button className='btn btn-success mx-2  ' id="uclk4" onClick={handleTrim} >Remove First and Last Space</button>
                <button className='btn btn-danger  mx-2  fbi '   id="uclk3" onClick={handleClear} >Clear</button>
                <button className='btn btn-dark mx-2 fbi  ' id="uclk6" onClick={handleRemoveSpace} >Remove spaces</button>
                <button className='btn btn-warning mx-2  fbi ' id="uclk5" onClick={handleCopy} >Copy </button>
                </div>
            </div>
            <div className='container'>
                <h3>{text.length} characters</h3>
                <h3>{len} words</h3>
                {/* <h3>{text.split(" ").length} words</h3> */}
                <u><h2>Text summary</h2></u>
               
                {text.length>0?text:<h6 id="otp" >Enter something to preview</h6>  }
                

            </div>
        </>
    )
}
