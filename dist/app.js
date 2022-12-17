let params = new URLSearchParams(window.location.search);
let paramsWiki;
window.setInterval(() => {
    paramsWiki = params.get("wiki");
    if (myElement.classList.contains("dark")) {
        toggler.classList.replace("fa-moon", "fa-sun");
    }
    else {
        toggler.classList.replace("fa-sun", "fa-moon");
    }
}, 10);
let setParams;
window.setTimeout(() => {
    searchArticle.value = paramsWiki;
}, 20);
function searchArticleConfirm() {
    if (setParams != '') {
        window.location.search = `?wiki=${setParams}`;
    }
}
window.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        searchArticleConfirm();
    }
});
window.setInterval(() => {
    setParams = searchArticle.value;
}, 10);
function toggleMenu() {
    leftside.classList.toggle("show");
}
function toggleMode() {
    myElement.classList.toggle("dark");
}
function loadContent() {
    if (paramsWiki == 'wikipedia' || paramsWiki == 'wiki' || paramsWiki == 'Wikipedia' || paramsWiki == 'Wiki') {
        titleRead.innerHTML = wikisTitle[1];
        read_1.innerHTML = `${wikisText_1[1]} <span>${wikisText_1[1.1]}</span> ${wikisText_1[1.2]} <span>${wikisText_1[1.3]}</span>`;
        read_2.innerHTML = ``;
    }
    else if (paramsWiki == 'spring' || paramsWiki == 'Spring') {
        titleRead.innerHTML = wikisTitle[3];
        read_1.innerHTML = `${wikisText_1[3]}`;
        read_2.innerHTML = `${wikisText_1[3.1]}`;
    }
    else if (paramsWiki == 'summer' || paramsWiki == 'Summer') {
        titleRead.innerHTML = wikisTitle[4];
        read_1.innerHTML = `${wikisText_1[4]}`;
        read_2.innerHTML = `${wikisText_1[4.1]}`;
    }
    else if (paramsWiki == 'autumn' || paramsWiki == 'Autumn') {
        titleRead.innerHTML = wikisTitle[5];
        read_1.innerHTML = `${wikisText_1[5]}`;
        read_2.innerHTML = `${wikisText_1[5.1]}`;
    }
    else if (paramsWiki == 'winter' || paramsWiki == 'Winter') {
        titleRead.innerHTML = wikisTitle[2];
        read_1.innerHTML = `${wikisText_1[2]}`;
        read_2.innerHTML = `${wikisText_1[2.1]}`;
    }
    else if (paramsWiki == 'worldcup' || paramsWiki == 'WorldCup' || paramsWiki == 'Worldcup' || paramsWiki == 'worldCup') {
        titleRead.innerHTML = wikisTitle[6];
        read_1.innerHTML = `${wikisText_1[6]}`;
        read_2.innerHTML = `${wikisText_1[6.1]}`;
    }
    else if (paramsWiki == 'HTML' || paramsWiki == 'HTML5') {
        titleRead.innerHTML = wikisTitle[7];
        read_1.innerHTML = `${wikisText_1[7]}`;
        read_2.innerHTML = `${wikisText_1[7.1]}`;
    }
    else if (paramsWiki == 'CSS' || paramsWiki == 'CSS3') {
        titleRead.innerHTML = wikisTitle[8];
        read_1.innerHTML = `${wikisText_1[8]}`;
        read_2.innerHTML = `${wikisText_1[8.1]}`;
    }
    else if (paramsWiki == 'JS' || paramsWiki == 'Javascript' || paramsWiki == 'javascript' || paramsWiki == 'JavaScript') {
        titleRead.innerHTML = wikisTitle[9];
        read_1.innerHTML = `${wikisText_1[9]}`;
        read_2.innerHTML = `${wikisText_1[9.1]}`;
    }
    else if (paramsWiki == 'Python' || paramsWiki == 'python') {
        titleRead.innerHTML = wikisTitle[10];
        read_1.innerHTML = `${wikisText_1[10]}`;
        read_2.innerHTML = `${wikisText_1[10.1]}`;
    }
    else {
        titleRead.innerHTML = 'ERROR 404';
        read_1.innerHTML = "This article was not found";
        read_2.innerHTML = " Try searching for another article, if that doesn't work try refreshing the page, reconnecting to WIFI, if you have any problems try contacting us!";
    }
    document.title = `Wikipedia - ${paramsWiki}`;
}
const myElement = document.querySelector("body");
const toggler = document.querySelector("#bell");
const leftside = document.querySelector(".leftside");
const titleRead = document.querySelector("#title-read");
const read_1 = document.querySelector(".read_1");
const read_2 = document.querySelector(".read_2");
const searchArticle = document.querySelector('#searchArticle');
let wikisTitle = {
    1: "Wikipedia",
    2: "Winter",
    3: "Spring",
    4: "Summer",
    5: "Autumn",
    6: "WorldCup 2022",
    7: "HTML",
    8: "CSS",
    9: "Javascript",
    10: "Python",
};
let wikisText_1 = {
    1: `A author of this custom wikipedia redesign is`,
    1.1: `Adiksuu`,
    1.2: `Start reading a wikipedia and learn something new! If you want, you can read another`,
    1.3: `wiki`,
    2: "Winter is a season that is characterized by cold temperatures, short days, and long nights. It is the season when the sun is at its lowest point in the sky and the days are shortest. In many parts of the world, winter is also associated with snow and other forms of precipitation, such as ice and sleet.",
    2.1: "Some people love the winter season because it allows them to engage in activities like skiing, ice skating, and building snowmen, while others find it cold and dreary. No matter what your feelings about winter may be, it is an important part of the year and brings with it a unique set of challenges and opportunities.",
    3: "Spring is a season that marks the transition from winter to summer and is characterized by warmer temperatures and longer daylight hours. It is a time of renewal and growth, as plants and trees begin to bud and bloom, and the natural world comes back to life after the colder, darker months of winter.",
    3.1: "Many people associate spring with a feeling of rejuvenation and optimism, and it is a popular time for outdoor activities and celebrations. Some common activities and traditions during the spring season include planting gardens, going on hikes, celebrating holidays like Easter and Passover, and participating in sports and other outdoor activities. Overall, spring is a time of growth and renewal, and is welcomed by many after the colder, darker days of winter.",
    4: "Summer is a season that is typically characterized by warm or hot weather, longer days, and shorter nights. It is the hottest season of the year in many parts of the world, and is typically associated with vacations, outdoor activities, and relaxation.",
    4.1: "Some people enjoy the warm weather and spend time at the beach, swimming, surfing, or boating. Others prefer to stay indoors in air-conditioned spaces and enjoy indoor activities such as reading, watching movies, or playing video games. Summer is also a popular time for travel, as many people take advantage of the longer days and warm weather to go on road trips, visit new places, or take exotic vacations. Regardless of how you choose to spend your summer, it is a time of year that is often associated with fun, enjoyment, and making memories with friends and family.",
    5: "Autumn, also known as fall, is a season characterized by cooler temperatures, shorter days, and changing leaves. It is typically associated with the months of September, October, and November in the Northern Hemisphere, and with March, April, and May in the Southern Hemisphere. During autumn, the angle of the sun's rays becomes lower in the sky, leading to a decrease in the amount of sunlight that reaches the Earth's surface. As a result, temperatures start to drop and the air becomes cooler. The cooler temperatures and shorter days signal to trees and plants that it is time to start preparing for winter. As a result, trees begin to lose their leaves and the leaves change color from green to shades of red, orange, and yellow.",
    5.1: "Autumn is a time for harvesting crops, such as pumpkins and apples, and for enjoying outdoor activities such as apple picking, hayrides, and foliage walks. It is also a time for cozy indoor activities, such as reading by the fireplace, making soup, and watching movies. Overall, autumn is a beautiful and enjoyable season that is beloved by many people around the world.",
    6: "The 2022 FIFA World Cup is an international soccer tournament that is scheduled to take place in Qatar from November 21 to December 18, 2022. It will be the first time that the World Cup will be held in the Middle East, and the first time that it will be held in November and December instead of the traditional June and July.",
    6.1: "A total of 32 teams will participate in the tournament, which will be held in eight stadiums across five host cities in Qatar. The final will take place at the Lusail Iconic Stadium, which will have a capacity of 80,000. The tournament is being organized by the Fédération Internationale de Football Association (FIFA) and is expected to be one of the most watched sporting events in the world.",
    7: "HTML (HyperText Markup Language) is a standardized system for marking up text and multimedia content for the web. It is the foundation of most web pages and is used to structure content, add multimedia, and create links to other documents. HTML consists of a series of elements, or tags, that are used to indicate different types of content and how they should be displayed in a web browser. HTML documents are made up of a series of elements, which are denoted by tags. These tags tell the web browser how to interpret and display the content of the document. For example, the <p> tag is used to define a paragraph, and the <img> tag is used to embed an image.",
    7.1: "HTML also allows for the creation of links to other web pages, using the <a> tag. Links are created by specifying the destination URL in the href attribute of the <a> tag. In addition to the core HTML tags, there are also a number of optional attributes that can be used to further customize the display of content. These attributes can be added to HTML elements to provide additional information or to change the default behavior of the element. Overall, HTML is a powerful and flexible tool for creating and formatting web content, and it is an essential component of the modern web.",
    8: "Cascading Style Sheets (CSS) is a stylesheet language used for describing the look and formatting of a document written in HTML, XML, or other markup languages. It is used to specify the layout, color, font, and other styles for the elements of a document. CSS is a powerful tool for separating the content and presentation of a document, allowing developers to make changes to the appearance of a website without changing the underlying HTML structure. It is commonly used in web development to create visually appealing and user-friendly websites.",
    8.1: `CSS is a declarative language, meaning that it consists of statements that describe how an element should be styled. These statements are called "rules" and are made up of selectors and declarations. Selectors determine which elements on a page the rule applies to, and declarations specify the style properties and values that should be applied to those elements CSS has a number of features that make it a powerful and flexible language for styling web content. These include support for media queries, which allow developers to create responsive designs that adapt to different screen sizes and devices, and the ability to create and use custom styles and layout using CSS frameworks such as Bootstrap and Foundation.`,
    9: "JavaScript is a programming language that is widely used in web development. It is a client-side scripting language, which means that it is executed by the web browser on the user's computer rather than on the server. JavaScript is an object-oriented language, which means that it is based on the concept of objects and their associated properties and methods. It is also a dynamically-typed language, which means that the data types of variables are determined at runtime rather than at compile-time.",
    9.1: "One of the main strengths of JavaScript is its ability to interact with and manipulate the Document Object Model (DOM), which is the structure of the HTML and XML documents that make up a web page. This allows developers to create interactive and dynamic web applications. JavaScript is also used in a variety of other contexts, such as server-side programming with Node.js, mobile app development with frameworks like React Native, and desktop app development with technologies like Electron.",
    10: "Python is a popular, high-level programming language known for its simplicity, readability, and flexibility. It is a general-purpose language that can be used for web development, data analysis, artificial intelligence, scientific computing, and more. Python has a large, active community of users and developers, which has contributed to the development of a wide range of libraries and frameworks for various applications.",
    10.1: "Some of the notable features of Python include a large standard library, support for object-oriented, imperative, and functional programming styles, and automatic memory management. Python is often used as a scripting language, but it can also be used to build standalone applications. It is available for most operating systems and can be used with many different development environments.",
};
//# sourceMappingURL=app.js.map