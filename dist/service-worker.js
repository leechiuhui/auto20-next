if(!self.define){let i,e={};const n=(n,c)=>(n=new URL(n+".js",c).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(c,s)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const l=i=>n(i,o),a={module:{uri:o},exports:r,require:l};e[o]=Promise.all(c.map((i=>a[i]||l(i)))).then((i=>(s(...i),r)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"auto20-next"}),self.skipWaiting(),i.precacheAndRoute([{url:"/css/about.39d86070.css",revision:null},{url:"/css/app.9e750036.css",revision:null},{url:"/css/book.1d232752.css",revision:null},{url:"/css/chunk-vendors.d680ee65.css",revision:null},{url:"/css/flag.837bdcf0.css",revision:null},{url:"/css/groups.9bd27289.css",revision:null},{url:"/css/maps.5fa7a45c.css",revision:null},{url:"/css/myplace.62348fe6.css",revision:null},{url:"/css/privacy-policy.0366857e.css",revision:null},{url:"/css/profile.9820eb63.css",revision:null},{url:"/css/qr.a3161191.css",revision:null},{url:"/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/fonts/brand-icons.1a368124.ttf",revision:null},{url:"/fonts/brand-icons.a5c2b578.eot",revision:null},{url:"/fonts/brand-icons.d3632e64.woff2",revision:null},{url:"/fonts/brand-icons.ff793786.woff",revision:null},{url:"/fonts/icons.004393de.woff",revision:null},{url:"/fonts/icons.62a2bfb1.woff2",revision:null},{url:"/fonts/icons.8ec0357f.ttf",revision:null},{url:"/fonts/icons.fa5c061f.eot",revision:null},{url:"/fonts/outline-icons.315b68a4.woff",revision:null},{url:"/fonts/outline-icons.3c7c2806.eot",revision:null},{url:"/fonts/outline-icons.ba204dab.ttf",revision:null},{url:"/fonts/outline-icons.d24ca609.woff2",revision:null},{url:"/img/Cc_by-nd_icon.svg.3bcd59c2.png",revision:null},{url:"/img/android-chrome-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/android-chrome-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/android-chrome-maskable-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/android-chrome-maskable-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/apple-touch-icon-120x120.png",revision:"fecb15f24dca3d94e47b8899e69b50e2"},{url:"/img/apple-touch-icon-152x152.png",revision:"fd1afb980c194c08d70c0617a4ca1e0a"},{url:"/img/apple-touch-icon-180x180.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/apple-touch-icon-60x60.png",revision:"ea965f2b5adb8515f9da29935e9f9cd3"},{url:"/img/apple-touch-icon-76x76.png",revision:"255e7740bc5752c9b8b0f3570f1f5797"},{url:"/img/apple-touch-icon.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/brand-icons.b0ccb869.svg",revision:null},{url:"/img/favicon-16x16.png",revision:"0dd2a7dcc1d37190b4aed8f53f1c25ee"},{url:"/img/favicon-32x32.png",revision:"5c8d977ea9ea74ff54521768cc6be76a"},{url:"/img/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/img/flags.6989ab0a.png",revision:null},{url:"/img/handshake1.3875f7ab.webp",revision:null},{url:"/img/icons.a93cf03c.svg",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons/android-chrome-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"fecb15f24dca3d94e47b8899e69b50e2"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"fd1afb980c194c08d70c0617a4ca1e0a"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"ea965f2b5adb8515f9da29935e9f9cd3"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"255e7740bc5752c9b8b0f3570f1f5797"},{url:"/img/icons/apple-touch-icon.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons/favicon-16x16.png",revision:"0dd2a7dcc1d37190b4aed8f53f1c25ee"},{url:"/img/icons/favicon-32x32.png",revision:"5c8d977ea9ea74ff54521768cc6be76a"},{url:"/img/icons/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"ec334f3af90ea324c478e9793c717009"},{url:"/img/icons/mstile-150x150.png",revision:"299f3236be940c3f89d877e8f6cef453"},{url:"/img/icons/safari-pinned-tab.svg",revision:"72b597f1c89dbb03ed8ce9594bfaa982"},{url:"/img/manifest.json",revision:"ca9b72d123a80d2915c1292b975dfec1"},{url:"/img/map1.1c12248b.webp",revision:null},{url:"/img/msapplication-icon-144x144.png",revision:"ec334f3af90ea324c478e9793c717009"},{url:"/img/mstile-150x150.png",revision:"299f3236be940c3f89d877e8f6cef453"},{url:"/img/outline-icons.7af2e9ac.svg",revision:null},{url:"/img/safari-pinned-tab.svg",revision:"72b597f1c89dbb03ed8ce9594bfaa982"},{url:"/index.html",revision:"78339f093e2ca071173d87f3d05f7a12"},{url:"/js/886.54748357.js",revision:null},{url:"/js/886.54748357.js.map",revision:"8d839bca7d6e5d767521657f99c1e5b7"},{url:"/js/about.a197bb60.js",revision:null},{url:"/js/about.a197bb60.js.map",revision:"b7537b432c75c0925cd0bf30055f7dcd"},{url:"/js/app.52a2318e.js",revision:null},{url:"/js/app.52a2318e.js.map",revision:"2b23522990bb7f4e5d275f25951befd0"},{url:"/js/book.7751b040.js",revision:null},{url:"/js/book.7751b040.js.map",revision:"a39295e659c0e7ae0e0aeed0a03de3e5"},{url:"/js/chunk-vendors.c6513132.js",revision:null},{url:"/js/flag.00a2d543.js",revision:null},{url:"/js/flag.00a2d543.js.map",revision:"f47c69fee320bd0c1723e2044efbfa68"},{url:"/js/groups.e44a0e70.js",revision:null},{url:"/js/groups.e44a0e70.js.map",revision:"cbaea9101e55c752b4a46cae838a39a8"},{url:"/js/maps.b2217be9.js",revision:null},{url:"/js/maps.b2217be9.js.map",revision:"3227f5b0125b9b1cec3908f590978d98"},{url:"/js/myplace.b790c803.js",revision:null},{url:"/js/myplace.b790c803.js.map",revision:"511a3cac5ef9a562d5fd47cec1d8be18"},{url:"/js/privacy-policy.09709c72.js",revision:null},{url:"/js/privacy-policy.09709c72.js.map",revision:"c84944b9bf5b3a0c2d94d354443293df"},{url:"/js/profile.d9605309.js",revision:null},{url:"/js/profile.d9605309.js.map",revision:"44fc841275e64a54a4850fefec433212"},{url:"/js/qr.7a1a31b8.js",revision:null},{url:"/js/qr.7a1a31b8.js.map",revision:"b5fdc70423d5f84a6b708777c9d796ba"},{url:"/logo-new.png",revision:"7d10c4f40d7c45aedb73183c824fbdfc"},{url:"/manifest.json",revision:"60fef2835f63b520c131b2cfea520227"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
