const getModifier = value => {
  switch (value) {
    case 1:
      return -5;
    case 2:
    case 3:
      return -4;
    case 4:
    case 5:
      return -3;
    case 6:
    case 7:
      return -2;
    case 8:
    case 9:
      return -1;
    case 10:
    case 11:
      return 0;
    case 12:
    case 13:
      return 1;
    case 14:
    case 15:
      return 2;
    case 16:
    case 17:
      return 3;
    case 18:
    case 19:
      return 4;
    case 20:
    case 21:
      return 5;
    case 22:
    case 23:
      return 6;
    case 24:
    case 25:
      return 7;
    case 26:
    case 27:
      return 8;
    case 28:
    case 29:
      return 9;
    case 30:
      return 10;
    default:
      return 0;
  }
};

const getXP = challengeRating => {
  const mapping = {
    '0': '0',
    '1/8': '25',
    '1/4': '50',
    '1/2': '100',
    '1': '200',
    '2': '450',
    '3': '700',
    '4': '1,000',
    '5': '1,800',
    '6': '2,300',
    '7': '2,900',
    '8': '3,900',
    '9': '5,000',
    '10': '5,900',
    '11': '7,200',
    '12': '8,400',
    '13': '10,000',
    '14': '11,500',
    '15': '13,000',
    '16': '15,000',
    '17': '18,000',
    '18': '20,000',
    '19': '22,000',
    '20': '25,000',
    '21': '33,000',
    '22': '41,000',
    '23': '50,000',
    '24': '62,000',
    '30': '155,000'
  };
  if (!(challengeRating in mapping)) {
    return '0';
  }

  return mapping[challengeRating];
};
module.exports = { getModifier, getXP };
