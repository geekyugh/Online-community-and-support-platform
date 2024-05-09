import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling

// Custom hook for React Toastify
function useToast() {
  // Define default notification options
  const defaultOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  };

  // Function to display a toast notification
  const showToast = (message, type, options = {}) => {
    const mergedOptions = { ...defaultOptions, ...options }; // Merge defaults with custom options

    switch (type) {
      case 'success':
        toast.success(message, mergedOptions);
        break;
      case 'error':
        toast.error(message, mergedOptions);
        break;
      case 'info':
        toast.info(message, mergedOptions);
        break;
      case 'warning':
        toast.warn(warning, mergedOptions);
        break;
      default:
        toast(message, mergedOptions); // Handle other types or fall back to default
    }
  };

  return showToast;
}

export default useToast;
