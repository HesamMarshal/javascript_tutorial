// What view show to user based on route



function router(params) {
    // routes: dashboard, products, posts
    const routes = [
        { path: '/SPA/', view: () => console.log('dashboard page') },
        { path: 'posts', view: () => console.log('posts page') },
        { path: 'products', view: () => console.log('products page') },
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

    console.log(match);
    match.route.view();

}

document.addEventListener("DOMContentLoaded", () => {
    router();
});