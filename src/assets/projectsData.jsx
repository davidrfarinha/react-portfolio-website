
const yinYang = {
    title: "Yin Yang",
    subtitle: "Yoga School",
    slug: "yinyang",
    gitHubLink: "https://github.com/davidrfarinha/yin-yang-yoga-school",
    link: "https://yin-yang-yoga-school.netlify.app/",
    briefDescription: {
        pt: "Um jogo de tabuleiro simples, mas com muita estratégia envolvida. Permite realizar partidas com dois jogadores localmente ou em modo de um jogador com diferentes níveis de dificuldade.",
        en: "A simple board game, but with a lot of strategy involved. You can play local Multiplayer or in single-player mode with different levels of difficulty.",
        de: "Ein einfaches Brettspiel, aber mit viel Strategie. Sie können lokal zu zweit oder im Einzelspielermodus mit verschiedenen Schwierigkeitsgraden spielen."
    },
    images: [
        '/src/assets/Images/yinYang/image1.jpg',
        '/src/assets/Images/yinYang/image2.jpg',
        '/src/assets/Images/yinYang/image3.jpg',
        '/src/assets/Images/yinYang/image4.jpg',
    ],
    detailedDescription: null
}

const catsAndDogs = {
    title: "Cats and Dogs",
    subtitle: "The abstract board game",
    slug: "catsanddogs",
    gitHubLink: "https://github.com/davidrfarinha/cats-and-dogs",
    link: "https://cats-and-dogs-the-board-game.netlify.app/",
    briefDescription: {
        pt: "Um jogo de tabuleiro simples, mas com muita estratégia envolvida. Permite realizar partidas com dois jogadores localmente ou em modo de um jogador com diferentes níveis de dificuldade.",
        en: "A simple board game, but with a lot of strategy involved. You can play local Multiplayer or in single-player mode with different levels of difficulty.",
        de: "Ein einfaches Brettspiel, aber mit viel Strategie. Sie können lokal zu zweit oder im Einzelspielermodus mit verschiedenen Schwierigkeitsgraden spielen."
    },
    images: [
        '/src/assets/Images/catsanddogs/pic1.jpg',
        '/src/assets/Images/catsanddogs/pic2.jpg',
        '/src/assets/Images/catsanddogs/pic3.jpg',
        '/src/assets/Images/catsanddogs/pic4.jpg',
        '/src/assets/Images/catsanddogs/pic5.jpg'
    ],
    detailedDescription: {
        en: (
            <ul>
                <li>
                    <h4>Project Overview</h4>
                    <strong>&quot;Cats and Dogs&quot;</strong> is a  board game that allows two players to compete locally against each other, or one player to challenge a computer controlled opponent at various difficulty levels. I developed this project with <em>JavaScript</em> to practice and showcase my skills in <em>DOM manipulation</em>, <em>Event Listeners</em> and game logic development. I used to actually play this game with my elementary school students in my Math classes, as it is one of the games played in the Portuguese national championship of mathematical games.</li>
                <li>
                    <h4>Features</h4>
                    <ul>
                        <li><h5>Local Multiplayer &#129170;&ensp;</h5>Players can play a game against each other, placing their pieces alternately by clicking the mouse on the squares on the board.</li>
                        <li><h5>AI Opponent &#129170;&ensp;</h5>A single player can challenge the computer-controlled opponent in four difficulty levels: Easy, Medium, Hard, and Very Hard.</li>
                        <li><h5>Game Board &#129170;&ensp;</h5> The game board is dynamically rendered using <em>HTML</em>, <em>CSS</em>, and <em>JavaScript</em>, with pieces and squares updated in real time to reflect the current state of the game.</li>
                        <li><h5>Event Listeners &#129170;&ensp;</h5> The user inputs, like selecting game modes and clicking on squares to place a piece, are handled with <em>Event Listeners</em>.</li>
                    </ul>
                </li>
                <li>
                    <h4>Details</h4>
                    <ul>
                        <li><h5>JavaScript &#129170;&ensp;</h5> I built this game using <i>&quot;plain vanilla&quot;</i> <em>JavaScript</em>, with special focus on <em>DOM manipulation</em>, <em>Event Listeners</em> and game logic development.</li>
                        <li><h5>HTML/CSS &#129170;&ensp;</h5>The game board and pieces are rendered using <em>HTML</em>, <em>CSS</em> and <em>SVG</em> textures, and the piece placement is achieved using <em>JavaScript</em>. In order to provide a better visual experience, I added to the board wood <em>SVG</em> textures obtained from online repositories and manually customized them. The final product looks appealing and received quite good critics from family and friends.
                        </li>
                        <li><h5>Interactive Board Feedback &#129170;&ensp;</h5>By hovering with the mouse cursor over the board, players can see which squares allow valid moves (marked in green), and which squares do not (marked in red). This functionality allows users to quickly and intuitively know their move options, making the game faster and more fluid.</li>
                        <li><h5>Algorithms &#129170;&ensp;</h5> The CPU&apos;s <em>Artificial Intelligence</em> is a decision-making algorithm that allows the computer player to make strategic moves in the game. It evaluates all possible moves and categorises them into three levels: best, intermediate and worst moves. It then uses a random selection process to choose its move based on the game&apos;s difficulty level. The moves are then accordingly selected, with easier levels favouring worse moves and harder levels favouring better moves.</li>
                    </ul>
                </li>
                <li>
                    <h4>Challenges overcome</h4>
                    <ul>
                        <li><h5>Game Logic Complexity &#129170;&ensp;</h5> Developing robust game logic that handles multiple game scenarios, including piece placement, evaluation of possible moves, and game conditions, was a significant challenge, as this was the first <em>JavaScript</em> project I made totally by myself.</li>
                        <li><h5>AI Development &#129170;&ensp;</h5>Designing an <em>AI</em> opponent that could make informed moves and adapt to different levels of difficulty required a good knowledge of <em>JavaScript</em>, algorithms and careful consideration of strategic decision-making. The process started with an <em>AI</em> player that just played randomly. I then thought I could do better and started working in an <em>AI</em> that could do good moves. This resulted in an <em>AI</em> player that I couldn&apos;t beat &#128517;. That ended up making me create a difficulty system in which the <em>AI</em> plays accordingly (I still can&apos;t beat it in &quot;Very hard mode&quot;)</li>
                    </ul>
                </li>
                <li>
                    <h4>Conclusion</h4>
                    &quot;Cats and Dogs&quot; was my first big step in the process of learning <em>web development</em>. I didn&apos;t think at beginning that this project would grow so big and really turn into a fully playable game. My entusiasm, dedication and constant desire to make it better made me work non stop until I was quite satisfied with the end product. I&apos;m sure my knowledge in <em>JavaScript</em> development, game logic design and <em>AI</em> programming are here well showcased. By creating a fully functional board game that can be played locally and against a computer-controlled opponent, I have successfully demonstrated my ability to handle complex projects and overcome technical obstacles.
                </li>
            </ul>
        )
    }
}

