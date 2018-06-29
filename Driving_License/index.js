/*
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)
6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
9–10: The date within the month of birth
11: The year digit from the year of birth (e.g. for 1987 it would be 7)
12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name
14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
15–16: Two computer check digits. We will always use "AA"
*/

// ["Oleg","","Lindvin","19-March-1990","M"]
// LINDV903190O99AA

module.exports = (data) => {
  const [name, middleName, surname, birthDate, gender] = data;
  const [birthDay, birthMonth, birthYear] = birthDate.split('-');
  const checkSum = '9AA';

  let surnamePart = surname.substr(0, 5).toUpperCase();
  surnamePart.length < 5 ? surnamePart += '9'.repeat(5 - surnamePart.length) : null;

  let monthDigit;
  switch (birthMonth) {
    case 'January':
    case 'Jan':
      monthDigit = '01';
      break;
    case 'February':
    case 'Feb':
      monthDigit = '02';
      break;
    case 'Mar':
    case 'March':
      monthDigit = '03';
      break;
    case 'Apr':
    case 'April':
      monthDigit = '04';
      break;
    case 'May':
      monthDigit = '05';
      break;
    case 'Jun':
    case 'June':
      monthDigit = '06';
      break;
    case 'Jul':
    case 'July':
      monthDigit = '07';
      break;
    case 'Aug':
    case 'August':
      monthDigit = '08';
      break;
    case 'Sep':
    case 'September':
      monthDigit = '09';
      break;
    case 'October':
    case 'Oct':
      monthDigit = '10';
      break;
    case 'November':
    case 'Nov':
      monthDigit = '11';
      break;
    case 'December':
    case 'Dec':
      monthDigit = '12';
      break;
    }

  gender === 'F' ? monthDigit = (Number(monthDigit) + 50).toString() : null;
  let names = middleName ? name.charAt(0) + middleName.charAt(0) : name.charAt(0) + '9';

  return `${surnamePart}${birthYear.charAt(2)}${monthDigit}${birthDay}${birthYear.charAt(3)}${names}9AA`;
}