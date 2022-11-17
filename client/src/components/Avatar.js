import React from 'react'
import { useSelector } from 'react-redux'

const Avatar = ({src, size}) => {
    const { theme } = useSelector(state => state)

    return (
        <img src={"http://127.0.0.1:8887/avatar.png"} alt="avatar" className={size}
        style={{filter: `${theme ? 'invert(1)' : 'invert(0)'}`}} />
    )
}

export default Avatar
