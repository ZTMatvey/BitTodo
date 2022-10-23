import { toast } from 'react-toastify';
import ToastNotificationType from './ToastNotificationType';

export const showToast = (type: ToastNotificationType, message: string)=>{
    switch (type){
        case ToastNotificationType.Success:
            toast.success(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        break;
        case ToastNotificationType.Error:
            toast.error(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        break;
    }
}