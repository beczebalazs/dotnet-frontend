import React, { useState } from 'react';
import Layout from '../../components/common/layout/layout';
import Stepper from '../../components/stepper/Stepper';

const steps = [
  { title: 'Step1' },
  { title: 'Step2' },
  { title: 'Step3' },
];

const Detail = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (index) => {
    setCurrentStep(index);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return <div>Content for Template settings</div>;
      case 1:
        return <div>Content for User settings</div>;
      case 2:
        return <div>Content for Contact Center</div>;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Stepper steps={steps} activeStep={currentStep} onStepChange={handleStepChange} />
      {renderContent()}
    </Layout>
  );
};

export default Detail;