const oJogoDaClarinha = {
    title: "O Jogo da Clarinha",
    subtitle: "The Memory Game",
    slug: "ojogodaclarinha",
    gitHubLink: "https://github.com/davidrfarinha/o-jogo-da-clarinha",
    link: "https://o-jogo-da-clarinha.netlify.app/",
    briefDescription: {
        pt: "Um jogo de cartas de memória personalizado, construído como presente de Natal para a minha sobrinha, adaptado aos seus interesses e gostos específicos. Desenvolvido com recurso a JavaScript, este jogo envolvente foi criado para desafiar e entreter, ao mesmo tempo que promove a ligação familiar e o desenvolvimento cognitivo através de exercícios de memória interativos.",
        en: "A personalized memory card game, built as a Christmas gift for my niece, tailored to her specific interests and tastes. Developed using JavaScript, this engaging game is designed to challenge and entertain, while promoting family connection and cognitive development through interactive memory exercises.",
        de: "Ein personalisiertes Memory-Kartenspiel, das als Weihnachtsgeschenk für meine Nichte entwickelt wurde und auf ihre speziellen Interessen und Vorlieben zugeschnitten ist. Dieses spannende Spiel wurde mit JavaScript entwickelt und soll herausfordern und unterhalten, während es gleichzeitig die Familienbindung und die kognitive Entwicklung durch interaktive Gedächtnisübungen fördert."
    },
    images: [
        '/src/assets/Images/oJogoDaClarinha/pic1.jpg',
        '/src/assets/Images/oJogoDaClarinha/pic2.jpg',
        '/src/assets/Images/oJogoDaClarinha/pic3.jpg',
    ],
    detailedDescription: {
        en: (
            <ul >
                <li>
                    <h4>Project Overview</h4>
                    &quot;O Jogo da Clarinha&quot; is a personalised memory card game that I created as a Christmas present for my niece. The game offers a fun and interactive way to test memory skills, while allowing players to compete as different family members, promoting family involvement. Its simple and engaging interface makes the game fun and easy to play for children and also adults.</li>
                <li>
                    <h4>Features</h4>
                    <ul>
                        <li><h5>Memory game &#129170;&ensp;</h5>Like any memory game, it consists in turning over cards to find matching pairs of animals. The score is recorded with chopsticks, in order to provide intuitive visual support. After all, this game was built for a child who hadn&apos;t yet learned to recognise numbers.</li>
                        <li><h5>Local multiplayer &#129170;&ensp;</h5>The game allows friendly competition between Clarinha (my niece and the girl for who the game was developed) and a chosen family member.</li>
                        <li><h5>Personalised characters &#129170;&ensp;</h5>The second player can select a picture of a family member (e.g. mum, dad, grandma) for a more personalised and fun touch. My niece found it really funny that the picture of the grandfather shows a bald man (which my father is turning).</li>
                        <li><h5>Fun animations and effects &#129170;&ensp;</h5>The cards turn over and disappear when matches are found with smooth animations.</li>
                        <li><h5>Simple and attractive interface &#129170;&ensp;</h5>I designed the game with ease of use and a pretty, engaging look in mind.</li>
                    </ul>
                </li>
                <li>
                    <h4>Details</h4>
                    <ul>
                        <li><h5>JavaScript &#129170;&ensp;</h5>Built using JavaScript, <em>HTML</em> and <em>CSS</em>, with a special focus on creating interactive elements and eye-catching animations.</li>
                        <li><h5>DOM manipulation &#129170;&ensp;</h5>The game uses <em>DOM manipulation</em> to dynamically turn over cards, track scores and update user interface elements.</li>
                        <li><h5>Random card configuration &#129170;&ensp;</h5>Guarantees each match a unique game configuration with random positioning of the cards on the board, thanks to a shuffling function I opted to develop myself, instead of copy pasting code from StackOverflow.</li>
                        <li><h5>Algorithms &#129170;&ensp;</h5>The game uses event-driven programming to handle user interactions such as card clicks and game options selection. I carefully designed the game&apos;s logic to correctly handle player turns, update the game state after each turn, prevent incorrect card combinations from remaining visible after a turn and end the game when there are no more cards visible, declaring a winner.</li>
                        <li><h5>Responsive design &#129170;&ensp;</h5>I made use of Flexbox for the layout structure and Media Queries to adapt the game to different screen sizes.</li>
                    </ul>
                </li>
                <li>
                    <h4>Challenges overcome</h4>
                    <ul>
                        <li><h5>Complexity of the Game Logic &#129170;&ensp;</h5>It was undoubtedly an interesting challenge to ensure that all the components of the flow of the game interacted harmoniously, successfully guaranteeing the management of turns and the exchange of players, the turning over of cards and their animation, the identification of card matches, updating the score, detecting the end of the game and deciding the winner.</li>
                        <li><h5>Event Listeners &#129170;&ensp;</h5>During the development of the game I encountered an unexpected behaviour in which the game logic would be triggered several times when a cell was clicked. This occurred because the cells have child elements (the back and front of the cards) with the same dimension, causing several <em>Event Listeners</em> to be triggered simultaneously. To solve this problem, I researched the issue extensively and finally implemented a solution that involved removing the <em>Event Listeners</em> from the capture and bubble phases, ensuring that the game logic was only executed once per click.</li>
                    </ul>
                </li>
                <li>
                    <h4>Conclusion</h4>
                    This project was a fun and rewarding way to combine programming with a personal touch, resulting in a very well-received Christmas present and a great boost to my skills in JavaScript, event handling and User Interface design. By adding it to my portfolio, I&apos;m sure my skills in creating interactive and user-friendly experiences from scratch is demonstrated. Hereby  showing off my expertise in bringing creative ideas to life through code.
                </li>
            </ul>
        ),
    }
}

