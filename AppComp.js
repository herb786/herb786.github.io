export default {
    template: `
    <div class="app-carousel" id="app-carousel">
        <h2>ArxivLens</h2>
        <table>
        <tr>
        <td class="app-logo"><img src="img/logo.png" class="app-logo"/></td>
        <td class="app-description">ArXivLens has multiple features to look for preprints in ArXiv. The app includes all the subjects and categories you find in ArXiv. You have a search history to reuse your old searches and find new results. The app opens preprints in pdf format from your results with an external application. The app lets you mail to your colleagues or friend with a link to your search.</td>
        <td class="app-badge"><a href="https://play.google.com/store/apps/details?id=com.hacaller.arxivlens"><img src="img/google-play-badge.png"/></a><br>
        <a href="https://itunes.apple.com/us/app/arxivlens/id1352839831?mt=8"><img src="img/app-store-badge.png"/></a></td>
        </tr>
        </table>
    </div>
    `,
    data() {
        return {
            currentApp: '',
            myApps: [
                {
                    "id": 1,
                    "name": "ArxivLens",
                    "description": "ArXivLens has multiple features to look for preprints in ArXiv. The app includes all the subjects and categories you find in ArXiv. You have a search history to reuse your old searches and find new results. The app opens preprints in pdf format from your results with an external application. The app lets you mail to your colleagues or friend with a link to your search.",
                    "play": "https://play.google.com/store/apps/details?id=com.hacaller.arxivlens",
                    "itunes": "https://itunes.apple.com/us/app/arxivlens/id1352839831?mt=8",
                    "icono": "logo.png",
                    "fondo": "arxiv-bckg.png"
                },
                {
                    "id": 2,
                    "name": "Fibromorse",
                    "description": "Provides common prosigns used in telegraphy. Provide an alphabet with morse code and respective sounds. Customize you app theme colour. Learn about the pioneers and inventors of the telegraph. A simple AR activity to show an old classic telegraph.",
                    "play": "https://play.google.com/store/apps/details?id=com.hacaller.fibromorse",
                    "itunes": "",
                    "icono": "logo2.png",
                    "fondo": "morse-bckg.png"
                },
                {
                    "id": 4,
                    "name": "Andes Xchange",
                    "description": "Find dayly quotes for popular currencies and cryptocurrencies.",
                    "play": "https://play.google.com/store/apps/details?id=com.hacaller.peruexchange&hl=es",
                    "itunes": "https://itunes.apple.com/us/app/andes-xchange/id1458186544",
                    "icono": "andesxchange.png",
                    "fondo": "common-bckg.png"
                },
                {
                    "id": 5,
                    "name": "Citémosles!",
                    "description": "Share your quotes on your preferred social network like Twitter or Facebook in Spanish.",
                    "play": "",
                    "itunes": "https://itunes.apple.com/us/app/citémoslos/id1464253062",
                    "icono": "citemosles.png",
                    "fondo": "common-bckg.png"
                },
                {
                    "id": 6,
                    "name": "QuoteThem!",
                    "description": "Share your quotes on your preferred social network like Twitter or Facebook.",
                    "play": "",
                    "itunes": "https://itunes.apple.com/us/app/quotethem/id1464253737",
                    "icono": "quotethem.png",
                    "fondo": "common-bckg.png"
                },
                {
                    "id": 9,
                    "name": "Hangman Ninja",
                    "description": "Rescue the accused of his unfortunate fate with your knowledge. Do not let the ninja be near the gallows and perform the execution. You can choose different topics: Geography, Painters, Writers, Animals, Sports, Flowers, Trees, Minerals, Chemistry, Actors. Three levels of difficulty. You can play with 20, 30 or 40 words. At the moment only in spanish.",
                    "play": "https://play.google.com/store/apps/details?id=com.hacaller.theninjaexecutioner",
                    "itunes": "https://itunes.apple.com/us/app/hangman-ninja/id1449387511?ls=1&mt=8",
                    "icono": "hangman.png",
                    "fondo": "common-bckg.png"
                },
                {
                    "id": 10,
                    "name": "Alien Sudoku",
                    "description": "A classical sudoku game with new levels.",
                    "play": "",
                    "itunes": "https://itunes.apple.com/us/app/sudoku-alien/id1450760182?ls=1&mt=8",
                    "icono": "sudoku.png",
                    "fondo": "common-bckg.png"
                }
            ]
        }
    }
}