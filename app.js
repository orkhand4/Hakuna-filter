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

inpt_search.addEventListener('input', () => {
  const inputText = inpt_search.value //inputda yazdigim

  const result = data.filter((item) =>{
    return item.name.toUpperCase().includes(inputText.toUpperCase())
  });
  console.log((result))
  console.log();
  
})
  