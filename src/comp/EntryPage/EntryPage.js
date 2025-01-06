import React from 'react'
import "./EntryPage.scss"
import entryImage from "../../asstes/171.jpg"
const EntryPage = () => {
  return (
    <>
        <div class="entry_section parent ">
        <div class="entry_section_cont cont">
            <h2 class="heading" >
                Wings Coffee
            </h2>
            <div class="image_section">
                <img class="img" src={entryImage} alt=""/>
            </div>
        </div>
    </div>
    </>
  )
}

export default EntryPage
