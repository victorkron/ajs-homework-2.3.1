import Character from '../app';

const expectObj = {
  name: 'John',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  protection: 10,
};

// let { attack, protection, type, ...rest } = expectObj;
// let myObj = rest;

const arr1 = ['John', 'Swordsman'];
const arr2 = ['JohnTrololololo', 'Swordsman'];
const arr3 = ['John', 'Tank'];

const arr4 = ['John', 'Bowman'];
const obj4 = {
  name: 'John',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  protection: 25,
};


const arr5 = ['John', 'Magician'];
const obj5 = {
  name: 'John',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  protection: 40,
};

const arr6 = ['John', 'Daemon'];
const obj6 = {
  name: 'John',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  protection: 40,
};

const arr7 = ['John', 'Undead'];
const obj7 = {
  name: 'John',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  protection: 25,
};

const arr8 = ['John', 'Zombie'];
const obj8 = {
  name: 'John',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  protection: 10,
};


describe('orderByProps tests: ', () => {
  test.each([
    ['input is valid', arr1, expectObj],
    ['incorrect data: name', arr2, undefined],
    ['incorrect data: type', arr3, undefined],
    ['input is valid(4)', arr4, obj4],
    ['input is valid(5)', arr5, obj5],
    ['input is valid(6)', arr6, obj6],
    ['input is valid(7)', arr7, obj7],
    ['input is valid(8)', arr8, obj8],
  ])(
    ('-> %s'),
    (name, inputData, expectation) => {
      let obj;
      try {
        obj = new Character(inputData[0], inputData[1]);
      } catch (e) {
        console.error(e);
      }

      expect(obj).toEqual(expectation);
    },
  );
});
