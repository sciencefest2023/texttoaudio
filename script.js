var myText = document.getElementById('myText'),
	voiceOptions = document.getElementById('voiceOptions'),
	volumeSlider = document.getElementById('volumeSlider'),
	rateSlider = document.getElementById('rateSlider'),
	pitchSlider = document.getElementById('pitchSlider'),
	voiceMap=[],
	btn = document.getElementById('button');

function loadVoices(){
	var voices = speechSynthesis.getVoices(),
	i,
	voice,
	option;

	for(i=0; i<voices.length; i+=1){
		voice=voices[i];
		option = document.createElement('option');
		option.value = voice.name;
		option.innerHTML = voice.name;
		voiceOptions.appendChild(option);
		voiceMap[voice.name] = voice;
	}
}





window.speechSynthesis.onvoiceschanged = function (e){
	loadVoices ();
};

btn.onclick = function (){
	var msg = new SpeechSynthesisUtterance();
	msg.volume = volumeSlider.value;
	msg.voice = voiceMap[voiceOptions.value];
	msg.rate = rateSlider.value;
	msg.pitch = pitchSlider.value;
	msg.text = myText.value;
	window.speechSynthesis.speak(msg);
};