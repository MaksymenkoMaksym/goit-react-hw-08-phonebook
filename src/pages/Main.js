import styled from 'styled-components';
// import herb from '../assets/herb.png';
const MainBox = styled.main`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  ${'' /* background-image: url('${herb}'); */}
  background-repeat: no-repeat;
  background-size: 400% 400%;

  animation: gradient 30s ease infinite;
  height: 100vh;

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

const Main = () => {
  return (
    <>
      <MainBox>{/* <h1>Welcome dear</h1> */}</MainBox>
    </>
  );
};

export default Main;
