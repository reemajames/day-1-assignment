import { calculateSimpleInterest, calculateCompoundInterest } from './calculateInterest.js';

const principal = 1000;
const rate = 5;
const time = 5;

async function calculateSimple() {
 try {
   const simpleInterest = await calculateSimpleInterest(principal, rate, time);
   console.log(`Simple interest after ${time} years: $${simpleInterest.toFixed(2)}`);
 } catch (error) {
   console.error('Error:', error.message);
 }
}

async function calculateCompound() {
 try {
   const compoundInterest = await calculateCompoundInterest(principal, rate, time);
   console.log(`Compound interest after ${time} years: $${compoundInterest.toFixed(2)}`);
 } catch (error) {
   console.error('Error:', error.message);
 }
}

calculateSimple();
calculateCompound();