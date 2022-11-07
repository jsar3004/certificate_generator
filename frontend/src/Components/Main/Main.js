import React from "react";
import '../Main/Main.css';
import SecondList from '../SecondList/SecondList';
import ThirdList from '../ThirdList/ThirdList';
import Fourthlist from "../Fourthlist/Fourthlist";
import DetailForm from "../DetailForm/DetailForm";
function Main(){
    return(
<>
 <div>
    <h4 className="smallheading">
    FREE TOOLS BY Jaspreet singh
    </h4>
    <h6 className="bigheading">
    Online Certificate Maker
    </h6>
    <h4 className="midheading">
    Generate beautiful certificates for your students or colleagues and download in PDF format
    </h4>
    <button class="btn info">Create a certificate now</button>
 <ul className="list-style">
    <li> 
    <p>✓ 100% Free</p>
    </li>
    <li> 
    <p>✓ Download in PDF or JPG</p>
    </li>
    <li> 
    <p>✓ No signup required</p>
    </li>
 </ul>
 </div>

 <div className="basedesc">
 <div className="seconddesc">
    <h1 className="heading1">Create Certificates Online or Auto Generate via API</h1>
    <h3 className="heading2">Easily create certificates and awards online to recognize the achievements of your employees, speakers, students etc.</h3>
    <h3 className="heading2">Simply enter some details and generate your certificate PDF in one click. You can download up to 5 beautiful PDF certificates per day for free.</h3>
    <h3 className="heading2">Creating a lot of certificates and need to automate the process? Look into our API or Nocode automations to generate PDF certificates in bulk.</h3>

 </div>
  <div className="secondimage seconddesc">
   <img className="image" alt="normal pic" src="https://d33wubrfki0l68.cloudfront.net/646261c1acc41707b6253e4c0aca0c5d0aceb64a/7c076/images/oslo_illustrations/15_power_transp.png"></img>
 </div>
 </div>
 <SecondList/>
 <ThirdList/>
 <Fourthlist/>
 <DetailForm/>
</>
    );
}
export default Main;