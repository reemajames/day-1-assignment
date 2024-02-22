
export async function calculateSimpleInterest(principal, rate, time) {
    if (principal <= 0 || rate <= 0 || time <= 0) {
        throw new Error('Principal, rate, and time must be greater than zero.');
    }
    let simpleInterest;
    simpleInterest = (principal * rate * time) / 100;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(simpleInterest);
      }, 3000);
    });
   }

export async function calculateCompoundInterest(principal, rate, time) {
    if (principal <= 0 || rate <= 0 || time <= 0) {
      throw new Error('Principal, rate, and time must be greater than zero.');
    }
    let compoundInterest;
    const n = 12;
    compoundInterest = principal * Math.pow(1 + rate / (n * 100), n * time) - principal;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(compoundInterest);
      }, 5000);
    });
   }