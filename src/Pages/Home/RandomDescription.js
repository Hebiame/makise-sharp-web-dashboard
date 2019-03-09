import { Component } from 'react';

class RandomDescription extends Component {

  descriptions = [
    "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Cras eu nulla ligula. Ut at elementum nisl.",
    "Nulla in turpis non nunc. Suspendisse potenti. Cras nec diam eros, dapibus eget, ante.",
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut orci id felis.",
    "In euismod quis, egestas consequat et, dictum aliquet id, elementum eros cursus quis, accumsan vestibulum."
  ];

  render() {
    return this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
  }
}

export default RandomDescription;