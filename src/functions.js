import Swal from 'sweetalert2';
import axiosClient from './config/axios';

const functions = {
  showError: function (error) {
    Swal.fire('Error!', error, 'error');
  },

  toggleLoader: function (loaderState) {
    if (!loaderState) {
      Swal.close();
      return;
    }
    Swal.fire({
      title: 'Loading',
      didOpen: () => {
        Swal.showLoading();
      },
    });
  },

  tokenAuth: function (token) {
    if (token) {
      axiosClient.defaults.headers.common['x-auth-token'] = token;
    } else {
      delete axiosClient.defaults.headers.common['x-auth-token'];
    }
  },
};

export default functions;
