(function() {
  function addLinks() {
    // Select all divs with class matching "AudioPlayer_audioView_*"
    const audioDivs = document.querySelectorAll('div[class^="BlockRenderer_audio_"]');
    // alert(`Found ${audioDivs.length} divs matching the regex.`)
    const message = `boosty-dl: Found ${audioDivs.length} div(s).`;
    if (audioDivs.length < 1) {
        console.warn(message);
    } 
    else {
        console.log(message);
    }
    console.log()
    audioDivs.forEach(div => {
      const audioTag = div.querySelector('audio');
      console.log(`Audio tag: ${audioTag}\t Audio source ${audioTag.src}`)
      if (audioTag) {
        if (!div.querySelector('.audio-src-link')) {
            console.log(`boosty-dl: appending link.`)
            // Create a new div element to hold the audio src link
            const linkDiv = document.createElement('div');
            //linkDiv.textContent = `Audio source: ${audioTag.src}`;
            linkDiv.style.marginTop = "10px";
            linkDiv.style.fontSize = "14px";
            linkDiv.style.color = "#000";
            linkDiv.className = 'audio-src-link';
            const linkItself = document.createElement('a');
            linkItself.href = audioTag.src;
            linkItself.innerHTML = "Download";
            linkDiv.appendChild(linkItself);
            // Append the new div below the audio tag
            div.appendChild(linkDiv);
        }
      }
    });
  }

  // Run the function initially
  addLinks();

  // Add more links when scrolling
  const observer = new MutationObserver(addLinks);
  observer.observe(document.body, { childList: true, subtree: true });
  /*
  if (document.querySelectorAll('div[class*="AudioPlayer_audioView_"]').length === 0) {
    setTimeout(findAndModifyAudioDivs, 1000);  // Retry after 1 second
  }*/
   // Add event listener for link clicks to update the site
   document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' || event.target.closest('a')) {
      setTimeout(findAndModifyAudioDivs, 1000);  // Run after 1 second to allow new content to load
    }
  }, true);  // Use capture phase to ensure it runs early
})();
