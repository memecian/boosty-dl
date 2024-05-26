# boosty-dl
<img align="right" src="boosty_dl200px.png"/>
boosty-dl is an extension that automatically extracts and displays audio source links from Boosty.to pages. This extension identifies audio elements on the page and adds the direct link to the audio source below each audio player.

## Features

- Works exclusively on Boosty.to pages.
- Dynamically updates the page to include audio source links when content is loaded asynchronously.
- Updates the audio source links when the user navigates via links on the site.

## Installation
### From release
TODO: Provide packaged extensions.
### From source
#### Firefox
1. Clone or download this repository to your local machine.
2. Open a terminal and navigate to the directory containing the extension files.
3. Compress the contents of the directory into a ZIP file. Make sure the ZIP file contains `manifest.json` **at the root**, not inside a subdirectory.
4. Open Firefox and go to about:addons.
5. Click the gear icon at the top right and select "Install Add-on From File...".
6. Select the boosty-dl.zip file you created.

#### Chromium-based browsers (e.g., Google Chrome)
Warning: Yet untested.

1. Clone or download this repository to your local machine.
2. Open your browser and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing your extension files.
## Usage

1. Navigate to any Boosty.to page with audio content.
2. The extension will automatically detect audio players and add a link to the audio source below each player.
3. Clicking on links within the site will trigger the extension to update the page and include any newly loaded audio sources.

## Development

If you want to modify or extend the functionality of this extension:

1. Make your changes to the `content.js` file or other parts of the project.
2. Reload the extension in Firefox by going to `about:debugging`, selecting "This Firefox", and clicking "Reload" next to the boosty-dl extension.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
