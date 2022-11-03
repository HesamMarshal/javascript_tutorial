

// Functions
function router(params) {
    // What view show to user based on route
    // routes: dashboard, products, posts
    const routes = [
        { path: '/SPA/', view: () => console.log('dashboard page') },
        { path: '/SPA/posts', view: () => console.log('posts page') },
        { path: '/SPA/products', view: () => console.log('products page') },
    ];

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
    match.route.view();

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