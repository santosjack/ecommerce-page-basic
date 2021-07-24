import './App.css';
import data from './data';
import { useState, useEffect } from 'react';
import icon_cart from './assets/cart.png';

function App() {

  const [storageData, setStorageData] = useState([]);


  useEffect(() => {
    const storageProd = JSON.parse(localStorage.getItem('storageProd'));

    if(storageProd !== null && storageProd !== undefined){
      console.log(storageProd)
      setStorageData(storageProd.length);
    }else{
      setStorageData(0);
    }
  });

  

  const products = data().products;

  function adicionar(product){
    console.log("adicionei")
    let newStorage = [];
    if(storageData>0){
      newStorage= JSON.parse(localStorage.getItem('storageProd'));
    }
    newStorage.push(product);
    setStorageData(newStorage.length);
    localStorage.setItem('storageProd', JSON.stringify(newStorage));
  } 

  function clearStorage(){
    localStorage.clear();
    setStorageData(0);
  }



  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a className="App-header-logo" href="/">House of Funko</a>
          <div className="App-header-basket">

            <div>
              <img src={icon_cart} width="40px" height="35px" alt="" />
              <a href="">
                {storageData} Itens
              </a>
            </div>

            <div>
              <a href="" onClick={() => clearStorage()}>Esvaziar</a>
            </div>                     
                       
                        
          </div>
        </div>
       
      </header>

      <div className="App-main">

      <nav className="App-nav">
        <div>
          <h3>Filtros</h3>
          <input type="search" id="" placeholder="Pesquisar"/>
        </div>
        
        <h5>Categorias</h5>
       
        <a href="">Filmes</a>
        <a href="">Séries</a>
        <a href="">Animações 3</a>
        
        <h5>Mais vendidos</h5>
        
        <a href="">Harry Potter</a>
        <a href="">Star Wars</a>
        <a href="">Heróis da Marvel</a>
        <a href="">Heróis da DC</a>
      </nav>
      
      <div className="App-container">

        <div className="App-container-header">
          <h1>HARRY POTTER</h1>
        </div>
       

        <div className="App-container-content">

          {
           products.map(item => {
             return(
              <div className="App-content-item">
                <img src={item['url-img']}
                alt={item.name} width="300px" height="200px" />
                <div><h4>{item.name}</h4></div>
                <p>
                  De {item.price} por
                  <br />
                  <span>R$ {(item.price-(item.price*item.discount)).toFixed(2)}</span>
                </p>
                <button onClick={() => adicionar(item)}>ADICIONAR AO CARRINHO</button>
              </div>
             )
           })
          }      
                     

                   
        </div>
        <div className="App-page-ctrl">
        <div>
          <button disabled>Voltar</button>
          <button id="App-page-act">1</button>
          <button >2</button>
          <button>Avançar</button>
        </div>
        </div>
       
         
      </div>

       
      </div>
      <footer className="App-footer">
        <p>
           Copyright 2021 - Desenvolvido por Jaqueline Santos
        </p>
        
      </footer>
    </div>
  );
}

export default App;
