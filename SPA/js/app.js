import Dashboard from "../pages/Dashboard.js";
import Products from "../pages/Products.js";
import Posts from "../pages/Posts.js";
// Functions
function router(params) {
    // What view show to user based on route
    // routes: dashboard, products, posts
    const routes = [
        { path: '/SPA/', view: Dashboard },
        { path: '/SPA/products', view: Products },
        { path: '/SPA/posts', view: Posts },
    ];

    // const routes = [
    //     { path: '/SPA/', view: () => console.log("Dash") },
    //     { path: '/SPA/products', view: () => console.log("Dash") },
    //     { path: '/SPA/posts', view: () => console.log("Dash") },
    // ];

    const potentialRoutes = routes.map(item => {
        return {
            route: item,
            isMatch: location.pathname === item.path,
        };
    });

    let match = potentialRoutes.find(route => route.isMatch);

    if (!match) {
        match = {
            route: { path: '/404', view: () => console.log('404 page') },
            isMatch: true,
        }
    }

    // console.log(match);
    document.querySelector('#app').innerHTML = match.route.view();
    // match.route.view();

}
function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

// 
window.addEventListener('popstate', router);
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        // console.log(e.target);
        // if (e.target.hasAttribute('data-link')) {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            // console.log(e.target.href)
            navigateTo(e.target.href);
        };
    })
    router();
});