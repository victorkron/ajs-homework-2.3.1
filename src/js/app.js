// TODO: write your code here
/**
 * Функция конструктор
 *
 * @param {string} name - имя игрока
 * @param type - тип персонажа
 */
export default function Character(name, type) {
  if (!(typeof name === 'string' && name.length >= 2 && name.length <= 10)) {
    throw new Error(`incorrect data: ${name}`);
  }

  if (!(type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie')) {
    throw new Error(`incorrect data: ${type}`);
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;

  switch (type) {
    case 'Bowman':
      this.attack = 25;
      this.protection = 25;
      break;
    case 'Swordsman':
      this.attack = 40;
      this.protection = 10;
      break;
    case 'Magician':
      this.attack = 10;
      this.protection = 40;
      break;
    case 'Daemon':
      this.attack = 10;
      this.protection = 40;
      break;
    case 'Undead':
      this.attack = 25;
      this.protection = 25;
      break;
    case 'Zombie':
      this.attack = 40;
      this.protection = 10;
      break;
    default:
  }
}
