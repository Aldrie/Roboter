const robot = require('robotjs');
const { read } = require('./file');
const { convert } = require('./converter');

const runCommands = {
  delay: {
    execute(value) {
      const wait = new Date(
        new Date().getTime() + value * 1000
      );
      while(wait > new Date()){}
    },
  },
  mouseDelay: {
    execute(value) {
      robot.setMouseDelay(value);
    },
  },
  keyboardDelay: {
    execute(value) {
      robot.setKeyboardDelay(value);
    },
  },
  move: {
    execute(value) {
      robot.moveMouseSmooth(value.x, value.y);
    },
  },
  click: {
    execute() {
      robot.mouseClick();
    },
  },
  type: {
    execute(value) {
      robot.typeString(value);
    },
  },
  tap: {
    execute(value) {
      robot.keyTap(value);
    },
  },
};

exports.run = (file) => {
  const commands = convert(read(file));
  commands.forEach((command) => {
    try {
      runCommands[command.type].execute(command.value || '');
    } catch(err) {
      throw new Error(err);
    };
  })
};