const jammming = {
    title: "Jammming",
    subtitle: "Create your Spotify Playlists",
    slug: "jammming",
    gitHubLink: "https://github.com/davidrfarinha/react-jammming",
    link: "https://jammming-create-spotify-playlists.netlify.app/",
    briefDescription: {
        pt: "Um jogo de cartas de memória personalizado, construído como presente de Natal para a minha sobrinha, adaptado aos seus interesses e gostos específicos. Desenvolvido com recurso a JavaScript, este jogo envolvente foi criado para desafiar e entreter, ao mesmo tempo que promove a ligação familiar e o desenvolvimento cognitivo através de exercícios de memória interativos.",
        en: "A personalized memory card game, built as a Christmas gift for my niece, tailored to her specific interests and tastes. Developed using JavaScript, this engaging game is designed to challenge and entertain, while promoting family connection and cognitive development through interactive memory exercises.",
        de: "Ein personalisiertes Memory-Kartenspiel, das als Weihnachtsgeschenk für meine Nichte entwickelt wurde und auf ihre speziellen Interessen und Vorlieben zugeschnitten ist. Dieses spannende Spiel wurde mit JavaScript entwickelt und soll herausfordern und unterhalten, während es gleichzeitig die Familienbindung und die kognitive Entwicklung durch interaktive Gedächtnisübungen fördert."
    },
    images: [
        '/src/assets/Images/jammming/pic1.jpg',
        '/src/assets/Images/jammming/pic2.jpg',
        '/src/assets/Images/jammming/pic3.jpg',
    ],
    detailedDescription: {
        en: (
            <ul>
                <li>
                    <h4>Project Overview</h4>
                    &quot;Jammming&quot; is a web application created with React that allows users to search for songs on Spotify, add them to a playlist, and save the playlist to their Spotify account.</li>
                <li>
                    <h4>Features</h4>
                    <ul>
                        <li><h5>Search &#129170;&ensp;</h5>This app allows the user to search for songs using the Spotify API.</li>
                        <li><h5>Playlist &#129170;&ensp;</h5>Songs can be added to a custom playlist created by the user.</li>
                        <li><h5>Submit Playlist &#129170;&ensp;</h5>Easily save your personal playlist to your Spotify account. Its as easy as making a login to your Spotify account and clicking &quot;Add&quot;.</li>
                        <li><h5>Clean and modern visual &#129170;&ensp;</h5>I designed Jammming with a clean and modern visual design in mind. The interface is simple and intuitive, makes it easy to navigate and use the app, while the modern aesthetic ensures a visually appealing experience.</li>
                    </ul>
                </li>
                <li>
                    <h4>Details</h4>
                    <ul>
                        <li><h5>React &#129170;&ensp;</h5>The application was my first project built using React, with special focus on component-based architecture and state management.</li>
                        <li><h5>Spotify API &#129170;&ensp;</h5>The Spotify API is used to fetch songs data through an automatic login (with Client Credentials Flow) made when the user opens the page. After searching for the songs, the user&apos;s playlist can be saved to their Spotify account through Implicit Grant Flow authentication.</li>
                        <li><h5>Optimized Data Fetching &#129170;&ensp;</h5>To improve performance and avoid repeated API requests, local storage is used to save Spotify tokens, search results and created playlists. If the user accidentally closes the page, this data is preserved and available the next time he opens it.</li>
                        <li><h5>Token Management &#129170;&ensp;</h5>The app stores the date and time of Spotify Token fetching. When the user revisits the app, it checks the token&apos;s validity (which expires after 1 hour). If the token is invalid, the app automatically fetches a new token.</li>
                    </ul>
                </li>
                <li>
                    <h4>Challenges overcome</h4>
                    <ul>
                        <li><h5>State management &#129170;&ensp;</h5> Managing the application&apos;s state, including the playlist and user data, was a big challenge, as this was the first time I worked with React. At the beginning I found it a bit hard to understand the concepts of the useState and useEffect hooks.</li>
                        <li><h5>Integrating the Spotify API &#129170;&ensp;</h5>A good understanding of the API documentation in the Spotify website was required to build a connection with the Spotify API. As this was the first time I worked with API&apos;s, this also proved a challenge, as the documentation in the &quot;Spotify for Developers&quot; website didn&apos;t prove very beginner friendly. For example, the code they provide for the implicit grant authorization used a method called <code>buffer()</code>, which isn&apos;t available for use in a browser environment (instead, I had to figure out how to use <code>btoa()</code>). Another example was the use of the <code>request</code> library, from which I didn&apos;t know about. To overcome this I had to research and experiment on how to adapt the code provided to use it with a regular <code>fetch()</code> request.</li>
                        <li><h5>API Authentication &#129170;&ensp;</h5>The requirement of an authentication Token from the Spotify API was one of the significant challenges I had to overcome while building this project. I successfully implemented a solution to obtain and manage these tokens, ensuring seamless interaction with the API and enabling users to save their playlists to their Spotify accounts.</li>
                        <li><h5>Environment Variables &#129170;&ensp;</h5>One of the challenges I faced in this project was working with environment variables for the first time, having to learn how to set and access these variables in my React app. This involved configuring my development environment and understanding how to securely store sensitive information. This was a new concept for me, but I was successfully able to use environment variables to securely store my <em>Spotify API client ID</em> and <em>client secret</em>.</li>
                    </ul>
                </li>
                <li>
                    <h4>Conclusion</h4>
                    Jammming was my first React project and it proved quite difficult. After learning HTML, CSS and JavaScript, React seamed a totally different world to me and I really struggled at the beginning, as I had only learned it through the Codecademy website (which I didn&apos;t find very helpful). After making the React Course with Bob Ziroll in Scrimba website I felt myself much more confident and to my surprise, the development of this project turned much easier and straightforward. I successfully made use of all my knowledge in React development, API integration and state management. By creating a fully functional application that allows users to search for and add songs to a playlist, and save it to their Spotify account, I greatly improved my ability to handle complex projects and overcome technical obstacles. This project emphasizes my skills in designing and implementing application logic, developing robust API integrations, and creating an engaging user experience.
                </li>
            </ul>
        ),

    }
}

