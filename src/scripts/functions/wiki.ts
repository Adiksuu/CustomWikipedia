window.setInterval(() => {
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
    } else {
        titleRead.innerHTML = 'ERROR 404';
        read_1.innerHTML = "This article was not found";
        read_2.innerHTML = " Try searching for another article, if that doesn't work try refreshing the page, reconnecting to WIFI, if you have any problems try contacting us!";
    }
    document.title = `Wikipedia - ${paramsWiki}`;
}, 20)

