import React from 'react';
import './Tickets.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function RegistrationForm() {
    return(
        <div className="ticket">
            <button className='button'>< ArrowBackIcon/></button>
            <h1 className='book'>BOOK YOUR FLIGHT!!!</h1>
            <section>
            <div className='a'>
                <input type="radio" name="g"></input>
                <label for=" ">Roundtrip</label>   
                <input type="radio" name="g"></input>
                <label className='one' for=" "> Oneway</label>   
                <input type="radio" name="g"></input>
                <label for=" "> Multi-way</label> 
            </div>
                <div id="b">
                    <input type="text" placeholder="FLYING FROM" required/>
                    </div>  
                <div id="c">
                    <input type="text" placeholder="FLYING TO" required/>
                    </div>  
                <div id="d">
                    <input type="text" placeholder="DEPARTURE" required/>
                    </div>  
                <div id="e">
                    <input type="text" placeholder="RETURNING" required/>
                    </div>  
                <div id="f">
                    <input type="text" placeholder="NO OF TICKETS" required/>
                    </div>  
                <div id="g">
                    <input type="text" placeholder="TRAVEL CLASS" required/>
                    </div> 
                <div className='h'>    
                    <button className="but">SHOW FLIGHTS</button>
                </div>
            </section>   
        </div>
    )       
}
export default RegistrationForm;