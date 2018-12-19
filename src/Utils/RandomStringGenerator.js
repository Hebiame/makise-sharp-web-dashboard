class RandomStringGenerator {

  constructor(validChars, n) {
    this.validChars = validChars;
    this.n = n;
  }

  generate() {
    let array = new Uint8Array(this.n);
    window.crypto.getRandomValues(array);
    array = array.map(x => this.validChars.charCodeAt(x % this.validChars.length));
    return String.fromCharCode.apply(null, array);
  }
}

export default RandomStringGenerator;