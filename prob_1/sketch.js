const getInformation = async () => {
  return fetch(
    "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
  )
    .then((data) => data.json())
    .then((response) => {
      return response;
    });
};

const main = async () => {
  const information = await getInformation();
  const elementsArray = information.map((data) => {
    const card = createCard(data);
    return card;
  });
  const containerCard = document.getElementById("card-container");
  elementsArray.forEach((element) => {
    containerCard.insertAdjacentHTML("beforeend", element);
  });
};

const createCard = (data) => {
  return `<section class="card ${data.title.toLowerCase().replace(" ", "-")}">
          <section class="container">
          
            <section class="sub-main title"  >
              <h3 >${data.title}</h3>
              <h3 class="points">...</h3>
            </section>

            <section class="sub-body web">
              <h1 >${data.timeframes.weekly.current}</h1>
              <h1 class="hrs">hrs</h1>
            </section>

            <section class="sub-footer workbefore">
              <h3 class="previos">last week-</h3>
              <h3 >${data.timeframes.weekly.previous}</h3>
            </section>
          </section>
        </section>
        `;
};

(() => {
  main();
})();
