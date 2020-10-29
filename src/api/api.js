const api = "http://ddragon.leagueoflegends.com/cdn/10.16.1/data/es_ES/runesReforged.json";
const base_img_url = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/";

function getRunes() {
    return fetch(api)
        .then(response => response.json())
        .then(result => {
            return result
        })
}

module.exports = {
    getRunes,
    base_img_url
}