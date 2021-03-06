import styled from 'styled-components';
import { TEXT_PRIMARY } from '~/utils/colors';

export const Container = styled.div`
  flex: 1;
  margin-left: 45px;
`;

export const Voltar = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  
  h3{
    font-weight: 400;
    font-size: 13px;
    margin-left: 15px;
    color: ${TEXT_PRIMARY};
  }
`;

export const Header = styled.div`
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 45px;
  font-size: 14px;
  font-weight: 500;
  color: ${TEXT_PRIMARY};
  border-bottom: 1px solid rgba(165,165,165,0.3);
  
  h1{
    font-size: 22px;
    font-weight: 500;
    color: ${TEXT_PRIMARY};
    flex: 1;
  }  
`;

export const Content = styled.div`
  flex: 1;
  padding-top: 30px;  
  
  .buttons-top{
    display: flex;
    flex-direction: row;   
  }
  
  .main{
    display: flex;
    padding-top: 50px;
  }
`;

export const ConsultaContainer = styled.div`
  width: 750px;
  
  .row{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  
  .separator{
    height: 1px;
    width: 100%;
    background-color: rgba(165,165,165,0.2);
  }
  
  textarea{
    height: 160px;
    width: 580px;
    margin: 40px 0;
  }
  
  .controllers{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 35px;
    margin-bottom: 90px;   
  }
`;

export const ObservacaoContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;

  textarea{
    width: 600px;
    height: 160px;
  }
  
  .separator{
    height: 1px;
    width: 100%;
    background-color: rgba(165,165,165,0.2);
    margin-top: 70px;
  }
  
  .controllers{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 35px;   
  }
  
`;
