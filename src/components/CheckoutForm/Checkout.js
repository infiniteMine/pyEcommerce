import { Paper, Typography, Step, StepLabel, Stepper } from '@material-ui/core'
import { useState } from 'react';
import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const Checkout = () => {

  const classes = useStyles();
  const [activeStep, setActivestep] = useState(0);
  const steps = ["Shiping adress", "Payment details"];

  const nextStep = () => setActivestep((prevActivestep) => prevActivestep + 1);
  const backStep = () => setActivestep((prevActivestep) => prevActivestep - 1);

  const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep}/> : <PaymentForm/>

  return (
    <div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}> 
            {steps.map(step => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Form/>
        </Paper>
      </main>
    </div>
  )
}

export default Checkout;
