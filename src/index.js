module.exports = function check(str, bracketsConfig) {
  let pairs = bracketsConfig;
  let open = new Set(pairs.map(pair => pair[0]));
  let close  = new Set(pairs.map(pair => pair[1]));
  let relevant = pairs.reduce((acc, [open, close]) => ({...acc, [close]: open}), {});

  let stack = [];
  for (let char of str) {
    if (open.has(char)) {
      stack.push(char);
    }
    if (close.has(char)) {
      if (relevant[char] !== stack.pop()) return false;
    }
  }

  return stack.length == 0;
}
