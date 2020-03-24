const conversors = {
  mouseDelay: {
    convert(command) {
      return {
        type: 'mouseDelay',
        value: Number(command[0]),
      };
    },
  },
  keyboardDelay: {
    convert(command) {
      return {
        type: 'keyboardDelay',
        value: Number(command[0]),
      };
    },
  },
  delay: {
    convert(command) {
      return {
        type: 'delay',
        value: Number(command[0]),
      };
    },
  },
  move: {
    convert(command) {
      return {
        type: 'move',
        value: {
          x: Number(command[0]),
          y: Number(command[1]),
        }
      };
    },
  },
  click: {
    convert() {
      return {
        type: 'click',
      };
    },
  },
  type: {
    convert(command) {
      const string = command.join(' ');
      return {
        type: 'type',
        value: string,
      };
    },
  },
  tap: {
    convert(command) {
      return {
        type: 'tap',
        value: command[0],
      };
    },
  }
};

exports.convert = (value) => {
  value = value.replace(/\r\n/g  , '\n');

  const lines = value.split('\n');

  return lines.map((item, index) => {
    try {
      const command = item.split(' ');
      const converted = conversors[command[0]].convert(
        command.slice(1, command.length)
      );
      return converted;
    } catch(err) {
      throw new Error(`Error in the file, at line:${index + 1}`);
    }
  });
};