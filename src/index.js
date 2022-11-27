import generateUrb from './generateUrb';
import './styles/main.scss';
import urban_bun from './assets/urban_bun.jpg';

const urbanImg = document.getElementById("urbanImg");
urbanImg.src = urban_bun
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener('click' , generateUrb);
generateUrb();