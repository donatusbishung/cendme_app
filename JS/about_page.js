const nav [
    {
        name: "Home",
        id: 1,
        link: 'index.html',
    },

    {
        name: 'about',
        id: 2,
        link: 'about.html'
    },

    {
        name: 'contact us',
        id: 3,
        link: 'contact.html'

    },

    {
        name: 'FAQ',
        id: 4,
        link: 'faq.html',

    },



    // external js: masonry.pkgd.js

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  
];