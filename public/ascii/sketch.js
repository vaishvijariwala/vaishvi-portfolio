/**
 @auth vai
 @date 10/21/25
**/

const density = '     .,:;i1tfLCG08@';

let video;
let started = false;
const asciiOutput = document.getElementById('ascii-output');

document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('start-screen').style.display = 'none';
    asciiOutput.style.display = 'block';
    started = true;
});

function setup() {
    noCanvas();
    pixelDensity(1);
    // video starts only after button click
}

function draw() {
    if (!started) return;

    // Create video capture once on first frame after start
    if (!video) {
        video = createCapture(VIDEO);
        video.size(120, 80);
        video.hide();
        return;
    }

    if (video.pixels.length === 0) {
        video.loadPixels();
        return;
    }

    video.loadPixels();
    let asciiImage = '';

    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            const boostedLum = Math.min(255, Math.pow(lum / 255, 0.8) * 255);
            const charIndex = floor(map(boostedLum, 0, 255, 0, density.length - 1));
            const c = density.charAt(charIndex);
            asciiImage += c === ' ' ? '&nbsp;' : c;
        }
        asciiImage += '<br/>';
    }

    asciiOutput.innerHTML = asciiImage;
}