const data = [
  {
    name: 'Hakuna'
  },
  {
    name: 'Matata'
  },
  {
    name: 'Huba'
  },
  {
    name: 'Muba'
  },
  {
    name: 'Zuba'
  },
  {
    name: 'Mabu'
  },
  {
    name: 'Zabu'
  },
  {
    name: 'Bubu'
  },
];

const inpt_search = document.querySelector('#search')
const result_ul = document.querySelector('.search-result')

inpt_search.addEventListener('input', () => {
  const inputText = inpt_search.value //inputda yazdigim

  const result = data.filter((item) =>{
    return item.name.toUpperCase().includes(inputText.toUpperCase())
  });

result_ul.innerHTML = '';

if(inputText == '') {
  result_ul.innerHTML = '<li>No Result</li>';
}
else {
  result.map((item) => {
    const li_tag = document.createElement('li');
    li_tag.innerText = item.name;
    result_ul.appendChild(li_tag);
  });
}
})

  