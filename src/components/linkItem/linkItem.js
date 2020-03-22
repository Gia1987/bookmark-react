import React, { useState, Fragment } from "react"
import PropTypes from "prop-types"
import Modal from "react-responsive-modal"
import Form from "../form"
import "../../styles/linkItem.scss"

export default function LinkItem({ removeLink, id, link, editLink }) {
  const [modal, setModal] = useState(false)

  const onOpenModal = () => {
    setModal(true)
  }

  const onCloseModal = () => {
    setModal(false)
  }

  const removeWebAddress = (id) => {
    removeLink(id)
  }
  return (
    <Fragment>
      <div className="linkWrapper">
        <button className="btn-link" onClick={() => removeWebAddress(id)}>
          Remove
        </button>
        <button className="btn-link" onClick={onOpenModal}>
          Edit
        </button>
        <a target="blanck" href={`${link.link}`}>
          {link.link}
        </a>
      </div>
      <Modal open={modal} showCloseIcon={false} onClose={() => {}} center>
        <div className="modal">
          <Form handleLink={editLink} link={link} onCloseModal={onCloseModal} />
          <button className="btn-cancel" onClick={onCloseModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </Fragment>
  )
}

LinkItem.propTypes = {
  removeLink: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  link: PropTypes.shape({ link: PropTypes.string }).isRequired,
  editLink: PropTypes.func.isRequired
}
