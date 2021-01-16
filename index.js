const axios = require("axios");
const cheerio = require("cheerio");

async function getWOD() {
  const date = dateConstructor();

  try {
    let response = await axios.get(
      `https://www.resilience-fit.com/wod-blog/${date}`
    );

    if (response.data) {
      const $ = cheerio.load(response.data, { xml: true });
      console.log($(".blog-content").text());
    }
  } catch (error) {
    console.log(error);
  }
}

function dateConstructor() {
  var weekday = new Array();
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let date = new Date();

  date = `${weekday[date.getDay()].toLowerCase()}-${
    date.getMonth() + 1
  }${date.getDate()}${date.getUTCFullYear()}`;

  return date;
}

getWOD();
