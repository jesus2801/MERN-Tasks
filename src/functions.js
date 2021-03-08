import Swal from 'sweetalert2';

const functions = {
  showError: function (error) {
    Swal.fire('Error!', error, 'error');
  },
};

export default functions;
