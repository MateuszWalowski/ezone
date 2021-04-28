"use strict";

fetch("https://ezone-4491.restdb.io/rest/ezone", {
  method: "get",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "60868efc28bf9b609975a6f1",
    "cache-control": "no-cache",
  },
})
  .then((e) => e.json())
  .then((e) => console.log(e));

var pages = document.querySelectorAll("#page1 ,#page2, #page3, #thanks");
console.log(pages);
document.querySelector("#next").addEventListener("click", nextpage);
document.querySelector("#previous").addEventListener("click", previouspage);

function nextpage() {
  if (document.querySelector("#page1").classList.contains("activepage")) {
    if (
      document.querySelector("#password").value == "" ||
      document.querySelector("#fullname").value == "" ||
      document.querySelector("#email").value == "" ||
      document.querySelector("#dateofbirth").value == "" ||
      document.querySelector("#gamertag").value == ""
    ) {
      document.querySelector("#fillthefieldspage1").textContent = "";
      document.querySelector("#fillthefieldspage1").textContent =
        document.querySelector("#fillthefieldspage1").textContent +
        "Fill all the fields before continuing";
    } else if (
      document.querySelector("#password").value !==
      document.querySelector("#repeatpassword").value
    ) {
      document.querySelector("#fillthefieldspage1").textContent = "";

      document.querySelector("#fillthefieldspage1").innerHTML =
        document.querySelector("#fillthefieldspage1").textContent +
        "<br>" +
        " Passwords don't match";
    } else if (!document.querySelector("#email").value.includes("@")) {
      document.querySelector("#fillthefieldspage1").textContent = "";

      document.querySelector("#fillthefieldspage1").innerHTML =
        document.querySelector("#fillthefieldspage1").textContent +
        "<br>" +
        "Write a correct email format";
    } else {
      // This hides first page
      var pagetohide = document.querySelector("#page1");
      pagetohide.animate(
        [
          {
            opacity: "1",
          },
          {
            opacity: "0",
          },
        ],
        1000
      );
      setTimeout(function () {
        pagetohide.style.display = "none";
      }, 450);
      pagetohide.classList.remove("activepage");
      document.querySelector("#page2").classList.add("activepage");

      // This shows  the second page
      document.querySelector("#signup").animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        3000
      );
      document.querySelector("#guide > h2").animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        3000
      );

      document.querySelector("#page1").animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        2000
      );

      setTimeout(function () {
        document.querySelector("#page2").style.display = "block";
      }, 500);
      // Changes the text above and next to the form
      document.querySelector("#signup").textContent =
        "WHAT TYPES OF GAMES DO YOU PLAY?";
      document.querySelector("#guide > h2").textContent =
        "WE WILL HELP YOU IMPROVE YOU GAMING SKILLS";
      // changes the color of dots and sidebar
      document.querySelector("#dot2").style.background = "var(--purple-color)";
      document.querySelector("#sidebar > li:nth-child(3)").style.background =
        "#E3E3E5";
      document.querySelector("#sidebar > li.number.on").style.background =
        "#FFB595";
    }
  } else if (
    document.querySelector("#page2").classList.contains("activepage")
  ) {
    if (document.getElementById("genre").selectedOptions.length == 0) {
      document.querySelector("#fillthefieldspage2").textContent =
        "Select at least one option";
    } else {
      console.log(document.getElementById("genre").selectedOptions.length);
      // This hides second page
      var pagetohide = document.querySelector("#page2");
      pagetohide.animate(
        [
          {
            opacity: "1",
          },
          {
            opacity: "0",
          },
        ],
        1000
      );
      setTimeout(function () {
        pagetohide.style.display = "none";
      }, 450);
      pagetohide.classList.remove("activepage");
      document.querySelector("#page3").classList.add("activepage");

      // This shows  the third page
      document.querySelector("#signup").animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        3000
      );
      document.querySelector("#guide > h2").animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        3000
      );

      document.querySelector("#page3").animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        2000
      );

      setTimeout(function () {
        document.querySelector("#page3").style.display = "block";
      }, 500);
      document.querySelector("#next").addEventListener("click", postdata);
      document.querySelector("#next").textContent = "Submit";

      // Changes the text above and next to the form
      document.querySelector("#signup").textContent =
        "WHAT SKILLS DO YOU WANT TO IMPROVE?";
      document.querySelector("#guide > h2").textContent =
        "WE WILL HELP YOU IMPROVE YOU GAMING SKILLS";
      // changes the color of dots and sidebar
      document.querySelector("#dot3").style.background = "var(--purple-color)";
      document.querySelector("#sidebar > li:nth-child(3)").style.background =
        "#E3E3E5";
      document.querySelector("#sidebar > li.number.on").style.background =
        "#E3E3E5";
      document.querySelector("#sidebar > li:nth-child(1)").style.background =
        "rgb(255, 181, 149)";
    }
  } else if (
    document.querySelector("#page3").classList.contains("activepage")
  ) {
    if (document.getElementById("areas").selectedOptions.length == 0) {
      document.querySelector("#fillthefieldspage3").textContent =
        "Select at least one option";
    } else {
      // This hides third page
      var pagetohide = document.querySelector("#page3");
      pagetohide.animate(
        [
          {
            opacity: "1",
          },
          {
            opacity: "0",
          },
        ],
        1000
      );
      setTimeout(function () {
        pagetohide.style.display = "none";
      }, 450);
      pagetohide.classList.remove("activepage");
      document.querySelector("#thanks").classList.add("activepage");

      // This shows  thank you pagge
      document.querySelector("#signup").animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        3000
      );
      document.querySelector("#guide > h2").animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        3000
      );

      document.querySelector("#thanks").animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        2000
      );

      setTimeout(function () {
        document.querySelector("#thanks").style.display = "block";
      }, 500);
      document.querySelector("#next").style.display = "none";
      document.querySelector("#previous").style.display = "none";
      // Changes the text above and next to the form
        document.querySelector("h1").style.display = 'none'
         document.querySelector("#form-container").style.display = 'none'
         document.querySelector("#buttons").style.display = 'none'
        document.querySelector('#maindiv').style.gridTemplateColumns = '0% 100%'
        document.querySelectorAll('li').forEach(e=>e.style.background='#3f3f50')
      document.querySelector("#signup").textContent =
        "thanks for joining ezone";

      document.querySelector("#guide > h2").textContent =
        "thanks for joining ezone";
    }
  }
}

