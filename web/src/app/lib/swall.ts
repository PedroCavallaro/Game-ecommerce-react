import Swal from "sweetalert2";

export const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                color: "#000",
                showConfirmButton: false,
                background: "#ffff",
                timer: 1500,
                timerProgressBar: true,
            })