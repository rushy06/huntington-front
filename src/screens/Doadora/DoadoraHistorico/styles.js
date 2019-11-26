import styled from 'styled-components';

export const Container = styled.div`
  width: 950px;
  padding-top: 35px;
  
  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .col{
    display: flex;
    flex-direction: column;
    margin-right: 64px;
    
    label{
      font-size: 13px;
      color: #ABABAB;
    }
    
    span{
      font-size: 14px;
      color: #646464;
    }
  }

  .adicionar-historico{
    height: 65px;
    border: 2px dashed #f0f0f0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  fieldset{
    margin-top: 50px;
    
    legend{
      text-transform: uppercase;
    }  
    
    .data{
      display: flex;
      flex-direction: row;
      align-items: center;
      
      span{
        font-size: 14px;
        color: #646464;
        margin-right: 40px;
        margin-left: 12px;
        margin-top: 1px;
      }
    }
    
    .check-label{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 48px;
      
      span{
        margin-right: 14px;
      }
    }
  }
`;