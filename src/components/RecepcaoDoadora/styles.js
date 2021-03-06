import styled from 'styled-components';
import { TEXT_SECONDARY } from '~/utils/colors';

export const Container = styled.div`
  width: 750px;
  margin-top: 40px;
  
  fieldset{  
    position: relative;   
    margin-bottom: 50px; 
    
    &:after{
      content: url("/icons/check-circle.svg");
      position: absolute;
      top: 0;
      margin-top: 2px;
      right: 10px;
      background-color: #ffffff;
      padding: 0 5px;
      color: #51996f;
    }
    
    .content{      
      display: flex;
      flex-direction: row;
    }
    
    .contatos{
      display: flex;
      flex-direction: row;
      
      .info{
        margin-right: 30px;
      }
    }
    
    legend{
      color: #3A6E50;
      padding-left: 8px;
      padding-right: 8px;
    }
    
    .info{
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      
      label{
        font-size: 13px;
        color: ${TEXT_SECONDARY};
      }
      
      span{
        display: block;
        color: #646464;
      }
    }
    
    .col{
      display: flex;
      flex-direction: column;
      flex: 1;
      
      .label{
        display: block;
        font-size: 14px;
        color: #646464;
        margin-bottom: 5px;
      }
      
      .infos{
        display: flex;
        flex-direction: row;
        
        span{
          display: block;
          height: 35px;
          border-radius: 3px;
          border: 1px solid #51996f;
          line-height: 34px;
          width: 75px;
          text-align: center;
          margin-right: 10px;
          margin-top: 10px;
          color: #3A6E50;
          font-size: 13px;
        }
      }
    }   
  }
`;
