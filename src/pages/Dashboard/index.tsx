import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar </button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/30422336?s=400&u=bd1160ad1ed9d11452418707f9471dd0c5957d6a&v=4"
            alt="Kevin Ruan Soares"
          />
          <div>
            <strong>kevinruansoares/connectserver</strong>
            <p>Projeto realizado afim de fixar os fundamentos de Electron;</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/30422336?s=400&u=bd1160ad1ed9d11452418707f9471dd0c5957d6a&v=4"
            alt="Kevin Ruan Soares"
          />
          <div>
            <strong>kevinruansoares/connectserver</strong>
            <p>Projeto realizado afim de fixar os fundamentos de Electron;</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/30422336?s=400&u=bd1160ad1ed9d11452418707f9471dd0c5957d6a&v=4"
            alt="Kevin Ruan Soares"
          />
          <div>
            <strong>kevinruansoares/connectserver</strong>
            <p>Projeto realizado afim de fixar os fundamentos de Electron;</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
