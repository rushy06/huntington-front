import styled from 'styled-components';
import BuscaBase from '~/components/Busca';

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
    color: #707070;
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
  color: #707070;
  border-bottom: 1px solid rgba(165,165,165,0.3);
  
  h1{
    font-size: 18px;
    font-weight: 500;
    color: #707070;
    flex: 1;
  } 
  
  .endereco, .quantidade{
    display: flex;
    flex-direction: row;
    align-items: center;    
    margin-left: 30px;
    
    span{
      margin-left: 8px;
    }
  }
`;

export const Subheader = styled.div`
  padding: 20px 45px 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const Busca = styled(BuscaBase)`
  width: 450px;
`;


export const Content = styled.div`
  width: 100%;
  
  table{
    width: 100%;
    padding-right: 45px;
    
    th{
      font-size: 13px;
      color: #A5A5A5;
      font-weight: 400;
    }
    
    tr{
      height: 60px;
      cursor: pointer;
    }
    
    td{
      border-bottom: 1px solid rgba(165,165,165,0.2);
      font-size: 14px;
      font-weight: 400;
      color: #707070;
      text-align: center;
    }
  }
`;
