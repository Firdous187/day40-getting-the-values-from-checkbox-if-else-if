import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    let stateSelectRef = useRef();
    let resultParaRef = useRef();

    let firstInputRef = useRef();
    let lastInputRef = useRef();

    let maleRadioButtonRef = useRef();
    let femaleRadioButtonRef = useRef();

    let selectedGender;
    let salutation;

    let LanguaguesKnown={
        eng:false,
        hindi:false,
        tel:false,
    }
    
    let onCreateAccount = () => {

        if (stateSelectRef.current.value == "Select State") {
            alert("Please enter your state.")
        } else {
            if (selectedGender == "male") {
                salutation = "Mr.";
            }
            if (selectedGender == "female") {
                salutation = "Miss.";
            }
            console.log(LanguaguesKnown);
            resultParaRef.current.innerHTML = `${salutation} ${firstInputRef.current.value} ${lastInputRef.current.value} from ${stateSelectRef.current.value},your account as been created.`;
        }

    }
    return (
        <div className='App'>
            <form >
                <caption> <b>Welcome!</b></caption>
                <caption> <b>SignUp</b></caption>
                <p>Please enter  your details below</p>
                <div>

                    <input placeholder='Enter your First Name' ref={firstInputRef}></input>
                </div>

                <div>

                    <input placeholder='Enter your Last Name ' ref={lastInputRef}></input>
                </div>

                <div>

                    <input placeholder='Enter your email '></input>
                </div>

                <div>
                    <label>Gender</label>

                    <input type="radio" name='Gender' ref={maleRadioButtonRef}
                        onChange={() => {
                            if (maleRadioButtonRef.current.checked == true) {
                                selectedGender = "male"
                            }
                        }
                        }>
                    </input>

                    
                    <label style={{ width: "auto" }}>Male</label>
                    <input type="radio" name='Gender' ref={femaleRadioButtonRef}
                        onChange={() => {
                            if (femaleRadioButtonRef.current.checked == true) {
                                selectedGender = "female";
                            }
                        }
                        }
                    ></input>
                    <label style={{ width: "auto" }}>Female</label>


                </div>

                <div>
                    <label>Marital Status</label>

                    <input type="radio" name='ms'></input>
                    <label style={{ width: "auto" }}>Unmarried</label>
                    <input type="radio" name='ms'></input>
                    <label style={{ width: "auto" }}>Single</label>


                </div>

                <div>
                    <label>Languagues known</label>

                   
                    <label className='internalLabel'>English</label>
                    <input type='checkBox' 
                     onChange={(eventObject)=>{
                        if(eventObject.target.checked == true){
                           LanguaguesKnown.eng =true;
                        }else{
                            LanguaguesKnown.eng =false;
                        }
                      }}
                    ></input>
                    <label className='internalLabel'>Telugu</label>
                    <input type='checkBox'
                      onChange={(eventObject)=>{
                        LanguaguesKnown.tel = eventObject.target.checked;
                      }}


                    ></input>
                    <label className='internalLabel'>Hindi</label>
                    <input type='checkBox'
                    
                    onChange={(eventObject)=>{
                        LanguaguesKnown.hindi = eventObject.target.checked;
                      }}></input>
                    
                </div>

                <div>

                    <select className='option' ref={stateSelectRef} 
                       onChange={()=>{
                        let selectedState = stateSelectRef.current.value;
                        if(selectedState =="JK"){
                           console.log("Srinagar")
                        }else if (selectedState =="Ladakh"){
                            console.log("Leh")
                        }else if (selectedState =="Uttarakhand"){
                            console.log("Dehradun")
                        }else if (selectedState =="Assam"){
                            console.log("Dispur")
                        }else if (selectedState =="Meghalaya"){
                            console.log("Shilong")
                        }else if (selectedState =="Goa"){
                            console.log("Panaji")
                        }else if (selectedState =="Gujarat"){
                            console.log("Gandhi Nagar")
                        }else if (selectedState =="Maharashtra"){
                            console.log("Mumbai")
                        }else if (selectedState ==" Andhra pradesh"){
                            console.log("Amaravati")
                        }else if (selectedState =="Telangana"){
                            console.log("Hyderabad")
                        }else if (selectedState =="Karnataka"){
                            console.log("Bengaluru")
                        }else{
                            console.log("Select proper value")
                        }
                
                

                       }}
                    >
                        <option>Select State</option>
                        <option value="JM">Jammu and kashmir</option>
                        <option>Ladakh</option>
                        <option>Uttarakhand</option>
                        <option>Assam</option>
                        <option>Meghalaya</option>
                        <option>Manipur</option>
                        <option>Goa</option>
                        <option>Gujarat</option>
                        <option>Maharashtra</option>
                        <option value="AP">Andhra pradesh</option>
                        <option>Telangana</option>
                        <option>Karnataka</option>
                    </select>
                </div>

                <div>

                    <input placeholder='Enter your phone number'></input>
                </div>

                <div>

                    <input placeholder='Enter password'></input>
                </div>

                <div>

                    <input placeholder='Confirm password'></input>
                </div>
                <div>
                    <button type='button'

                        className='buttonSignUp'

                        onClick={() => {
                            onCreateAccount();
                        }}>SignUp</button>
                </div>
                <p ref={resultParaRef}></p>
            </form>
            <br></br>
            <Link to="/Dashborad">Dashborad</Link>
        </div>
    )
}

export default SignUp