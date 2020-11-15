import DayCard from './DayCard';
import styled from 'styled-components';

const DayButton = styled.button`
  position: relative;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  color: #FDFDFD;
  opacity: .25;
  font-weight: 900;
  font-size: 13px;
  text-align: center;
  text-transform: uppercase;
  margin: 3rem 2rem;
  padding-bottom: 8px;
  ${props => props.active === true && `
    opacity: 1;
    &:after {
      content: "";
      width: 60%;
      height: 3px;
      position: absolute;
      left: 50%;
      bottom: 0;
      background-color: #AA0AE1;
      transform: translateX(-50%);
    }
  `}
`;

function Main() {
  return(
    <div className="container">
      <DayButton active={true}>Today</DayButton>
      <DayButton active={false}>Tomorrow</DayButton>
      <DayCard />
    </div>
  )
}

export default Main;