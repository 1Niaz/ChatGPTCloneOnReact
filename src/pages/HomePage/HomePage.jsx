import ChatGPTIcon from '../../img/chatgpt-icon.png';
import SantaGPTIcon from '../../img/santa-icon.png';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div class="desktop">
        <div class="info">
          <div class="title">Desktop is boring</div>
          <div class="subtitle">Open on your mobile!</div>
        </div>
      </div>
      <div className='mobile'>
        <div className="app">
          <div class="new-chat">
            <div class="container">
              <div class="title">New chat</div>
            </div>
          </div>

          <NavLink to="/chatgpt">
            <div class="chat-gpt">
              <div class="container">
                <div class="content">
                  <div class="img">
                    <img src={ChatGPTIcon} alt="" />
                  </div>
                  <div class="info">
                    <div class="title">Chat GPT</div>
                    <div class="text">Default ChatGPT 3.5 model</div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="/santapgpt">
            <div class="santa-gpt">
              <div class="container">
                <div class="content">
                  <div class="img">
                    <img src={SantaGPTIcon} alt="" />
                  </div>
                  <div class="info">
                    <div class="title">Santa GPT</div>
                    <div class="text">Santa Claus now is available!</div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>


  );
};

export default HomePage;
