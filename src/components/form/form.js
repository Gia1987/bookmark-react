import React, {useState, Fragment} from 'react';
import '../../styles/form.css';
import PropTypes from 'prop-types'
import { urlValidator } from '../../utils/urlValidator';

export default function Form({handleLink}) {
  const [websiteAddress, setAddress] = useState('');
  const [errorMessage, setErrorValue] = useState(false);

  const handleChange =(e) => {
    setAddress(e.target.value)
    setErrorValue(false)
  }

  const updateInput = (e, url) => {
    e.preventDefault();
    // URL validation
    if (url.length > 0 && urlValidator(url)){
      handleLink(url);
      setAddress('')
      return setErrorValue(false)
    }
      setErrorValue(true)
  }
    return(
      <Fragment>
      <form className='form' onSubmit={(e) => updateInput(e, websiteAddress)}>
        <input type='text'
         placeholder="Add website address"
         value={websiteAddress}
         onChange={handleChange}/>
        <button className='btn btn-primary' >Submit</button>
      </form>
      {errorMessage && (<div className="error-message">Not a valid website url</div>)}
      </Fragment>
    )
  }

Form.propTypes = {
  handleLink: PropTypes.func.isRequired,
}
