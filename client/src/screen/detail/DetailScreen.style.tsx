import styled from "styled-components";

export { DetailS };

const DetailS = styled.div`
  display: flex;

  .left {
    width: 50%;
    
    .description {
      font-size: 18px;
      line-height:140%
    }
  }

  .right {
    width: 50%;
    height: 600px;
    padding: 0px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .infos {

      .category {
        font-size: 18px;
        color: #676767;
        margin-bottom: 20px;
      }

      .flex {
        display: flex;
        justify-content: space-between;

        .title {
          font-size: 24px;
          font-weight: bold;
        }

        .price {
          font-size: 24px;
          float: right;
        }
      }
    }
    
    .colors {
      display: flex;
      justify-content: space-between;
    }
    
    .sizes {

      p {
        font-size: 18px;
        margin-bottom: 20px;
      }
      
      .sizes-buttons {
        
        display: grid;
        width: 100%;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;

        button {
          width: 100%;
          color: #000;
        }
      }
    }
  }
`;