function previouspage() {
  if (document.querySelector("#page2").classList.contains("activepage")) {
    var pagetohide = document.querySelector("#page2");
    document.querySelector("#next").textContent = "next 🠖>";
    document.querySelector("#fillthefieldspage1").textContent = "";
    document.querySelector("#fillthefieldspage2").textContent = "";
    document.querySelector("#fillthefieldspage3").textContent = "";

    pagetohide.animate(
      [
        {
          opacity: "1",
        },
        {
          opacity: "0",
        },
      ],
      1000
    );
    setTimeout(function () {
      pagetohide.style.display = "none";
    }, 450);
    pagetohide.classList.remove("activepage");
    document.querySelector("#page1").classList.add("activepage");
    document.querySelector("#signup").animate(
      [
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
      ],
      3000
    );
    document.querySelector("   #guide > h2").animate(
      [
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
      ],
      3000
    );

    document.querySelector("#page1").animate(
      [
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
      ],
      2000
    );

    setTimeout(function () {
      document.querySelector("#page1").style.display = "block";
    }, 500);
    // Changes the text above and next to the form
    document.querySelector("#signup").textContent =
      "Text to show above form at page1";
    document.querySelector("#guide > h2").textContent =
      "text on the right on page1";
    // changes the color of dots and sidebar
    document.querySelector("#dot2").style.background = "none";
    document.querySelector("#sidebar > li:nth-child(3)").style.background =
      "#FFB595";
    document.querySelector("#sidebar > li.number.on").style.background =
      "#E3E3E5";
  }

  if (document.querySelector("#page3").classList.contains("activepage")) {
    document.querySelector("#next").textContent = "next 🠖>";
    document.querySelector("#fillthefieldspage1").textContent = "";
    document.querySelector("#fillthefieldspage2").textContent = "";
    document.querySelector("#fillthefieldspage3").textContent = "";
    var pagetohide = document.querySelector("#page3");
    pagetohide.animate(
      [
        {
          opacity: "1",
        },
        {
          opacity: "0",
        },
      ],
      1000
    );
    setTimeout(function () {
      pagetohide.style.display = "none";
    }, 450);
    pagetohide.classList.remove("activepage");
    document.querySelector("#page2").classList.add("activepage");
    document.querySelector("#signup").animate(
      [
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
      ],
      3000
    );
    document.querySelector("   #guide > h2").animate(
      [
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
      ],
      3000
    );

    document.querySelector("#page3").animate(
      [
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
      ],
      2000
    );

    setTimeout(function () {
      document.querySelector("#page2").style.display = "block";
    }, 500);
    // Changes the text above and next to the form
    document.querySelector("#signup").textContent =
      "Text to show above form at page2";
    document.querySelector("#guide > h2").textContent =
      "text on the right on page2";
    // changes the color of dots and sidebar
    document.querySelector("#dot2").style.background = "none";
    document.querySelector("#dot3").style.background = "none";

    document.querySelector("#sidebar > li.number.on").style.background =
      "#FFB595";
    document.querySelector("#sidebar > li:nth-child(1)").style.background =
      "rgb(227, 227, 229)";
  }
}

function postdata() {
  var url = "https://ezone-4491.restdb.io/rest/ezone";
  var key = "60868efc28bf9b609975a6f1";

  var password = document.querySelector("#password").value;
  var fullname = document.querySelector("#fullname").value;
  var email = document.querySelector("#email").value;
  var dateofbirth = document.querySelector("#dateofbirth").value;
  var gamertag = document.querySelector("#gamertag").value;

  var optionsgenre = document.getElementById("genre").selectedOptions;
  var genres = Array.from(optionsgenre).map(({ value }) => value);
  console.log(genres);

  var optionskills = document.getElementById("areas").selectedOptions;
  var skills = Array.from(optionskills).map(({ value }) => value);
  console.log(skills);

  const data = {
    password: password,
    fullname: fullname,
    email: email,
    gamertag: gamertag,
    dateofbirth: dateofbirth,
    genres: genres,
    skills: skills,
  };

  const postData = JSON.stringify(data);
  fetch(url, {
    method: "post",
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "60868efc28bf9b609975a6f1",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
