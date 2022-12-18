let params = new URLSearchParams(window.location.search);
let paramsWiki;
window.setInterval(() => {
    paramsWiki = params.get("wiki");
}, 10);
function save() {
    let Save = {
        toggled: toggled
    };
    localStorage.setItem("Saved", JSON.stringify(Save));
}
function load() {
    var SaveGame = JSON.parse(localStorage.getItem("Saved"));
    if (typeof SaveGame.toggled !== "undefined")
        toggled = SaveGame.toggled;
}
let setParams;
window.setTimeout(() => {
    searchArticle.value = paramsWiki;
}, 20);
function searchArticleConfirm() {
    if (setParams != '') {
        window.location.search = `?wiki=${setParams}`;
    }
    else if (setParams == '') {
        window.location.search = '';
    }
}
window.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        searchArticleConfirm();
    }
});
window.setInterval(() => {
    setParams = searchArticle.value;
    if (paramsWiki != null) {
        contentSearched.classList.add('show');
        contentHome.classList.add('hide');
    }
    else if (paramsWiki == null) {
        contentSearched.classList.remove('show');
        contentHome.classList.remove("hide");
    }
}, 10);
function showCategories() {
    if (categoriesArrow_1.classList.contains("fa-chevron-down")) {
        categories.classList.add("show");
        categoriesArrow_1.classList.replace('fa-chevron-down', 'fa-chevron-right');
    }
    else if (categoriesArrow_1.classList.contains("fa-chevron-right")) {
        categories.classList.remove("show");
        categoriesArrow_1.classList.replace('fa-chevron-right', 'fa-chevron-down');
    }
}
function showCategories_2() {
    if (categoriesArrow_2.classList.contains("fa-chevron-down")) {
        categories_2.classList.add("show");
        categoriesArrow_2.classList.replace("fa-chevron-down", "fa-chevron-right");
    }
    else if (categoriesArrow_2.classList.contains("fa-chevron-right")) {
        categories_2.classList.remove("show");
        categoriesArrow_2.classList.replace("fa-chevron-right", "fa-chevron-down");
    }
}
function showCategories_3() {
    if (categoriesArrow_3.classList.contains("fa-chevron-down")) {
        categories_3.classList.add("show");
        categoriesArrow_3.classList.replace("fa-chevron-down", "fa-chevron-right");
    }
    else if (categoriesArrow_3.classList.contains("fa-chevron-right")) {
        categories_3.classList.remove("show");
        categoriesArrow_3.classList.replace("fa-chevron-right", "fa-chevron-down");
    }
}
function showCategories_4() {
    if (categoriesArrow_4.classList.contains("fa-chevron-down")) {
        categories_4.classList.add("show");
        categoriesArrow_4.classList.replace("fa-chevron-down", "fa-chevron-right");
    }
    else if (categoriesArrow_4.classList.contains("fa-chevron-right")) {
        categories_4.classList.remove("show");
        categoriesArrow_4.classList.replace("fa-chevron-right", "fa-chevron-down");
    }
}
function showCategories_5() {
    if (categoriesArrow_5.classList.contains("fa-chevron-down")) {
        categories_5.classList.add("show");
        categoriesArrow_5.classList.replace("fa-chevron-down", "fa-chevron-right");
    }
    else if (categoriesArrow_5.classList.contains("fa-chevron-right")) {
        categories_5.classList.remove("show");
        categoriesArrow_5.classList.replace("fa-chevron-right", "fa-chevron-down");
    }
}
function toggleMenu() {
    leftside.classList.toggle("show");
}
let toggled = false;
function toggleMode() {
    if (toggled == false) {
        toggled = true;
    }
    else {
        toggled = false;
    }
    save();
}
window.setInterval(() => {
    if (toggled == false) {
        toggler.classList.replace("fa-sun", "fa-moon");
        myElement.classList.remove('dark');
    }
    else {
        toggler.classList.replace("fa-moon", "fa-sun");
        myElement.classList.add("dark");
    }
}, 10);
window.setInterval(() => {
    setTitle();
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
    else if (paramsWiki == 'Youtube' || paramsWiki == 'youtube' || paramsWiki == 'YouTube') {
        titleRead.innerHTML = wikisTitle[11];
        read_1.innerHTML = `${wikisText_1[11]}`;
        read_2.innerHTML = `${wikisText_1[11.1]}`;
    }
    else if (paramsWiki == 'Facebook' || paramsWiki == 'facebook' || paramsWiki == 'FaceBook') {
        titleRead.innerHTML = wikisTitle[12];
        read_1.innerHTML = `${wikisText_1[12]}`;
        read_2.innerHTML = `${wikisText_1[12.1]}`;
    }
    else if (paramsWiki == 'Instagram' || paramsWiki == 'instagram' || paramsWiki == 'InstaGram') {
        titleRead.innerHTML = wikisTitle[13];
        read_1.innerHTML = `${wikisText_1[13]}`;
        read_2.innerHTML = `${wikisText_1[13.1]}`;
    }
    else if (paramsWiki == 'Messenger' || paramsWiki == 'messenger') {
        titleRead.innerHTML = wikisTitle[14];
        read_1.innerHTML = `${wikisText_1[14]}`;
        read_2.innerHTML = `${wikisText_1[14.1]}`;
    }
    else if (paramsWiki == 'Snapchat' || paramsWiki == 'snapchat') {
        titleRead.innerHTML = wikisTitle[15];
        read_1.innerHTML = `${wikisText_1[15]}`;
        read_2.innerHTML = `${wikisText_1[15.1]}`;
    }
    else if (paramsWiki == 'Discord' || paramsWiki == 'discord') {
        titleRead.innerHTML = wikisTitle[16];
        read_1.innerHTML = `${wikisText_1[16]}`;
        read_2.innerHTML = `${wikisText_1[16.1]}`;
    }
    else if (paramsWiki == 'Tiktok' || paramsWiki == 'TikTok' || paramsWiki == 'tiktok') {
        titleRead.innerHTML = wikisTitle[17];
        read_1.innerHTML = `${wikisText_1[17]}`;
        read_2.innerHTML = `${wikisText_1[17.1]} <br><br><br><br><br><br><br><br><br> YouTube Shorts > TikTok`;
    }
    else {
        titleRead.innerHTML = 'ERROR 404';
        read_1.innerHTML = "This article was not found";
        read_2.innerHTML = " Try searching for another article, if that doesn't work try refreshing the page, reconnecting to WIFI, if you have any problems try contacting us!";
    }
}, 20);
function setTitle() {
    if (paramsWiki != null) {
        document.title = `Wikipedia - ${paramsWiki}`;
    }
    else if (paramsWiki == null) {
        document.title = `Wikipedia`;
    }
}
const myElement = document.querySelector("body");
const toggler = document.querySelector("#bell");
const leftside = document.querySelector(".leftside");
const titleRead = document.querySelector("#title-read");
const read_1 = document.querySelector(".read_1");
const read_2 = document.querySelector(".read_2");
const searchArticle = document.querySelector('#searchArticle');
const categories = document.querySelector(".categories");
const categories_2 = document.querySelector(".categories_2");
const categories_3 = document.querySelector(".categories_3");
const categories_4 = document.querySelector(".categories_4");
const categories_5 = document.querySelector(".categories_5");
const categoriesArrow_1 = document.querySelector("#categoriesArrow_1");
const categoriesArrow_2 = document.querySelector("#categoriesArrow_2");
const categoriesArrow_3 = document.querySelector("#categoriesArrow_3");
const categoriesArrow_4 = document.querySelector("#categoriesArrow_4");
const categoriesArrow_5 = document.querySelector("#categoriesArrow_5");
const contentSearched = document.querySelector("#contentSearched");
const contentHome = document.querySelector("#contentHome");
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
    11: "Youtube",
    12: "Facebook",
    13: "Instagram",
    14: "Messenger",
    15: "Snapchat",
    16: "Discord",
    17: "TikTok",
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
    11: "YouTube is a video-sharing platform that allows users to upload, share, and view videos. It was created in 2005 and has since become one of the largest and most popular video platforms on the internet. It is available in nearly every country and in more than 100 languages. In addition to hosting user-generated content, YouTube also offers a wide range of original content, including music videos, educational videos, and exclusive programming from a variety of content partners. YouTube is owned by Google and is a subsidiary of Alphabet Inc.",
    11.1: "YouTube is a free platform, but it also offers a paid subscription service called YouTube Premium, which allows users to watch videos ad-free and access exclusive content. YouTube has a large and diverse community of users, including individuals, organizations, and businesses. It is a popular platform for creators to share their content and reach a wide audience. In addition to hosting videos, YouTube also has a strong emphasis on community engagement. Users can comment on videos, like them, and subscribe to channels to receive notifications when new content is uploaded. YouTube has faced controversy in the past for its handling of inappropriate or offensive content, as well as its algorithms that have been criticized for promoting conspiracy theories and misinformation. The company has implemented various policies and efforts to address these issues, including stricter guidelines for content and the use of machine learning to flag and remove inappropriate content. YouTube has also faced criticism for its role in the spread of misinformation and its impact on the media industry. The platform has implemented policies to reduce the spread of misinformation and has partnered with fact-checking organizations to provide accurate information to users. Despite these challenges, YouTube remains a popular and influential platform, with billions of users and billions of views each day. It is an important platform for creators to share their content, and it has also played a significant role in the evolution of the media industry.",
    12: "Facebook is a social media platform that allows users to connect with friends and family, share photos and updates, and discover and engage with content from around the world. It was founded in 2004 and has since become one of the largest and most popular social media platforms in the world, with over 2.7 billion monthly active users as of the end of 2020. In addition to its main site, Facebook also owns a number of other platforms and services, including Instagram, WhatsApp, and Oculus VR. Facebook is a publicly traded company and is headquartered in Menlo Park, California.",
    12.1: "In addition to its main website, Facebook also has a mobile app that allows users to access the platform on their smartphones and tablets. The app is available for iOS and Android devices. On Facebook, users can create a personal profile, add friends, and share updates, photos, and videos. They can also join groups and pages related to their interests and participate in online communities. Facebook also has a number of features for businesses, including the ability to create a business page and advertise products and services to a targeted audience. Many businesses use Facebook as a way to connect with customers and promote their brand. Facebook has faced a number of controversies over the years, including issues related to user privacy, the spread of misinformation, and the role it has played in the spread of fake news. The company has implemented various measures to address these issues, including stricter policies for content and advertising, and the use of artificial intelligence to flag inappropriate content. Despite these challenges, Facebook remains a popular and influential platform, with millions of businesses and organizations using it to connect with customers and promote their products and services. It has also played a significant role in the evolution of the social media landscape and has had a significant impact on the way people communicate and share information online.",
    13: "Instagram is a social media platform that allows users to share photos and videos, as well as to interact with others through likes, comments, and direct messages. It was launched in 2010 and has since become one of the most popular social media platforms, particularly among younger users. Instagram is available as a free app on both the Apple App Store and Google Play Store, and can also be accessed on the web. In addition to its core features, Instagram also offers a range of creative tools and features, such as filters, stickers, and the ability to create and share short-form videos on its platform, Instagram Reels.",
    13.1: "Instagram is a visual social media platform that allows users to share photos and videos with their followers, as well as to interact with others through likes, comments, and direct messages. Instagram is available as a free app on both the Apple App Store and Google Play Store, and can also be accessed on the web. Instagram is owned by Facebook, which acquired the company in 2012. Instagram has a global user base of over 1 billion monthly active users, making it one of the most popular social media platforms in the world. In addition to its core features, Instagram also offers a range of creative tools and features, such as filters, stickers, and the ability to create and share short-form videos on its platform, Instagram Reels. Instagram is known for its focus on visual content and its emphasis on creativity and self-expression. Many users also use the platform to discover and follow their favorite celebrities, brands, and influencers. Instagram has a number of features that allow users to customize their profiles and control their privacy, including the ability to set their accounts to private, block or unfollow other users, and control who can see their content. Instagram is constantly evolving and adding new features, such as Instagram Shop, which allows businesses to sell products directly through the platform, and Instagram Live, which allows users to stream live video to their followers.",
    14: 'Messenger is a messaging app and platform developed by Facebook. It allows users to send and receive text, photo, and video messages, as well as make voice and video calls. Messenger also includes features such as games, stickers, and a "Discover" section where users can find new businesses and services to connect with. It is available on both mobile devices and desktop computers, and can be accessed through the Facebook website or as a standalone app. Messenger is popular for its convenience and ease of use, as well as its integration with other Facebook products such as the social media platform and Instagram.',
    14.1: 'Messenger is a messaging app and platform developed by Facebook. It was initially released in 2011 as a standalone app, and later integrated into the main Facebook platform in 2014. Since its release, it has become a popular choice for communication, with millions of users worldwide. One of the key features of Messenger is its ability to send and receive messages in real-time. Users can send text, photo, and video messages to individuals or groups, and can also make voice and video calls. Messenger also includes a variety of interactive features, such as stickers and games, which can add a fun element to communication. In addition to messaging and calling, Messenger also includes a "Discover" section where users can find and connect with new businesses and services. This can be useful for finding recommendations, making purchases, or learning about new products and services. Overall, Messenger is a convenient and user-friendly messaging app that offers a wide range of features for communication and connection. It is available on both mobile devices and desktop computers, and can be accessed through the Facebook website or as a standalone app.',
    15: 'Snapchat is a multimedia messaging app that is used globally, known for its features that allow users to send images and videos that self-destruct after a short period of time. It also offers a range of filters and lenses that can be used to alter or enhance photos and videos, as well as a feature called "Stories" which allows users to post content that is visible to their followers for a 24-hour period. In addition to messaging, Snapchat also includes a number of social features, such as the ability to add friends, join groups, and send money through the app. It is available on iOS and Android devices.',
    15.1: `Snapchat was created in 2011 by Evan Spiegel, Bobby Murphy, and Reggie Brown while they were students at Stanford University. The app was initially called "Picaboo" and was intended as a way for users to send ephemeral photos to one another. It was rebranded as Snapchat in 2012 and quickly gained popularity, especially among young people. One of the key features of Snapchat is that it allows users to send photos and videos that self-destruct after a short period of time, typically between 1 and 10 seconds. This ephemeral nature of the content has made Snapchat popular for sending more personal or intimate messages, as the content is not saved on the recipient's device and disappears after it has been viewed. In addition to messaging, Snapchat also includes a range of social features, such as the ability to add friends, join groups, and send money through the app. It also has a feature called "Stories" which allows users to post content that is visible to their followers for a 24-hour period. Stories can be created using photos, videos, and other media, and can be enhanced with filters, stickers, and other creative tools. Snapchat has also gained popularity for its use of filters and lenses, which allow users to alter or enhance their photos and videos with special effects. These filters and lenses can be used to change the appearance of a user's face or surroundings, add animations or graphics, or create other creative effects. Overall, Snapchat is a popular messaging app known for its ephemeral nature and creative features, which make it a popular choice for sharing personal and intimate messages and content with friends and followers.`,
    16: `Discord is a communication platform that is specifically designed for online communities and gaming. It includes features such as voice and text chat, as well as screen sharing and video calling, which make it a useful tool for groups of people to communicate and collaborate online. One of the key features of Discord is its voice chat functionality, which allows users to talk to one another in real-time. This can be particularly useful for gaming communities, as it allows players to communicate and coordinate while they play. Discord also includes text chat, which can be used for more general conversation or for sharing links, images, and other media. In addition to voice and text chat, Discord also offers screen sharing and video calling, which can be useful for groups that need to work together remotely or for online tutoring or other educational purposes. Discord also includes a range of customization options, such as the ability to create and join different "servers" or communities within the platform, as well as the ability to create and join channels within those servers. Overall, Discord is a popular communication platform that is widely used by online communities and gamers for voice and text chat, as well as screen sharing and video calling. Its features and customization options make it a versatile tool for groups to communicate and collaborate online.`,
    16.1: `Discord is a cross-platform communication platform that was designed specifically for online communities and gamers. It was created in 2015 by Jason Citron and Stan Vishnevskiy and has since grown to become a popular choice for groups and communities to communicate and collaborate online. One of the key features of Discord is its voice chat functionality, which allows users to talk to one another in real-time. This can be particularly useful for gaming communities, as it allows players to communicate and coordinate while they play. Discord also includes text chat, which can be used for more general conversation or for sharing links, images, and other media. In addition to voice and text chat, Discord also offers screen sharing and video calling, which can be useful for groups that need to work together remotely or for online tutoring or other educational purposes. Discord also includes a range of customization options, such as the ability to create and join different "servers" or communities within the platform, as well as the ability to create and join channels within those servers. One of the strengths of Discord is its versatility and flexibility. It can be used by a wide range of communities, from gaming and entertainment to education and business. It is also available on a variety of platforms, including Windows, macOS, Linux, iOS, and Android, which makes it easy for users to access and use the platform from their devices. Overall, Discord is a popular and feature-rich communication platform that is widely used by online communities and gamers for voice and text chat, as well as screen sharing and video calling. Its customization options and cross-platform availability make it a versatile and convenient tool for groups to communicate and collaborate online.`,
    17: "TikTok is a social media platform that allows users to create and share short videos, usually set to music. The app, which was developed by Chinese tech company ByteDance, has become particularly popular among younger users and has been used to create a wide range of content, including lip-sync videos, comedy sketches, and educational content. TikTok has gained a significant following and has been downloaded more than 2 billion times worldwide. It has also faced controversy, with the US government considering banning the app due to national security concerns.",
    17.1: "TikTok is a social media platform that allows users to create and share short videos, typically set to music, with a variety of special effects and filters. The app has a user-friendly interface and features a range of tools and features that make it easy for users to create and edit their videos. In addition to creating their own content, users can also browse and discover content created by other users and engage with them through comments, likes, and other interactions. TikTok has become particularly popular among younger users and has been used to create a wide range of content, including lip-sync videos, comedy sketches, and educational content. The app has also been used to launch the careers of a number of social media influencers and has helped popularize a number of internet trends and memes. TikTok has gained a significant following and has been downloaded more than 2 billion times worldwide. It has also faced controversy, with the US government considering banning the app due to national security concerns. The company has denied these allegations and has taken steps to address concerns about user data privacy and security. Despite these controversies, TikTok remains a popular and influential social media platform, particularly among younger users.",
};
//# sourceMappingURL=app.js.map