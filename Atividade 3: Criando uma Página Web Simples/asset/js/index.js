const user = 'yureduarte-20';
const baseUrl = 'https://api.github.com'
const url = baseUrl + '/users/' + user;

async function getRepos(page = 1) {
    const headers = new Headers()
    headers.append("Accept", "application/json")
    return await fetch(url + "/repos?per_page=10&page=1", {
        method: 'GET',
        headers,
    })
        .then(response => response.json())
}

async function renderRepos(id = '#repos')
{
    const repos = await getRepos()
    const ul = document.querySelector(id)
    while(ul.firstChild){
        ul.lastChild.remove()
    }
    for( const repo of repos ){
        const li = document.createElement("li")
        li.innerHTML = `<a target="_blank" href="${repo.html_url}" >${repo.name}</a>`
        ul.appendChild(li)
    }
}
renderRepos()