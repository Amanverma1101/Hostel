import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toast = (content,success) => {
// const notify = () => {
//   if (success) {
//     toast.success(content, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   } else {
//     toast.error(content, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   }
// }

 return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>);
}
export default Toast;