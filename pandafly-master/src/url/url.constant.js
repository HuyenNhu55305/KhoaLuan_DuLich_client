require('dotenv').config();
const PORT = 'http://localhost:8000/api';
let exports = {};
exports.TOUR_THE_SAME_DAY = PORT + '/tours/tour-name';
export default exports;
