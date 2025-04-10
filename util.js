import { toast } from "react-toastify";

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right',
        icon: '✅',
        style: {
            background: 'linear-gradient(to right, #34d399, #3b82f6, #8b5cf6)',
            color: '#fff',
            fontWeight: 600,
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }
    });
};

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right',
        icon: '🚫',
        style: {
            background: 'linear-gradient(to right, #34d399, #3b82f6, #8b5cf6)',
            color: '#fff',
            fontWeight: 600,
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }
    });
};
