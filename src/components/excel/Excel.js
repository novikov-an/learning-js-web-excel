export class Excel {
  /**
   * @param {string} selector
   * @param {Object} options
   */
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
  getRoot() {
    const $root = document.createElement('div');

    this.components.forEach((Component) => {
      const component = new Component();
      $root.insertAdjacentHTML('beforeend', component.toHtml());
    });

    return $root;
  }
  render() {
    this.$el.append(this.getRoot());
  }
}

