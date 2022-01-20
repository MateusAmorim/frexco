import styled from 'styled-components';

const HomeDiv = styled.div`
  min-height: 85vh;
  width: 100%;
  .listagem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .search {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
      label {
        color: #87f;
        font-weight: 600;
        font-size: 1.4rem;
        margin-bottom: 10px;
      }
      form {
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
        border: none;
        input {
          border: none;
          background-color: #fff;
          padding: 10px;
          border-radius: 5px 0 0 5px;
          height: 50px;
          width: 250px;
          color: #333;
          &:focus,
          &:hover {
            outline: 0;
            border: 1px solid #87f;
          }
        }
        button {
          border: none;
          background-color: #fff;
          padding: 10px;
          border-radius: 0 5px 5px 0;
          height: 50px;
          width: 50px;
          cursor: pointer;
          &:focus,
          &:hover {
            outline: 0;
            border: 1px solid #87f;
          }
        }
      }
    }
    .produtos {
      width: 95vw;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      padding: 50px 0;
      @media only screen and (max-width: 500px) {
        width: 100%;
      }
      .container {
        height: 700px;
        width: 400px;
        margin: 20px;
        /* box-shadow: 0 4px 8px rgb(30 60 90 / 10%); */
        box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
        border-radius: 5px;
        padding: 10px;
        animation: enter 0.3s;
        @media only screen and (max-width: 500px) {
          max-width: 100%;
          max-height: auto;
          height: auto;
          margin: 20px 0;
        }
        @keyframes enter {
          from {
            opacity: 0;
            transform: translate3d(0, -20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0px, 0);
          }
        }
        transition: all 0.2s;
        cursor: pointer;
        &:hover {
          /* box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2); */
          transform: scale(1.1);
          position: relative;
          z-index: 1;
        }
        @media only screen and (max-width: 500px) {
          &:hover {
            transform: none;
            /* box-shadow: 0 4px 8px rgb(30 60 90 / 10%); */
          }
        }
        img {
          height: 80%;
          width: 100%;
        }
        section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 10px 0;
          p {
            font-size: 1.2rem;
            font-weight: 600;
          }
          h1 {
            color: #e80;
            font-size: 1.5rem;
            font-weight: 600;
            margin: 10px 0;
          }
          button {
            background-color: #87f;
            color: #fff;
            font-size: 1.125rem;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
          }
        }
      }
    }
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 86vh;
    width: 100%;
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #87f;
      margin: 4px;
      animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
      &:nth-child(1) {
        animation-delay: 0.1s;
      }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.3s;
      }
      &:nth-child(4) {
        animation-delay: 0.4s;
      }
      @keyframes dots {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          transform: translate3d(0, 30px, 0);
        }
      }
    }
  }
`;

export default HomeDiv;
