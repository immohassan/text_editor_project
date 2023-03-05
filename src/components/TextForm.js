import PropTypes from 'prop-types'
import {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState(''); //state

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    //================upper case ===================//
    
    const handleUpperCase = ()=> {
        let upper = text.toUpperCase();
        setText(upper);
    }
    //================lower case ===================//
    
    const handleLowerCase = ()=> {
        let lower = text.toLowerCase();
        setText(lower);
    }
    //=============== clear case ===================//

    const handleClearCase =()=>{
        let clear = '';
        setText(clear);
    } 

    return ( <div className='container-fluid'>
                <div className="mb-3">
            <label htmlfor="exampleFormControlTextarea1" className="form-label" id="heading"><h3 style={{color: 'white'}}>{props.heading}</h3></label>
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="textarea" rows="10"></textarea>
            </div>
            <button className= "button" style={{color: 'white'}} onClick={handleUpperCase}>Upper Case</button>
            <button className= "button" style={{color: 'white'}} onClick={handleLowerCase}>Lower Case</button>
            <button className= "button" style={{color: 'white'}} onClick={handleClearCase}>Clear Text</button>
            <div className="container">
                <h4 style={{color: 'white'}}>Word count: </h4>
                <p style={{color: 'white'}}>{text.split(" ").length -1}</p>
                <h4 style={{color: 'white'}}>Character count: </h4>
                <p style={{color: 'white'}}>{text.length}</p>
                <h4 style={{color: 'white'}}>Average reading Time: </h4>
                <p style={{color: 'white'}}>{0.008 * (text.split(" ").length-1)} minutes</p>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
};