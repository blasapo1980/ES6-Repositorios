const url = 'https://api.github.com/users/guerrero/repos';
const ul = document.querySelector(".profile");

const request = new XMLHttpRequest();
request.open('GET', url, true);
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(request.responseText);
    let content = '';
    for(const repos of data){
      const name = repos.name;
      const stars = repos.stargazers_count || "No tiene estrellas";

      content += `
        <li>
          <strong>${name}</strong> -${stars}
        </li>
      `;
    }

    ul.innerHTML = content;

  } else {
    console.log('Ha ocurrido un error');
  }
};

request.onerror = () =>
  console.log('Error al tratar de conectarse con el servidor');

request.send();
