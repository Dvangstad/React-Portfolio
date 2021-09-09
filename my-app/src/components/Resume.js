import React from 'react'
import resume from '../pdf/resume.pdf'

const Resume = () => {
    return (
        <div>
            <embed src={resume} width="100%" height="1920px" />  
        </div>
    )
}

export default Resume
