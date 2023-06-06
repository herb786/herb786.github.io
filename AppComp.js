import { MY_APPS } from './constants.js'
export default {
    //props: ['myAppName', 'myLogo', 'myDescription', 'playStoreLink', 'itunesLink'],
    template: `
    <div class="app-carousel" id="app-carousel">
        <h2 ref="myAppName">{{myAppName}}</h2>
        <table>
        <tr>
        <td class="app-logo"><img :src="myLogo" class="app-logo" ref="myLogo"/></td>
        <td class="app-description" ref="myDescription">{{ myDescription }}</td>
        <td class="app-badge"><a :href="playStoreLink" ref="playStoreLink"><img src="img/google-play-badge.png"/></a>
        <a :href="itunesLink" ref="itunesLink"><img src="img/app-store-badge.png"/></a></td>
        </tr>
        </table>
    </div>
    `,
    methods: {
        showCarousel() {
            var appSelected = MY_APPS[this.count % 9];
            console.log(this.myAppName);
            this.myAppName = appSelected.name;
            this.myLogo = appSelected.icono;
            this.myDescription = appSelected.description;
            this.playStoreLink = appSelected.play;
            this.itunesLink = appSelected.itunes;
            this.count = this.count + 1;
        }
    },
    mounted() {
        setInterval(this.showCarousel, 3000);
    },
    data() {
        return {
            count: 0,
            myAppName: 'ArXivLens',
            myLogo: 'img/logo.png',
            myDescription: 'ArXivLens has multiple features to look for preprints in ArXiv. The app includes most of the subjects and categories you find in ArXiv. You have a search history to reuse your old searches and find new results. The app opens preprints in pdf format using your installed external applications. The app lets you mail your search results to your colleagues or friends.',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.hacaller.arxivlens',
            itunesLink: 'https://itunes.apple.com/us/app/arxivlens/id1352839831?mt=8',
        }
    }
}