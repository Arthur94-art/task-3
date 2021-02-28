
let btnSend = document.getElementById('send');
let btnReset = document.getElementById('reset');
let input = document.querySelector('.country');
let currentCountry;
let dataArray;
let content = document.querySelector('.content');
let table = document.createElement(`table`);

btnSend.onclick = function () {
	currentCountry = input.value;
	table.innerHTML = '';
	let requestUrl = `http://universities.hipolabs.com/search?country=${currentCountry}`;

	function sendRequest(method, url) {
		return fetch(url).then(response => {
			return response.json();
		})
	}

	sendRequest('GET', requestUrl)
		.then(data = (data) => {
			dataArray = data;

			dataArray.forEach((el, ind) => {
				let row = document.createElement('tr');
				let numberCell = document.createElement('td');
				let countryCell = document.createElement('td');
				let nameCell = document.createElement('td');
				let webPageCell = document.createElement('td');
				let domainCell = document.createElement('td');
				let alphaTwoCodeCell = document.createElement('td');

	
				numberCell.innerText = [ind + 1];
				countryCell.innerText = el.country;
				nameCell.innerText = el.name;
				webPageCell.innerText = el.web_pages;
				domainCell.innerText = el.domains.join(' ');
				alphaTwoCodeCell.innerText = el.alpha_two_code

				row.append(numberCell);
				row.append(countryCell);
				row.append(nameCell);
				row.append(webPageCell);
				row.append(domainCell);
				row.append(alphaTwoCodeCell);
				table.append(row);

			});


			content.append(table);
			console.log(dataArray);
		})
		.catch(err => console.log(err));
}

btnReset.onclick = function () {
	table.innerHTML = '';
}








