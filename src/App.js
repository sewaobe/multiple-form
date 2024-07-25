import { useState } from 'react';
import { DefaultLayout } from './layouts';
import { AddOns, SelectPlan, YourInfo, Summary } from './pages';
import { FormProvider } from './context/FormContext';
import ConfirmText from './components/ConfirmText';

const multipleForm = [YourInfo, SelectPlan, AddOns, Summary, ConfirmText];

function App() {
    const [step, setStep] = useState(0);
    let Comp = multipleForm[step];
    return (
        <FormProvider>
            <DefaultLayout step={step} setStep={setStep}>
                <Comp />
            </DefaultLayout>
        </FormProvider>
    );
}

export default App;
