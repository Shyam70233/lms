import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
export default function useNotify(msg){
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const boot = () =>{
        if(msg){
            enqueueSnackbar(msg)
        }
    }

    useEffect(boot,[])
    return null
}