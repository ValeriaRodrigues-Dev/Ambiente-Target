
fetch('dados.json')
.then(response => response.json())
.then(data => {
  const resultado = data;
  const filter = resultado.map(item => ({
    dia: item.dia,
    valor: item.valor
  }));

  const dias = document.getElementById('listadias');
  const valores = document.getElementById('listavalores'); 

  filter.forEach(item => {
    const lidias = document.createElement('li');
    lidias.textContent = `Dia: ${item.dia}`;
     
    lidias.addEventListener('click', () => {
    valores.innerHTML = '';
   
    const livalores = document.createElement('li');
    livalores.textContent = `Valor: ${item.valor}`;
    valores.appendChild(livalores);
  });

     dias.appendChild(lidias);
  
    });

    dias.addEventListener('click', () => {
     document.getElementById('iddias').classList.add('display');
      document.getElementById('idvalores').classList.remove('display');
   });

  valores.addEventListener('click', () => {
    document.getElementById('idvalores').classList.add('display');
    document.getElementById('iddias').classList.remove('display');
   });
})
.catch(error => console.error('Erro ao carregar o arquivo!', error));           
  
