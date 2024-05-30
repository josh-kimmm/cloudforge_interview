import axios from 'axios';

// Technically we don't need this since server actions exist but useful
// to show how the structure would look like with API routes.
axios.defaults.baseURL = 'http://localhost:3000';

export default axios;
