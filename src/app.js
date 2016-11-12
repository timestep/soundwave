import WaveSurfer from 'wavesurfer.js';

const audioFile = 'ringer.mp3';

const configOptions = {
  container: '#waveform',
  scrollParent: true,
};

const waveSurfer = WaveSurfer
  .create(configOptions);

waveSurfer.load(audioFile);

waveSurfer.on('ready', () => {
  waveSurfer.play();
});

waveSurfer.on('finish', () => {
  waveSurfer.play();
});
