window.setInterval(() => {

    setTitle();

    if (paramsWiki == 'wikipedia' || paramsWiki == 'wiki' || paramsWiki == 'Wikipedia' || paramsWiki == 'Wiki') {
        titleRead.innerHTML = wikisTitle[1];
        read_1.innerHTML = `${wikisText_1[1]} <span>${wikisText_1[1.1]}</span> ${wikisText_1[1.2]} <span>${wikisText_1[1.3]}</span>`
        read_2.innerHTML = ``
    } else if (paramsWiki == 'spring' || paramsWiki == 'Spring') {
        titleRead.innerHTML = wikisTitle[3];
        read_1.innerHTML = `${wikisText_1[3]}`
        read_2.innerHTML = `${wikisText_1[3.1]}`
    } else if (paramsWiki == 'summer' || paramsWiki == 'Summer') {
        titleRead.innerHTML = wikisTitle[4];
        read_1.innerHTML = `${wikisText_1[4]}`
        read_2.innerHTML = `${wikisText_1[4.1]}`
    } else if (paramsWiki == 'autumn' || paramsWiki == 'Autumn') {
        titleRead.innerHTML = wikisTitle[5];
        read_1.innerHTML = `${wikisText_1[5]}`
        read_2.innerHTML = `${wikisText_1[5.1]}`
    } else if (paramsWiki == 'winter' || paramsWiki == 'Winter') {
        titleRead.innerHTML = wikisTitle[2];
        read_1.innerHTML = `${wikisText_1[2]}`
        read_2.innerHTML = `${wikisText_1[2.1]}`
    } else if (paramsWiki == 'worldcup' || paramsWiki == 'WorldCup' || paramsWiki == 'Worldcup' || paramsWiki == 'worldCup') {
        titleRead.innerHTML = wikisTitle[6];
        read_1.innerHTML = `${wikisText_1[6]}`
        read_2.innerHTML = `${wikisText_1[6.1]}`
    } else if (paramsWiki == 'HTML' || paramsWiki == 'HTML5') {
        titleRead.innerHTML = wikisTitle[7];
        read_1.innerHTML = `${wikisText_1[7]}`
        read_2.innerHTML = `${wikisText_1[7.1]}`
    } else if (paramsWiki == 'CSS' || paramsWiki == 'CSS3') {
        titleRead.innerHTML = wikisTitle[8];
        read_1.innerHTML = `${wikisText_1[8]}`
        read_2.innerHTML = `${wikisText_1[8.1]}`
    } else if (paramsWiki == 'JS' || paramsWiki == 'Javascript' || paramsWiki == 'javascript' || paramsWiki == 'JavaScript') {
        titleRead.innerHTML = wikisTitle[9];
        read_1.innerHTML = `${wikisText_1[9]}`
        read_2.innerHTML = `${wikisText_1[9.1]}`
    } else if (paramsWiki == 'Python' || paramsWiki == 'python') {
        titleRead.innerHTML = wikisTitle[10];
        read_1.innerHTML = `${wikisText_1[10]}`
        read_2.innerHTML = `${wikisText_1[10.1]}`
    } else if (paramsWiki == 'Youtube' || paramsWiki == 'youtube' || paramsWiki == 'YouTube') {
        titleRead.innerHTML = wikisTitle[11];
        read_1.innerHTML = `${wikisText_1[11]}`
        read_2.innerHTML = `${wikisText_1[11.1]}`
    } else if (paramsWiki == 'Facebook' || paramsWiki == 'facebook' || paramsWiki == 'FaceBook') {
        titleRead.innerHTML = wikisTitle[12];
        read_1.innerHTML = `${wikisText_1[12]}`
        read_2.innerHTML = `${wikisText_1[12.1]}`
    } else if (paramsWiki == 'Instagram' || paramsWiki == 'instagram' || paramsWiki == 'InstaGram') {
        titleRead.innerHTML = wikisTitle[13];
        read_1.innerHTML = `${wikisText_1[13]}`
        read_2.innerHTML = `${wikisText_1[13.1]}`
    } else if (paramsWiki == 'Messenger' || paramsWiki == 'messenger') {
        titleRead.innerHTML = wikisTitle[14];
        read_1.innerHTML = `${wikisText_1[14]}`
        read_2.innerHTML = `${wikisText_1[14.1]}`
    } else if (paramsWiki == 'Snapchat' || paramsWiki == 'snapchat') {
        titleRead.innerHTML = wikisTitle[15];
        read_1.innerHTML = `${wikisText_1[15]}`
        read_2.innerHTML = `${wikisText_1[15.1]}`
    } else if (paramsWiki == 'Discord' || paramsWiki == 'discord') {
        titleRead.innerHTML = wikisTitle[16];
        read_1.innerHTML = `${wikisText_1[16]}`
        read_2.innerHTML = `${wikisText_1[16.1]}`
    } else if (paramsWiki == 'Tiktok' || paramsWiki == 'TikTok' || paramsWiki == 'tiktok') {
        titleRead.innerHTML = wikisTitle[17];
        read_1.innerHTML = `${wikisText_1[17]}`
        read_2.innerHTML = `${wikisText_1[17.1]} <br><br><br><br><br><br><br><br><br> YouTube Shorts > TikTok`;
    } else if (paramsWiki == 'TS' || paramsWiki == 'Typescript' || paramsWiki == 'typescript' || paramsWiki == 'TypeScript') {
        titleRead.innerHTML = wikisTitle[18];
        read_1.innerHTML = `${wikisText_1[18]}`
        read_2.innerHTML = `${wikisText_1[18.1]}`;
    } else if (paramsWiki == 'TS' || paramsWiki == 'Minecraft' || paramsWiki == 'MineCraft' || paramsWiki == 'minecraft') {
        titleRead.innerHTML = wikisTitle[19];
        read_1.innerHTML = `${wikisText_1[19]}`
        read_2.innerHTML = `${wikisText_1[19.1]}`;
    } else if (paramsWiki == 'TS' || paramsWiki == 'Fortnite' || paramsWiki == 'fortnite') {
        titleRead.innerHTML = wikisTitle[20];
        read_1.innerHTML = `${wikisText_1[20]}`
        read_2.innerHTML = `${wikisText_1[20.1]}`;
    } else if (paramsWiki == 'TS' || paramsWiki == 'Apex' || paramsWiki == 'ApexLegends' || paramsWiki == 'apex' || paramsWiki == 'apexlegends') {
        titleRead.innerHTML = wikisTitle[21];
        read_1.innerHTML = `${wikisText_1[21]}`
        read_2.innerHTML = `${wikisText_1[21.1]}`;
    } else if (paramsWiki == 'RocketLeague' || paramsWiki == 'RL' || paramsWiki == 'rl' || paramsWiki == 'rocketleague') {
        titleRead.innerHTML = wikisTitle[22];
        read_1.innerHTML = `${wikisText_1[22]}`
        read_2.innerHTML = `${wikisText_1[22.1]}`;
    } else {
        titleRead.innerHTML = 'ERROR 404';
        read_1.innerHTML = "This article was not found";
        read_2.innerHTML = " Try searching for another article, if that doesn't work try refreshing the page, reconnecting to WIFI, if you have any problems try contacting us!";
    }
}, 20)

function setTitle() {
    if (paramsWiki != null) {
        document.title = `Wikipedia - ${paramsWiki}`;
    } else if (paramsWiki == null) {
        document.title = `Wikipedia`;
    }
}