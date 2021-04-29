const fetch = require('sync-fetch');
const Page = require("./_layout/Default");
const sClientID = process.env.SB_CLIENT_ID || 'ATxXFcWUU_P1twpBUrsy9nTzGMLsRuBX0_z0jVpvh4cx5R2yRG19XV3yLFBhypwMUNj26Uu9pULGGwU-'


module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Jason And Mark"});
    }
    render(sPage) {
        const oJson = fetch("https://prog8110-c93de-default-rtdb.firebaseio.com/meals.json").json();
        console.log(oJson);
        let sResult = "<h1>Upcoming Popup Meals</h1>";
        Object.keys(oJson).map((key) => {
            const oEntity = oJson[key];
            console.log(oEntity);
            oEntity.id = key;
            sResult += `
            <h2>${oEntity.title}</h2>
            <p><img src="${oEntity.featured_image}" alt="${oEntity.title}"</p>
            <p>${oEntity.full_description} $${oEntity.price}</p>
<!--            <form action="https://serene-taiga-04277.herokuapp.com/payment" method="post">-->
            <form action="https://prog8110smsjasonandmark.herokuapp.com/payment" method="post">
            <input type="hidden" name="title" value="${oEntity.title}" />
            <input type="hidden" name="price" value="${oEntity.price}" />
            <input type="tel" placeholder="enter your number" name="telephone"/>
            <button type="submit">Order now</button>
            </form>
            `;
        });
        return sResult;
    }
}