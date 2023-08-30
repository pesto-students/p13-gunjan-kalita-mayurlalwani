function generateTransactionId() {
  if (!generateTransactionId.counter) {
    generateTransactionId.counter = 1;
  }

  const id = `TRANSACTION_ID_${generateTransactionId.counter}`;
  generateTransactionId.counter++;

  return Symbol(id);
}

const transaction1 = generateTransactionId();
console.log(transaction1); // Symbol(TRANSACTION_ID_1)

const transaction2 = generateTransactionId();
console.log(transaction2); // Symbol(TRANSACTION_ID_2)

const transaction3 = generateTransactionId();
console.log(transaction3); // Symbol(TRANSACTION_ID_3)
