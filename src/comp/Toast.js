import React from 'react'
import { useSelector} from 'react-redux'
import { useSnackbar } from 'notistack';
const Toast = () => {
    const state = useSelector(s=>s)
    const {msg} = state
    return (
        <div className={msg ? "toast active": "toast"}>Server Says : {msg}</div>
  )
}

export default Toast
