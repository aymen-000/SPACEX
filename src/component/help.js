import React from 'react'
import "../component/style.css"

function Help({image, title}) {
  return (
    <div style={ {backgroundImage:'url'+'('+image+')'} } className='help'>
        <div className='container'>
            <div className='content'>
                <div className='recent'>RECENT LAUNCH</div>
                <div className='title'>{title}</div>
                <div className='rewatch'>
                    <button onClick={()=>{console.log('clicked')}}>REWATCH</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help