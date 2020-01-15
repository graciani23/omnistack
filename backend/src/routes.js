const { Router } = require('express'); // importando apenas o Router
const axios = require('axios'); // para consumir api do github
const Dev = require('./models/Dev');
const routes = Router();

routes.post('/devs', async (req, res) => {
    const { github_username, techs } = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;
    // name = login - se o name não estiver cadastrado trará o login

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    });
    
    return res.json(dev);
});

module.exports = routes;