const retroHub = {
    title: "Retro Hub",
    subtitle: "The Retro Games Database",
    slug: "retrohub",
    gitHubLink: "https://github.com/davidrfarinha/react-retro-hub",
    link: "https://retro-hub.netlify.app/",
    images: [
        '/src/assets/Images/retrohub/image1.jpg',
        '/src/assets/Images/retrohub/image2.jpg',
        '/src/assets/Images/retrohub/image3.jpg',
        '/src/assets/Images/retrohub/image4.jpg',
    ],
    detailedDescription: {
        en: (
            <ul>
                <li>
                    <h4>Project Overview</h4>
                    <strong>&quot;Retro Games Hub&quot;</strong> is a web app that allows users to search for retro video games, providing a nostalgic experience for gamers of all ages. The app features a modern design with a retro twist, inspired by the original Game Boy color theme. With a user-friendly interface, users can search for games by title, platform, genre, year, and Metacritic rating, making it easy to find their favorite childhood games.</li>
                <li>
                    <h4>Features</h4>
                    <ul>
                        <li><h5>Home Page &#129170;&ensp;</h5>A welcoming start page that introduces the user to the app&apos;s purpose and features, setting the tone for a fun and engaging experience.</li>
                        <li><h5>About Page &#129170;&ensp;</h5> A page that explains the app&apos;s mission and provides more information about the project, giving users a deeper understanding of the app&apos;s goals and inspirations.</li>
                        <li><h5>Search Page &#129170;&ensp;</h5>A page where users can search for games using a simple search bar or advanced search filters, including platform, genre, year, and Metacritic rating. The advanced search filters allow users to narrow down their search results, making it easier to find specific games.</li>
                        <li><h5>Search Results Page &#129170;&ensp;</h5> A page that displays thumbnails of searched games, along with their title, year, and genre. Users can filter results by rating, genre, and date, allowing them to quickly find the games that interest them the most.</li>
                        <li><h5>Game Details Page &#129170;&ensp;</h5> A page that provides detailed information about a selected game, including its description, info, ratings, and screenshots. This page gives users a comprehensive overview of the game, helping them decide if it&apos;s worth playing.</li>
                    </ul>
                </li>
                <li>
                    <h4>Details</h4>
                    <ul>
                        <li><h5>Technical Stack &#129170;&ensp;</h5> The app is built using React, React Router, and various hooks, including useState, useEffect, createContext, useContext, useMemo, useNavigate, useLoaderData, useParams, useSearchParams, and useLocation. This technical stack allows for a robust and scalable app that can handle complex user interactions.
                        </li>
                        <li><h5>Data Fetching &#129170;&ensp;</h5> The app fetches data from the RAWG Video Games Database API (https://rawg-video-games-database.p.rapidapi.com/games), providing access to a vast library of retro games. The API is queried using a combination of search parameters, including title, platform, genre, year, and Metacritic rating.</li>
                        <li><h5>Caching &#129170;&ensp;</h5> The app uses local storage to cache assets needed for advanced search, such as videogame platforms and genres, to avoid multiple fetches. This caching mechanism improves the app&apos;s performance, reducing the time it takes to load search results.</li>
                        <li><h5>Context Provider &#129170;&ensp;</h5> The app uses a context provider to store search results, making them available throughout the app. This allows users to navigate between pages without losing their search results, providing a seamless user experience.</li>
                    </ul>
                </li>
                <li>
                    <h4>Challenges overcome</h4>
                    <ul>
                        <li><h5>Data Storage &#129170;&ensp;</h5> One of the biggest challenges was finding a way to store search results in a way that would avoid repeated fetch requests when opening the game details page. The solution was to use a context provider to store the data, allowing users to access their search results from any page.</li>
                        <li><h5>URL Management &#129170;&ensp;</h5> Another challenge was managing the URL parameters to store search data. The solution was to use the useSearchParams hook to store and retrieve search data from the URL, allowing users to share their search results with others.</li>
                        <li><h5>Navigation &#129170;&ensp;</h5>  The app uses the useNavigate hook to navigate between pages, and the useLocation hook to manage the URL. This allows users to navigate between pages without losing their search results, providing a seamless user experience.</li>
                    </ul>
                </li>
                <li>
                    <h4>Conclusion</h4>
                    &quot;Retro Games Hub&quot; is a web app that showcases my skills in building complex applications with React and React Router. By overcoming challenges related to data storage, URL management, and navigation, I was able to create a seamless user experience that allows users to search for retro video games with ease. The app&apos;s modern design with a retro twist provides a unique and engaging experience for users, making it a standout project in my portfolio.
                </li>
            </ul>
        )
    }
}


const projectsData = [retroHub, jammming, catsAndDogs, oJogoDaClarinha, yinYang];

export { projectsData }