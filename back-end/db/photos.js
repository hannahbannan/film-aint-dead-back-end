const mongoose = require("./connection");
const db = mongoose.connection;
const Photo = require("../models/Photo");

const main = async () => {
  await Photo.deleteMany({});

  const photos = [
    {
      image:
        "https://res.cloudinary.com/hannahbannan/image/upload/v1595379862/film-aint-dead/172700-R1-21A_jbi8ar.jpg",
      takenBy: "Han",
      caption: "A parrot landed in her hair",
    },
    {
      image: "https://photos.app.goo.gl/WLiuM4Gfnq6q5JWq7",
      takenBy: "Han",
      caption: "I got whipped by a rogue pine branch",
    },
    {
      image: "https://photos.app.goo.gl/8Ntx7v6KwnFSy7Qp6",
      takenBy: "Han",
      caption:
        "Wedged between a speed dating party and a First Communion in the park",
    },
    {
      image: "https://photos.app.goo.gl/HzpSQt5XLRZjv3sZ9",
      takenBy: "Han",
      caption: "Little Baby Maddy's chamber",
    },
    {
      image: "https://photos.app.goo.gl/MPqcbVtdmMfLczqc7",
      takenBy: "Han",
      caption: "The first morning",
    },
    {
      image: "https://photos.app.goo.gl/mXYVKUbn2kE2XtXY8",
      takenBy: "Ryan",
      caption: "Do you want to go to Gjusta?",
    },
    {
      image: "https://photos.app.goo.gl/sym6Fi3uraFrezsh7",
      takenBy: "Han",
      caption: "She was proud of her picnic basket",
    },
    {
      image: "https://photos.app.goo.gl/pZif62yTWLHTSQtj8",
      takenBy: "Chloe",
      caption: "Medellin fire escape, pre-bachata class",
    },
    {
      image: "https://photos.app.goo.gl/KJtmi1eu5puJufEa6",
      takenBy: "Chloe",
      caption: "Found in creek: a broken burro statue",
    },
    {
      image: "https://photos.app.goo.gl/Zj3WH1jQnZgdwfj79",
      takenBy: "Han",
      caption: "In search of coffee beans",
    },
    {
      image: "https://photos.app.goo.gl/C2CanuoZa4RkHVVj8",
      takenBy: "Han",
      caption: "Medellin is an endless sea of orange, green and blue",
    },
    {
      image: "https://photos.app.goo.gl/1Hi5kwArUBzAPPRx6",
      takenBy: "Han",
      caption: "Not a statue of a dog",
    },
    {
      image: "https://photos.app.goo.gl/fSs36TCdERNt1KbRA",
      takenBy: "Han",
      caption: "Headed to Pablo's",
    },
    {
      image: "https://photos.app.goo.gl/sy5XDTd53KLeWveM7",
      takenBy: "Han",
      caption: "Smoke jam",
    },
    {
      image: "https://photos.app.goo.gl/cdEq8V9svnnquNY38",
      takenBy: "Maddy",
      caption: "She loves rocks",
    },
    {
      image: "https://photos.app.goo.gl/1jR83P242EWujpfh7",
      takenBy: "Henry",
      caption: "The recovery period",
    },
    {
      image: "https://photos.app.goo.gl/KFEktS82aBpfSS9a6",
      takenBy: "Han",
      caption: "The original Pioneer of Pioneertown",
    },
    {
      image: "https://photos.app.goo.gl/z3gkEvBkq3WrpP847",
      takenBy: "Han",
      caption: "Mustache feat. Ross",
    },
    {
      image: "https://photos.app.goo.gl/ZwPh9WPqXxbmC8fo9",
      takenBy: "Han",
      caption: "Shoopin around",
    },
    {
      image: "https://photos.app.goo.gl/L2fnV1aSBhVnXmN68",
      takenBy: "Maddy",
      caption: "Bury me in this hat",
    },
    {
      image: "https://photos.app.goo.gl/EpCJr4jexKvqckPV6",
      takenBy: "Han",
      caption: "Hugs AND drugs",
    },
    {
      image: "https://photos.app.goo.gl/RxMU4QGx1rRW2spDA",
      takenBy: "Maddy",
      caption: "All smiles",
    },
    {
      image: "https://photos.app.goo.gl/LoG74aZW9JTkxHzQ9",
      takenBy: "Han",
      caption: "Sunset snugglers, desert dwindlers",
    },
    {
      image: "https://photos.app.goo.gl/BRd1zrNyth8LLkMZ8",
      takenBy: "Han",
      caption: "JT in profile",
    },
    {
      image: "https://photos.app.goo.gl/B7YxgpYPmAxbcxtq5",
      takenBy: "Han",
      caption: "Joshua Trees only reside in Joshua Tree National Park",
    },
    {
      image: "https://photos.app.goo.gl/acspAQUuAx8sj8Qs8",
      takenBy: "Han",
      caption: "Fiat camping",
    },
  ];

  await Photo.insertMany(photos);
  console.log("Created some photos!");
};

const run = async () => {
  await main();
  db.close();
};

run();
