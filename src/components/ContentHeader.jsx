import React from 'react'
import { BiNotification, BiSearch } from 'react-icons/bi'

const ContentHeader = () => {
  return (
    <div>
        <div className="content-header">
            <h1 className="header-title">
                Dashboard
            </h1>
            <div className="header-activity">
                <div className="search-box">
                    <input type="text" placeholder='search anything here...' />
                    <BiSearch className='icon'/>
                </div>

                <div className="notify">
                    <BiNotification className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentHeader 