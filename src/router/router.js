import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import cookies from "vue-cookies";
// import crypto from "crypto";

Vue.use(VueRouter);

const myrouter = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/set",
            name: "setcookie",
            component: () => import(/* webpackChunkName: "set" */"../setCookie")
        },
        {
            path: "/login",
            name: "Login",
            component: () => import(/* webpackChunkName: "Login" */"../views/Login")
        },
        {
            path: "/error",
            name: "Error",
            component: () => import(/* webpackChunkName: "Error" */"../views/Error"),
        },
        {
            path: "/404",
            name: "404",
            component: () => import(/* webpackChunkName: "404" */"../views/404")
        },
        {
            path: "/:id",
            name: "Profile",
            props: true,
            component: () =>
                import(/* webpackChunkName: "profile" */"../views/Profile.vue")
        },
    ]
});

myrouter.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (cookies.get("osid")) {
            next();
        }
        else {
            next({ name: "Login" })
        }
        // if (cookies.get("osid") && cookies.get("os_token")) {
        //     const hash = crypto
        //         .createHash("sha1")
        //         .update("biheros" + cookies.get("osid"))
        //         .digest("hex");
        //     if (cookies.get("os_token") == hash) {
        //         console.log("Everything is perfect");
        //         next();
        //     }
        //     else {
        //         next({ name: "Error" });
        //     }
        // }
        // else {
        //     console.log("thusdsdsd");
        //     next({ name: "Login" })
        // }
    }
    else {
        next();
    }
});

export default myrouter;