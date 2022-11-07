import Dashboard from "../pages/Dashboard.js";
import Products from "../pages/Products.js";
import Posts from "../pages/Posts.js";
import NotFound from "../pages/NotFound.js";
// Functions
function router(params) {
    // What view show to user based on route
    // routes: dashboard, products, posts
    const routes = [
        { path: '/', view: Dashboard },
        { path: '/products', view: Products },
        { path: '/posts', view: Posts },
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
    // console.log(potentialRoutes);
    if (!match) {
        match = {
            route: { path: 'NotFound', view: NotFound },
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

            navigateTo(e.target.href);
        };
    })
    router();
});

const sidebarToggler = document.querySelector(".sidebar-toggler");
const sidebar = document.querySelector(".nav");
const root = document.documentElement;



sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("mini-sidebar");
    if (sidebar.classList.contains("mini-sidebar"))
        root.style.setProperty('--nav-width', "70px");
    else
        root.style.setProperty('--nav-width', "250px");


});