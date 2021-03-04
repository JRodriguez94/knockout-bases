

require.config({
    paths: {
        ko: 'libs/knockout',
        jquery: 'libs/jquery',
        text: 'libs/text',
        bootstrap: 'libs/bootstrap-bundle',
    }
})


require(['jquery', 'bootstrap', 'ko', 'loader',], ko => {
    console.log('Entra al require del MAIN')
})