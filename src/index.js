import "babel-polyfill";
async function getComponent() {
    const {
        default: _
    } =await import( /* webpackChunkName: "lodash" */ 'lodash')
    //    .then(_ => {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;

    //    }).catch(error => 'An error occurred while loading the component');
}
document.addEventListener("click",
    () => {
        console.log("123123")
        getComponent().then(element => {
            document.body.appendChild(element);
        })
    }
)