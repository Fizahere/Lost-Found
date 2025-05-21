//form
// Initialization for ES Users
import {
  Input,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Input, Ripple });

//notfound
const knownPages = ['index.html', 'about.html', 'contact.html'];
const currentPage = location.pathname.split('/').pop();

if (currentPage && !knownPages.includes(currentPage)) {
  window.location.href = '404.html';
}

//check auth status
// let isAuthenticated = false;
// let authStatus = document.getElementById('auth-status');

// authStatus.innerHTML = isAuthenticated
//   ? `
//     <a href="/login.html" class="text-gray-800 text-sm font-semibold hover:text-[#9696e0] mr-4">Sign in</a>
//     <a href="/signup.html" class="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-[#9696e0] hover:border-[#9696e0]">Sign up</a>
//   `
//   : `
//     <svg id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="22" width="22">
//       <path d="m12 1c-7.71 0-11 3.29-11 11s3.29 11 11 11 11-3.29 11-11-3.29-11-11-11zm-4.293 19.475c.377-1.544 1.37-2.475 4.293-2.475s3.917.931 4.293 2.475c-1.176.357-2.594.525-4.293.525s-3.117-.168-4.293-.525zm10.413-.845c-1.012-3.217-3.916-3.631-6.119-3.631s-5.107.413-6.119 3.631c-2.028-1.35-2.881-3.774-2.881-7.631-.001-6.56 2.438-8.999 8.999-8.999s9 2.439 9 9c0 3.857-.853 6.281-2.881 7.631zm-6.12-13.63c-2.691 0-4 1.309-4 4s1.309 4 4 4 4-1.309 4-4-1.309-4-4-4zm0 6c-1.589 0-2-.411-2-2s.411-2 2-2 2 .411 2 2-.411 2-2 2z"/>
//     </svg>
//   `;
