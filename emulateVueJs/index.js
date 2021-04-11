class VuezLevel1 {
  constructor(options) {
    this.el = document.querySelector(options.el);
    this.data = options.data;

    this.replaceTemplateStrings();
  }

  replaceTemplateStrings() {
    const stack = [this.el];
    while (stack.length) {
      const n = stack.pop();
      if (n.childNodes.length) {
        stack.push(...n.childNodes);
      }

      if (n.nodeType === Node.TEXT_NODE) {
        Object.keys(this.data).forEach((key) => {
          n.textContent = n.textContent.replace(
            new RegExp(`{{ ${key} }}`, 'g'),
            this.data[key]
          );
        });
      }
    }
  }
}

var app = new VuezLevel1({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    anotherMessage: 'Bye Vue!',
  },
});

class VuezLevel2 {
  constructor(options) {
    this.el = document.querySelector(options.el);
    this.data = options.data;

    this.replaceTemplateStrings();
  }

  replaceTemplateStrings() {
    const stack = [this.el];
    while (stack.length) {
      const n = stack.pop();
      if (n.childNodes.length) {
        stack.push(...n.childNodes);
      }

      if (n.nodeType === Node.TEXT_NODE) {
        this.replaceText(n);
      }
    }
  }

  replaceText(node) {
    let text = node.textContent;
    let result = '';

    let state = 0; // 0 searching template, 1 searching key
    let cursor = 0;

    for (let i = 0; i < text.length - 1; i++) {
      switch (state) {
        case 0:
          if (text[i] === '{' && text[i + 1] === '{') {
            state = 1;
            result += text.substring(cursor, i);
            cursor = i;
          }
          break;
        case 1:
          if (text[i] === '}' && text[i + 1] === '}') {
            state = 0;
            result += this.data[text.substring(cursor + 2, i - 1).trim()];
            cursor = i + 2;
          }
          break;
        default:
      }
    }

    result += text.substring(cursor);

    node.textContent = result;
  }
}

var app = new VuezLevel2({
  el: '#app2',
  data: {
    message: 'Hello Vue!',
    anotherMessage: 'Bye Vue!',
  },
});
