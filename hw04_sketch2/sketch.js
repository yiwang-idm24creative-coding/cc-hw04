//volume and frequency of the sound detected by the microphone.
let mic;
let fft;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start(); // Start listening to the microphone input
  
  fft = new p5.FFT(); // analyze the audio frequency
  fft.setInput(mic);
  
}

function draw() {
  background(0);
  
  let micVolume = mic.getLevel();
  micVolume = pow(micVolume, 0.3);
  
  let spectrum = fft.analyze();//analyze the range of frequency
  let freq = fft.getCentroid(); // get the pitch of the audio
  
  let zeroCrossings = calculateZeroCrossingRate(fft.waveform());
  
  // Map the volume to seconds, frequncy to minutes, zcr to hours
  let seconds = map(micVolume, 0, 1, 0, 60);
  let minutes = map(freq, 100, 10000, 0, 60);
  let hours = map(zeroCrossings, 0, 150, 0, 24);
  
  seconds = constrain(seconds, 0, 60);
  minutes = constrain(minutes, 0, 60);
  hours = constrain(hours, 0, 24);

  displayClock(floor(hours), floor(minutes), floor(seconds)); // Display clock based on frequency
}

//itertate the waveform caculate the zcr
function calculateZeroCrossingRate(waveform) {
  let zeroCrossings = 0;

  for (let i = 1; i < waveform.length; i++) {
    if ((waveform[i - 1] < 0 && waveform[i] >= 0) || (waveform[i - 1] >= 0 && waveform[i] < 0)) {
      zeroCrossings++;
    }
  }

  return zeroCrossings;
}

function displayClock(h, m, s) {
  // Display the seconds mapped to sound volume
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2), width / 2, height / 2);
}

