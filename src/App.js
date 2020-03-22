import React, { useEffect, useState } from "react"
import Header from "./components/header"
import Form from "./components/form"
import LinkItem from "./components/linkItem"
import { v1 as uuidv1 } from "uuid"
import { setItemLS, readLS } from "./utils"
import "./styles/App.scss"

function App() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    // Get Links from localStorage
    const getLinks = readLS("links")
    if (getLinks) {
      setLinks(JSON.parse(getLinks))
    }
  }, [])

  const setLocalStorage = (links) => {
    // set localStorage
    setItemLS("links", JSON.stringify(links))
  }

  const addLink = (linkText) => {
    const newLinksArray = [...links, { id: uuidv1(), link: linkText }]
    setLinks(newLinksArray)
    setLocalStorage(newLinksArray)
  }
  const removeLink = (linkId) => {
    const newLinksArray = links.filter((link) => link.id !== linkId)
    setLinks(newLinksArray)
    setLocalStorage(newLinksArray)
  }

  const editLink = (value, linkId) => {
    // Find link to edit
    const indexToEdit = links.findIndex((link) => link.id === linkId)
    if (indexToEdit !== -1) {
      const newLinksArray = links
      newLinksArray[indexToEdit].link = value
      setLinks(newLinksArray)
      setLocalStorage(newLinksArray)
    }
  }
  return (
    <div className="App">
      <div className="link-wrapper">
        <Header />
        <Form handleLink={addLink} />
        <ul>
          {links &&
            links.map((link) => {
              return (
                <LinkItem
                  link={link}
                  key={`${link.id}`}
                  id={link.id}
                  removeLink={removeLink}
                  editLink={editLink}
                />
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default App
