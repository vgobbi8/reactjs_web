import React from 'react';
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

//import logo from './logo.svg';
//import './App.css';

// Componente
// --> Função que retorna conteúdo HTML, CSS ou javascript, relacionado a interface
// Bloco isolado de HTML, CSS, e JS que não interfere no resto da aplicação


// Estado 
// --> 
// Propriedade
// --> Informações que um componente pai passa como parâmetros para o componente filho

function App() {
  return (
    //Criar side bar
    <div id="app">
     <aside> 
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <label htmlFor="">Usuário do Git Hub</label>
          <input name="gihub_username" id="gihub_username" required/>
        </div>
        <div className="input-block">
          <label htmlFor="">Tecnologias</label>
          <input name="techs" id="techs" required/>
        </div>

       <div className="input-group">
        <div className="input-block">
          <label htmlFor="">Latitude</label>
          <input name="Latitude" id="Latitude"  required/>
        </div>
          <div className="input-block">
            <label htmlFor="">Longitude</label>
            <input name="Longitude" id="Longitude"  required/>
          </div>
       </div>

       <button type="submit">Salvar</button>
      </form>
     </aside>
      
      <main>
        <ul>
          <li className="dev-item"> 
            <header>
              <img src="https://avatars1.githubusercontent.com/u/57421656?s=460&v=4" alt="Vinicius Gobbi"/>
              <div className="user-info">
                <strong>Vinicius Gobbi</strong>
                <span>C#,Vb.Net,SqlServer</span>
              </div>
              <p>Desenvolvedor em LDN Softwares</p>
              <a href="https://github.com/vgobbi8">Acessar perfil no GitHub</a>
            </header>
          </li>
          <li className="dev-item"> 
            <header>
              <img src="https://avatars1.githubusercontent.com/u/57421656?s=460&v=4" alt="Vinicius Gobbi"/>
              <div className="user-info">
                <strong>Vinicius Gobbi</strong>
                <span>C#,Vb.Net,SqlServer</span>
              </div>
              <p>Desenvolvedor em LDN Softwares</p>
              <a href="https://github.com/vgobbi8">Acessar perfil no GitHub</a>
            </header>
          </li>
          <li className="dev-item"> 
            <header>
              <img src="https://avatars1.githubusercontent.com/u/57421656?s=460&v=4" alt="Vinicius Gobbi"/>
              <div className="user-info">
                <strong>Vinicius Gobbi</strong>
                <span>C#,Vb.Net,SqlServer</span>
              </div>
              <p>Desenvolvedor em LDN Softwares</p>
              <a href="https://github.com/vgobbi8">Acessar perfil no GitHub</a>
            </header>
          </li>
          <li className="dev-item"> 
            <header>
              <img src="https://avatars1.githubusercontent.com/u/57421656?s=460&v=4" alt="Vinicius Gobbi"/>
              <div className="user-info">
                <strong>Vinicius Gobbi</strong>
                <span>C#,Vb.Net,SqlServer</span>
              </div>
              <p>Desenvolvedor em LDN Softwares</p>
              <a href="https://github.com/vgobbi8">Acessar perfil no GitHub</a>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
