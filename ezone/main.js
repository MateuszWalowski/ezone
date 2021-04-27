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
      "Text to show above form at page2";
    document.querySelector("#guide > h2").textContent =
      "text on the right on page2";
    // changes the color of dots and sidebar
    document.querySelector("#dot2").style.background = "var(--purple-color)";
    document.querySelector("#sidebar > li:nth-child(3)").style.background =
      "#E3E3E5";
    document.querySelector("#sidebar > li.number.on").style.background =
      "#FFB595";
  } else if (
    document.querySelector("#page2").classList.contains("activepage")
  ) {
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
    // Changes the text above and next to the form
    document.querySelector("#signup").textContent =
      "Text to show above form at page3";
    document.querySelector("#guide > h2").textContent =
      "text on the right on page3";
    // changes the color of dots and sidebar
    document.querySelector("#dot3").style.background = "var(--purple-color)";
    document.querySelector("#sidebar > li:nth-child(3)").style.background =
      "#E3E3E5";
    document.querySelector("#sidebar > li.number.on").style.background =
      "#E3E3E5";
    document.querySelector("#sidebar > li:nth-child(1)").style.background =
      "rgb(255, 181, 149)";
  } else if (
    document.querySelector("#page3").classList.contains("activepage")
  ) {
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
    // Changes the text above and next to the form
    document.querySelector("#signup").textContent =
      "Text to show above form at page4";
    document.querySelector("#guide > h2").textContent =
      "text on the right on page4";
  }
}

function previouspage() {
  if (document.querySelector("#page2").classList.contains("activepage")) {
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
