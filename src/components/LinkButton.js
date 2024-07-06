import React from 'react'

function LinkButton({ link, name, icon}) {
    return (
        <a href={link} title='icon' class="">
            <span class='icon-field'>
                {icon}
            </span>
            {name}
        </a>
    )
}

export default LinkButton