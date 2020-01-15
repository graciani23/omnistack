const { Router } = require('express'); // importando apenas o Router

const routes = Router();

routes.post('/devs', (req, res) => {
    console.log(req.body);
    return res.json({ message: 'Hello Omnistack!' });
});

module.exports = routes;