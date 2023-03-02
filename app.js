<<<<<<< HEAD
//just a failed test, (enable if use)

//var delayInMilliseconds = 3000; //1 second

//function addAttr() {
//setTimeout(function () {
//document
//.getElementById("transitiontoleft")
//.setAttribute("data-aos", "fade-right");
//}, delayInMilliseconds);
//}

//end

function scrollInto() {
  document.getElementById("themainheader").scrollIntoView();
}

function contentSection() {
  document.getElementById("contentsection").scrollIntoView();
}

/////////////////////////////////////////////////////////////////////////

let index = 0,
  interval = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);

    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3));
}

/* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace lines 16 and on with this code ↓↓↓ -- */

// let timeouts = [],
//     intervals = [];

// const magic = document.querySelector(".magic");

// magic.onmouseenter = () => {
//   let index = 1;

//   for(const star of document.getElementsByClassName("magic-star")) {
//     timeouts.push(setTimeout(() => {
//       animate(star);

//       intervals.push(setInterval(() => animate(star), 1000));
//     }, index++ * 300));
//   };
// }

// magic.onmouseleave = onMouseLeave = () => {
//   for(const t of timeouts) clearTimeout(t);
//   for(const i of intervals) clearInterval(i);

//   timeouts = [];
//   intervals = [];
// }

// <--------------------------------------------------------------------END-------------------------------------------------------------------------------------------------------------------->
//Quotes

(function () {
  var quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "&mdash;Nelson Mandela",
      title: "Former President of South Africa",
    },
    {
      text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "&mdash;Mother Teresa",
      title: "Nun",
    },

    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "&mdash;Eleanor Roosevelt",
      title: "Former First Lady of the United States",
    },
    {
      text: "So many books, so little time.",
      author: "&mdash;Frank Zappa",
      title: "American musician",
    },
    {
      text: "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "&mdash;Oscar Wilde",
      title: "Poet",
    },
    {
      text: "Be less curious about people and more curious about ideas.",
      author: "&mdash;Marie Curie",
      title: "Physicist",
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
      author: "&mdash;Steve Jobs",
      title: "Founder of Apple",
    },
    {
      text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
      author: "&mdash;Winston S. Churchill",
      title: "Former Prime Minister of the United Kingdom",
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "&mdash;Walt Disney",
      title: "Founder of Disney",
    },
    {
      text: "I would rather die of passion than of boredom.",
      author: "&mdash;Vincent van Gogh",
      title: "Painter",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "&mdash;Confucius",
      title: "Philosopher",
    },
    {
      text: "We cannot solve our problems with the same thinking we used when we created them.",
      author: "&mdash;Albert Einstein",
      title: "Physicist",
    },
    {
      text: "The victim should have the right to end his life, if he wants. But I think it would be a great mistake. However bad life may seem, there is always something you can do, and succeed at. While there's life, there is hope.",
      author: "&mdash;Stephen W. Hawking",
      title: "Physicist",
    },
    {
      text: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      author: "&mdash;Neil Armstrong",
      title: "Astronaut",
    },
    {
      text: "We cannot live better than in seeking to become better.",
      author: "&mdash;Socrates",
      title: "Philosopher",
    },
  ];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quotetext").innerHTML =
    "<i class='fas fa-quote-left hidden rounded-full p-3 transition-colors duration-300 rtl:-scale-x-100 text-gray-200 lg:block quotationmark'></i>" +
    "&nbsp; &nbsp; &nbsp; &nbsp;" +
    quote.text +
    "&nbsp; &nbsp; &nbsp; &nbsp;" +
    "<i class='fas fa-quote-right hidden rounded-full p-3 transition-colors duration-300 rtl:-scale-x-100 text-gray-200 lg:block quotationmark'></i>";
  document.getElementById("quoteauthor").innerHTML = quote.author;
  document.getElementById("quotetitle").innerHTML = quote.title;
})();
console.log(
  "%c Wondering Minds ",
  "color: #fff; font-size: 30px; font-weight: 200; font-family:'Blanka'; background: linear-gradient(#c2a6ae,#c2a6ae, #20191a);"
);
=======
//just a failed test, (enable if use)

