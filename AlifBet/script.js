
const storage = [
    {img:'./images/alif.png', audio:'./audio/alif.mp3',color: '#FECA67'},
    {img:'./images/ba.png', audio:'./audio/ba.mp3',color: '#F7A25E'},
    {img:'./images/ta.png', audio:'./audio/ta.mp3',color: '#F52F2F'},
    {img:'./images/tha.png', audio:'./audio/tha.mp3',color: '#F253AB'},
    {img:'./images/jiim.png', audio:'./audio/jiim.mp3',color: '#994FEA'},
    {img:'./images/hha.png', audio:'./audio/hha.mp3',color: '#5492F5'},
    {img:'./images/kha.png', audio:'./audio/kha.mp3',color: '#50CFF1'},
    {img:'./images/daal.png', audio:'./audio/daal.mp3',color: '#23D16B'},
]

const images = document.querySelector('.images');

for(urls of storage){
    const alph = new Alphabet(urls.img, urls.audio,urls.color)
    let img = alph.create_img_element()

    img.addEventListener('click',function(e){
        alph.play_audio()
        alph.change_element_background(document.getElementsByTagName('body'))
    });
    images.appendChild(img);
}
