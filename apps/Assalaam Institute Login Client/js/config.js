var firebaseConfig = {
    apiKey: "AIzaSyAtlc0LJdIytb-1_uKx9wIoCatPjooWsxc",
    authDomain: "assalaam-institute.firebaseapp.com",
    projectId: "assalaam-institute",
    storageBucket: "assalaam-institute.appspot.com",
    messagingSenderId: "51725736269",
    appId: "1:51725736269:web:d4a91d19883350ed5b3f04"
};

firebase.initializeApp(firebaseConfig);
const perf = firebase.performance();

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-M2RQZKG0RC');