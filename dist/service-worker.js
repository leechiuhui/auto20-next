if(!self.define){let i,e={};const n=(n,c)=>(n=new URL(n+".js",c).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(c,s)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const l=i=>n(i,o),a={module:{uri:o},exports:r,require:l};e[o]=Promise.all(c.map((i=>a[i]||l(i)))).then((i=>(s(...i),r)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"auto20-next"}),self.skipWaiting(),i.precacheAndRoute([{url:"/css/about.0bfdea1f.css",revision:null},{url:"/css/app.58abec1d.css",revision:null},{url:"/css/book.8da445d2.css",revision:null},{url:"/css/chunk-vendors.d680ee65.css",revision:null},{url:"/css/flag.4e5993e3.css",revision:null},{url:"/css/groups.1b6bf20c.css",revision:null},{url:"/css/maps.5fa7a45c.css",revision:null},{url:"/css/privacy-policy.7f4fe48c.css",revision:null},{url:"/css/profile.1e74bfea.css",revision:null},{url:"/css/qr.b7c52485.css",revision:null},{url:"/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/fonts/brand-icons.1a368124.ttf",revision:null},{url:"/fonts/brand-icons.a5c2b578.eot",revision:null},{url:"/fonts/brand-icons.d3632e64.woff2",revision:null},{url:"/fonts/brand-icons.ff793786.woff",revision:null},{url:"/fonts/icons.004393de.woff",revision:null},{url:"/fonts/icons.62a2bfb1.woff2",revision:null},{url:"/fonts/icons.8ec0357f.ttf",revision:null},{url:"/fonts/icons.fa5c061f.eot",revision:null},{url:"/fonts/outline-icons.315b68a4.woff",revision:null},{url:"/fonts/outline-icons.3c7c2806.eot",revision:null},{url:"/fonts/outline-icons.ba204dab.ttf",revision:null},{url:"/fonts/outline-icons.d24ca609.woff2",revision:null},{url:"/img/Cc_by-nd_icon.svg.3bcd59c2.png",revision:null},{url:"/img/android-chrome-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/android-chrome-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/android-chrome-maskable-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/android-chrome-maskable-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/apple-touch-icon-120x120.png",revision:"fecb15f24dca3d94e47b8899e69b50e2"},{url:"/img/apple-touch-icon-152x152.png",revision:"fd1afb980c194c08d70c0617a4ca1e0a"},{url:"/img/apple-touch-icon-180x180.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/apple-touch-icon-60x60.png",revision:"ea965f2b5adb8515f9da29935e9f9cd3"},{url:"/img/apple-touch-icon-76x76.png",revision:"255e7740bc5752c9b8b0f3570f1f5797"},{url:"/img/apple-touch-icon.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/brand-icons.b0ccb869.svg",revision:null},{url:"/img/favicon-16x16.png",revision:"0dd2a7dcc1d37190b4aed8f53f1c25ee"},{url:"/img/favicon-32x32.png",revision:"5c8d977ea9ea74ff54521768cc6be76a"},{url:"/img/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/img/flags.6989ab0a.png",revision:null},{url:"/img/handshake1.c81ff127.webp",revision:null},{url:"/img/icons.a93cf03c.svg",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons/android-chrome-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"c54b9b5b3e57db25784957c12ac9792b"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"54e23b22c00a54efef6bebdd3be8b76c"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"fecb15f24dca3d94e47b8899e69b50e2"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"fd1afb980c194c08d70c0617a4ca1e0a"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"ea965f2b5adb8515f9da29935e9f9cd3"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"255e7740bc5752c9b8b0f3570f1f5797"},{url:"/img/icons/apple-touch-icon.png",revision:"f0f5bccdc6c9c802570e25756fd336bb"},{url:"/img/icons/favicon-16x16.png",revision:"0dd2a7dcc1d37190b4aed8f53f1c25ee"},{url:"/img/icons/favicon-32x32.png",revision:"5c8d977ea9ea74ff54521768cc6be76a"},{url:"/img/icons/favicon.ico",revision:"eaba04101c4b1543962ffe21eac38017"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"ec334f3af90ea324c478e9793c717009"},{url:"/img/icons/mstile-150x150.png",revision:"299f3236be940c3f89d877e8f6cef453"},{url:"/img/icons/safari-pinned-tab.svg",revision:"72b597f1c89dbb03ed8ce9594bfaa982"},{url:"/img/manifest.json",revision:"1e4fb46e5f19b181713167952b460a6d"},{url:"/img/map1.1c12248b.webp",revision:null},{url:"/img/msapplication-icon-144x144.png",revision:"ec334f3af90ea324c478e9793c717009"},{url:"/img/mstile-150x150.png",revision:"299f3236be940c3f89d877e8f6cef453"},{url:"/img/outline-icons.7af2e9ac.svg",revision:null},{url:"/img/safari-pinned-tab.svg",revision:"72b597f1c89dbb03ed8ce9594bfaa982"},{url:"/index.html",revision:"eb23a77ca178d3236fc881942b42d2c3"},{url:"/js/886.54748357.js",revision:null},{url:"/js/886.54748357.js.map",revision:"8d839bca7d6e5d767521657f99c1e5b7"},{url:"/js/about.6d914579.js",revision:null},{url:"/js/about.6d914579.js.map",revision:"6bb10533db7b9133b8c6b2727675311d"},{url:"/js/app.9e1031c5.js",revision:null},{url:"/js/app.9e1031c5.js.map",revision:"f8a2f894512a7f21f1a156eca314b919"},{url:"/js/book.6ef90e1f.js",revision:null},{url:"/js/book.6ef90e1f.js.map",revision:"a7f8401310bf937a14635896ed0819b0"},{url:"/js/chunk-vendors.081b6c90.js",revision:null},{url:"/js/flag.ec454913.js",revision:null},{url:"/js/flag.ec454913.js.map",revision:"15f6d3584336429ad6f5019492f67ad2"},{url:"/js/groups.b3f8435f.js",revision:null},{url:"/js/groups.b3f8435f.js.map",revision:"45a0661de4a371610ca8c8c0918cc1d6"},{url:"/js/maps.09bfd3ba.js",revision:null},{url:"/js/maps.09bfd3ba.js.map",revision:"1ec1f83b67e23ab1fd1b3e75150fccc1"},{url:"/js/privacy-policy.5dc0b6de.js",revision:null},{url:"/js/privacy-policy.5dc0b6de.js.map",revision:"998278c15cbf2d1a781660cecfab7301"},{url:"/js/profile.bac8e259.js",revision:null},{url:"/js/profile.bac8e259.js.map",revision:"7e4b05af46d02f43aeedb1cf9d26ef66"},{url:"/js/qr.9744bb99.js",revision:null},{url:"/js/qr.9744bb99.js.map",revision:"c737a91cf730ab4b7bce76790e44de3a"},{url:"/logo-new.png",revision:"7d10c4f40d7c45aedb73183c824fbdfc"},{url:"/manifest.json",revision:"812af1d81460251c3f613c6665ebdc48"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
