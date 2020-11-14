import styled from 'styled-components';

const Day = styled.h1`
  font-size: 26px;
  font-weight: 900;
  margin-top: 0;
`;
const Month = styled.div`
  font-size: 14px;
  letter-spacing: 0.5px;

`;

function Header({ day, num, month }) {
  return(
    <div>
    <Month>{month} {num}</Month>
    <Day>{day}</Day>
  </div>
  )
}

export default Header;