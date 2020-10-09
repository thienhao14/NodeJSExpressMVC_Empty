const path = require('path');
function HomeController(req, res) {
    res.sendFile(path.join(__dirname, '../views/home/index.html'));
}

function HomeData(req, res) {
    res.send(require(path.join(__dirname, '../Models/HomeModel')));
}

module.exports = {
    HomeController,
    HomeData
} 