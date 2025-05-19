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

