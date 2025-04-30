import { MY_APPS } from './constants.js'
export default {
    //props: ['myAppName', 'myLogo', 'myDescription', 'playStoreLink', 'itunesLink'],
    template: `
    <div class="app-carousel" id="app-carousel">
        <h2 ref="myAppName">{{myAppName}}</h2>
        <div class="app-description-box">
            <div class="app-logo">
                <img :src="myLogo" class="app-logo" ref="myLogo"/>
            </div>
            <div class="app-description" ref="myDescription">
                <p>{{ myDescription }}</p>
                <a :href="playStoreLink" ref="playStoreLink"><img src="img/google-play-badge.png"/></a>
                <a :href="itunesLink" ref="itunesLink"><img src="img/app-store-badge.png"/></a>
            </div>
        </div>
    </div>
    `,
    methods: {
        showCarousel() {
            var appSelected = MY_APPS[this.count % 10];
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
            myAppName: 'Furlong CGS',
            myLogo: 'img/furlong.png',
            myDescription: 'A calculator to convert length, surface and volume units. Also included a feet board calculator.',
            playStoreLink: 'https://play.google.com/store/apps/details?id=hacaller.furlong',
            itunesLink: 'https://apps.apple.com/us/app/furlong-cgs/id6456222314',
        }
    }
}