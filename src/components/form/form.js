import React, {useState, Fragment} from 'react';
import '../../styles/form.scss';
import PropTypes from 'prop-types'
import { urlValidator } from '../../utils/urlValidator';

export default function Form({handleLink, link, onCloseModal}) {
  const [websiteAddress, setAddress] = useState(link.link);
  const [errorMessage, setErrorValue] = useState(false);

  const handleChange =(e) => {
    setAddress(e.target.value)
    setErrorValue(false)
  }

  const updateInput = (e, url) => {
    e.preventDefault();
    // URL validation
    if (url.length > 0 && urlValidator(url)){
      handleLink(url,link.id);
      setAddress('')
      onCloseModal()
      return setErrorValue(false)
    }
      setErrorValue(true)
  }
    return(
      <Fragment>
      <form onSubmit={(e) => updateInput(e, websiteAddress)}>
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
  onCloseModal: PropTypes.func,
  link: PropTypes.shape({
    id:PropTypes.node,
    link: PropTypes.string
   })
}

// Specifies the default values for props:
Form.defaultProps = {
  link: {id: null, link:''},
  onCloseModal: () => {}
};
