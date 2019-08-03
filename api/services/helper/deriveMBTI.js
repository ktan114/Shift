const deriveMBTI = answers => {
  const EI = answers.filter(answer => answer.name === 'EI');
  const first = EI.reduce((acc, curr) => {
    if (curr.response < 4) acc--;
    else if (curr.response > 4) acc++;
    return acc;
  }, 0);
  const SN = answers.filter(answer => answer.name === 'SN');
  const second = SN.reduce((acc, curr) => {
    if (curr.response < 4) acc--;
    else if (curr.response > 4) acc++;
    return acc;
  }, 0);
  const TF = answers.filter(answer => answer.name === 'TF');
  const third = TF.reduce((acc, curr) => {
    if (curr.response < 4) acc--;
    else if (curr.response > 4) acc++;
    return acc;
  }, 0);
  const JP = answers.filter(answer => answer.name === 'JP');
  const fourth = JP.reduce((acc, curr) => {
    if (curr.response < 4) acc--;
    else if (curr.response > 4) acc++;
    return acc;
  }, 0);

  return (
    (first > 0 ? 'I' : 'E') +
    (second > 0 ? 'N' : 'S') +
    (third > 0 ? 'F' : 'T') +
    (fourth > 0 ? 'P' : 'J')
  );
};

module.exports = deriveMBTI;