//var delayInMilliseconds = 3000; //1 second

//function addAttr() {
//setTimeout(function () {
//document
//.getElementById("transitiontoleft")
//.setAttribute("data-aos", "fade-right");
//}, delayInMilliseconds);
//}

//end

function scrollInto() {
  document.getElementById("themainheader").scrollIntoView();
}

function contentSection() {
  document.getElementById("contentsection").scrollIntoView();
}

/////////////////////////////////////////////////////////////////////////

let index = 0,
  interval = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);

    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3));
}

/* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace lines 16 and on with this code ↓↓↓ -- */

// let timeouts = [],
//     intervals = [];

// const magic = document.querySelector(".magic");

// magic.onmouseenter = () => {
//   let index = 1;

//   for(const star of document.getElementsByClassName("magic-star")) {
//     timeouts.push(setTimeout(() => {
//       animate(star);

//       intervals.push(setInterval(() => animate(star), 1000));
//     }, index++ * 300));
//   };
// }

// magic.onmouseleave = onMouseLeave = () => {
//   for(const t of timeouts) clearTimeout(t);
//   for(const i of intervals) clearInterval(i);

//   timeouts = [];
//   intervals = [];
// }

// <--------------------------------------------------------------------END-------------------------------------------------------------------------------------------------------------------->
//Quotes

(function () {
  var quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "&mdash;Nelson Mandela",
      title: "Former President of South Africa",
    },
    {
      text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "&mdash;Mother Teresa",
      title: "Nun",
    },

    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "&mdash;Eleanor Roosevelt",
      title: "Former First Lady of the United States",
    },
    {
      text: "So many books, so little time.",
      author: "&mdash;Frank Zappa",
      title: "American musician",
    },
    {
      text: "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "&mdash;Oscar Wilde",
      title: "Poet",
    },
    {
      text: "Be less curious about people and more curious about ideas.",
      author: "&mdash;Marie Curie",
      title: "Physicist",
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
      author: "&mdash;Steve Jobs",
      title: "Founder of Apple",
    },
    {
      text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
      author: "&mdash;Winston S. Churchill",
      title: "Former Prime Minister of the United Kingdom",
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "&mdash;Walt Disney",
      title: "Founder of Disney",
    },
    {
      text: "I would rather die of passion than of boredom.",
      author: "&mdash;Vincent van Gogh",
      title: "Painter",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "&mdash;Confucius",
      title: "Philosopher",
    },
    {
      text: "We cannot solve our problems with the same thinking we used when we created them.",
      author: "&mdash;Albert Einstein",
      title: "Physicist",
    },
    {
      text: "The victim should have the right to end his life, if he wants. But I think it would be a great mistake. However bad life may seem, there is always something you can do, and succeed at. While there's life, there is hope.",
      author: "&mdash;Stephen W. Hawking",
      title: "Physicist",
    },
    {
      text: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      author: "&mdash;Neil Armstrong",
      title: "Astronaut",
    },
    {
      text: "We cannot live better than in seeking to become better.",
      author: "&mdash;Socrates",
      title: "Philosopher",
    },
  ];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quotetext").innerHTML =
    "<i class='fas fa-quote-left hidden rounded-full p-3 transition-colors duration-300 rtl:-scale-x-100 text-gray-200 lg:block quotationmark'></i>" +
    "&nbsp; &nbsp; &nbsp; &nbsp;" +
    quote.text +
    "&nbsp; &nbsp; &nbsp; &nbsp;" +
    "<i class='fas fa-quote-right hidden rounded-full p-3 transition-colors duration-300 rtl:-scale-x-100 text-gray-200 lg:block quotationmark'></i>";
  document.getElementById("quoteauthor").innerHTML = quote.author;
  document.getElementById("quotetitle").innerHTML = quote.title;
})();
console.log(
  "%c Wondering Minds ",
  "color: #fff; font-size: 30px; font-weight: 200; font-family:'Blanka'; background: linear-gradient(#c2a6ae,#c2a6ae, #20191a);"
);
>>>>>>> b1223e4 (unfixed)
