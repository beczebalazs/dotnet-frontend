import React from 'react';
import { StyledBullet, StyledRoad, StyledRow, StyledStepContainer, StyledStepperContainer, StyledTitle } from './Stepper.styled';

type Step = {
  title: string;
};

type StepperProps = {
  steps: Step[];
  activeStep: number;
  onStepChange?: (index: number) => void;
};

const Stepper: React.FC<StepperProps> = ({ steps, activeStep, onStepChange, ...rest }) => {
  const handleStepClick = (index: number) => {
    if (onStepChange) {
      onStepChange(index);
    }
  };

  return (
    <StyledStepperContainer>
      {steps.map((step, index) => {
        const isCompleted = index < activeStep;
        const isActive = index === activeStep;
        const isLast = index + 1 === steps.length;

        return (
          <StyledStepContainer key={index} {...rest}>
            <StyledRow onClick={() => handleStepClick(index)}>
              <StyledBullet isCompleted={isCompleted} isActive={isActive}>
                {isCompleted ? '✔' : isActive ? '' : ''}
              </StyledBullet>
              <StyledTitle isCompleted={isCompleted} isActive={isActive}>
                {step.title}
              </StyledTitle>
            </StyledRow>
            {!isLast && (
              <StyledRoad
                isCompleted={isCompleted}
                isActive={isActive}
              />
            )}
          </StyledStepContainer>
        );
      })}
    </StyledStepperContainer>
  );
};

export default Stepper;
