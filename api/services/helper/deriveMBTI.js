const reducer = (arr, target) => {
  const filteredArr = arr.filter(answer => answer.name === target);
  const reducedValue = filteredArr.reduce((acc, curr) => {
    if (curr.response < 4) acc--;
    else if (curr.response > 4) acc++;
    return acc;
  }, 0);
  return reducedValue;
};

const deriveMBTI = answers => {
  const EI = reducer(answers, 'EI');
  const SN = reducer(answers, 'SN');
  const TF = reducer(answers, 'TF');
  const JP = reducer(answers, 'JP');

  return (
    (EI > 0 ? 'I' : 'E') +
    (SN > 0 ? 'N' : 'S') +
    (TF > 0 ? 'F' : 'T') +
    (JP > 0 ? 'P' : 'J')
  );
};

module.exports = deriveMBTI;
