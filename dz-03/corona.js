const URL = "https://corona.lmao.ninja/countries";
const keys = ["country", "cases", "deaths"];

const main = () => {
  const actions = () => {
    const remove = document.createElement("button");
    const removeText = document.createTextNode("Delete");
    remove.appendChild(removeText);

    remove.classList.add("btn");
    remove.classList.add("red");

    remove.addEventListener("click", function() {
      this.parentElement.parentElement.remove();
    });

    return [remove];
  };

  fetch(URL)
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("tbody");
      console.log(tbody);

      document.querySelector("h3").classList.add("hidden");
      document.querySelector("tbody").classList.remove("hidden");

      tbody.innerHTML = "";

      data.slice(0, 20).forEach((item, index) => {
        const row = document.createElement("tr");
        const id = document.createElement("td");
        const text1 = document.createTextNode(index + 1);
        id.appendChild(text1);
        row.appendChild(id);

        keys.forEach(key => {
          const value = item[key];
          const cell = document.createElement("td");
          const text = document.createTextNode(value);
          cell.appendChild(text);
          row.appendChild(cell);
        });

        const actionsCell = document.createElement("td");
        actions().forEach(action => actionsCell.appendChild(action));
        row.appendChild(actionsCell);
        tbody.appendChild(row);
      });
    });
};

main();

const reload = () => {
  document.querySelector("h3").classList.add("hidden");
  document.querySelector("tbody").classList.remove("hidden");
  main();
};
