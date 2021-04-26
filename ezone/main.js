import "./styles.scss";

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
