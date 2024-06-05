import styled from 'styled-components';

interface BulletProps {
  isCompleted: boolean;
  isActive: boolean;
}

interface TitleProps {
  isCompleted: boolean;
  isActive: boolean;
}

interface RoadProps {
  isCompleted: boolean;
  isActive: boolean;
}

const StyledStepperContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledStepContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledBullet = styled.div<BulletProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ isCompleted, isActive }) =>
    isCompleted
      ? '#1976d2' // completed color
      : isActive
      ? 'white' // active color
      : 'white'}; // inactive color
  border: ${({ isCompleted, isActive }) =>
    isCompleted
      ? '2px solid #1976d2'
      : isActive
      ? '2px solid #1976d2' // border for active bullet
      : '2px solid black'}; // border for inactive bullet
  color: ${({ isCompleted, isActive }) =>
    isCompleted
      ? 'white'
      : isActive
      ? 'white'
      : 'white'}; // text color for bullet
  font-size: 12px;
  margin-right: 8px;
`;

const StyledTitle = styled.div<TitleProps>`
  color: ${({ isCompleted, isActive }) =>
    isCompleted || isActive ? 'grey' : 'black'};
  font-size: 14px;
  font-weight: ${({ isCompleted, isActive }) =>
    isCompleted || isActive ? 'auto' : 'bold'};
`;

const StyledRoad = styled.div<RoadProps>`
  flex: 1;
  height: 1px;
  background-color: ${({ isCompleted, isActive }) =>
    isCompleted && !isActive
      ? '#1976d2'
      : '#A3A3A3'};
  margin: 0 8px;
  width: 50px;
`;

export {
  StyledStepperContainer,
  StyledStepContainer,
  StyledBullet,
  StyledTitle,
  StyledRoad,
  StyledRow,
};
