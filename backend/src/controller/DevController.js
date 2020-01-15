const axios = require('axios'); // para consumir api do github
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// funções do controller => index(mostra lista), show(mostra único), store(criar), update(atualizar), destroy(deletar)

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },


    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;
            // name = login - se o name não estiver cadastrado trará o login

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude] // order utilizada pelo mongodb
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }

        return res.json(dev);
    }
}