import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';



function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithubUsername(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)} />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude}
                onChange={e => setLatitude(e.target.value)} />
            // onChange - sempre que houver alteração a função alterará o valor no estado
            </div>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52472296?s=400&u=1515831ac1b1712af314c752b8c1fe0507de7910&v=4" alt="Graciani Sousa" />
              <div className="user-info">
                <strong>Graciani Sousa</strong>
                <span>Node.js, Go, ReactJS</span>
              </div>
            </header>
            <p>Full Stack Developer to be Reprograma / Digital House</p>
            <a href="https://github.com/graciani23">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52472296?s=400&u=1515831ac1b1712af314c752b8c1fe0507de7910&v=4" alt="Graciani Sousa" />
              <div className="user-info">
                <strong>Graciani Sousa</strong>
                <span>Node.js, Go, ReactJS</span>
              </div>
            </header>
            <p>Full Stack Developer to be Reprograma / Digital House</p>
            <a href="https://github.com/graciani23">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52472296?s=400&u=1515831ac1b1712af314c752b8c1fe0507de7910&v=4" alt="Graciani Sousa" />
              <div className="user-info">
                <strong>Graciani Sousa</strong>
                <span>Node.js, Go, ReactJS</span>
              </div>
            </header>
            <p>Full Stack Developer to be Reprograma / Digital House</p>
            <a href="https://github.com/graciani23">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52472296?s=400&u=1515831ac1b1712af314c752b8c1fe0507de7910&v=4" alt="Graciani Sousa" />
              <div className="user-info">
                <strong>Graciani Sousa</strong>
                <span>Node.js, Go, ReactJS</span>
              </div>
            </header>
            <p>Full Stack Developer to be Reprograma / Digital House</p>
            <a href="https://github.com/graciani23">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
