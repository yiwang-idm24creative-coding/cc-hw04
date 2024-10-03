initialize mic and fft objects

function setup():
    create canvas with dimensions 400x400
    initialize audio input using microphone
    start listening to microphone input
    initialize FFT object to analyze audio frequency
    set FFT input to microphone

function draw():
    clear the canvas (set background color to black)
    
    // Get the current volume level from the microphone
    micVolume = get the level of the microphone
    micVolume = adjust micVolume using a power function to reduce dynamic range

    // Analyze the audio spectrum to get frequency data
    spectrum = analyze the audio spectrum
    freq = get the centroid frequency from the FFT analysis

    // Calculate the zero-crossing rate from the waveform
    zeroCrossings = call calculateZeroCrossingRate with FFT waveform data
    
    // Map values to time units
    seconds = map micVolume to range 0 to 60
    minutes = map freq to range 100 to 10000 (mapped to 0 to 60)
    hours = map zeroCrossings to range 0 to 150 (mapped to 0 to 24)
    
    // Constrain values to ensure they stay within specified limits
    seconds = constrain seconds to range 0 to 60
    minutes = constrain minutes to range 0 to 60
    hours = constrain hours to range 0 to 24

    // Display the time based on the cal
