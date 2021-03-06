import styled from 'styled-components';
import BuscaBase from '~/components/Busca';
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
  margin-top: 30px;
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 45px;
  font-size: 14px;
  font-weight: 500;
  color: ${TEXT_PRIMARY};
  
  h1{
    font-size: 18px;
    font-weight: 500;
    color: ${TEXT_PRIMARY};
    width: 130px;
  } 
  
  .info{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid rgba(112,112,112,0.5);
    width: 140px;
    height: 40px;
    margin-right: 10px;
    
    h3{
      font-size: 21px;
      font-weight: 400;
    }
    
    span{
      margin-left: 8px;
      font-size: 12px;
      color: #B2B2B2;
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
      font-size: 14px;
      font-weight: 400;
      color: ${TEXT_PRIMARY};
      text-align: center;
    }
  }

`;
