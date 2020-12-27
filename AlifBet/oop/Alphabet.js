
class Alphabet {

  constructor(img_url, audio_url, color = '') {
    this.img_url = img_url;
    this.audio_url = audio_url;
    this.color = color
  }

  create_img_element() {
    const img_element = document.createElement("img");
    img_element.src = this.img_url;
    return img_element;
  }

  play_audio() {
    let audio = new Audio(this.audio_url);
    audio.play();
  }

  change_element_background(element){
    element[0].style.backgroundColor = this.color;
  }
}
