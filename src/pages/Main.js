import styled from 'styled-components';

const MainBox = styled.main`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-repeat: no-repeat;
  background-size: 400% 400%;

  animation: gradient 30s ease infinite;
  height: 90vh;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const Paragraph = styled.p`
  font-family: Roboto;
  margin: 0 auto;
  padding: 25px 0;
  font-size: 26px;
  font-weight: 700;
  color: white;
  width: 400px;
  line-height: 1.5;
  -webkit-animation: shadow-pop-tr 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  animation: shadow-pop-tr 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  @-webkit-keyframes shadow-pop-tr {
    0% {
      -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e,
        4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e,
        8px -8px #3e3e3e;
      box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e,
        4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e,
        8px -8px #3e3e3e;
      -webkit-transform: translateX(-8px) translateY(8px);
      transform: translateX(-8px) translateY(8px);
    }
  }
  @keyframes shadow-pop-tr {
    0% {
      -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
        0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e,
        4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e,
        8px -8px #3e3e3e;
      box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e,
        4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e,
        8px -8px #3e3e3e;
      -webkit-transform: translateX(-8px) translateY(8px);
      transform: translateX(-8px) translateY(8px);
    }
  }
`;

const Title = styled.h1`
  font-family: 'Roboto';
  margin: 0 auto;
  padding: 25px;
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  width: fit-content;
  line-height: 1.5;
  -webkit-animation: shadow-drop-center 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: shadow-drop-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @-webkit-keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    50% {
      -webkit-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.35);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    50% {
      -webkit-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.35);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
`;
const Main = () => {
  return (
    <>
      <MainBox>
        <Title>Let's go! Create new account and start 🚀</Title>
        <Paragraph>
          Everything you need to manage your contacts. The application will help
          you quickly find the desired contact and keep order in your address
          book.
        </Paragraph>
        <Paragraph>
          <span style={{ display: 'block' }}>Contact management:</span>
          <span style={{ display: 'block' }}>
            Create, modify, delete and store in your private account contacts.
          </span>
        </Paragraph>
      </MainBox>
    </>
  );
};

export default Main;
