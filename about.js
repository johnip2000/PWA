const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"About", sName:"Jason And Mark"});
    }
    render(sPage) {  
        return `
        ${this.requireMarked('_pages/about.md')}
        `;
    }
}