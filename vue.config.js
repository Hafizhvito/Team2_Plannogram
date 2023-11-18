module.exports = {
    css:{
        loaderOptions:{
            sass:{
                data: '@import "@/assets/css/main.scss'
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}
