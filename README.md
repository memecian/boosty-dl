# Boosty-dl

Boosty-dl is an extension that automatically extracts and displays audio source links from Boosty.to pages. This extension identifies audio elements on the page and adds the direct link to the audio source below each audio player.

## Features

- Works exclusively on Boosty.to pages.
- Automatically detects and processes audio players.
- Dynamically updates the page to include audio source links even when content is loaded asynchronously.
- Updates the audio source links when the user navigates via links on the site.

## Installation

### From release
TODO: Provide zip or bundle

### From source
#### Firefox
1. Clone or download this repository to your local machine.
2. Open Firefox and go to `about:debugging`.
3. Click on "This Firefox" in the sidebar.
4. Click "Load Temporary Add-on".
5. Select the `manifest.json` file from the downloaded repository.
#### Chromium-based browsers
TODO.

## Usage

1. Navigate to any Boosty.to page with audio content.
2. The extension will automatically detect audio players and add a link to the audio source below each player.
3. Clicking on links within the site will trigger the extension to update the page and include any newly loaded audio sources.

## Files

- `manifest.json`: The manifest file that defines the extension's properties and permissions.
- `boosty-dl.js`: The content script that contains the logic for detecting and processing audio players.
- `boosty-dl.png`: The icon for the extension (optional, replace with your own if desired).

## Development

If you want to modify or extend the functionality of this extension:

1. Make your changes to the `content.js` file or other parts of the project.
2. Reload the extension in Firefox by going to `about:debugging`, selecting "This Firefox", and clicking "Reload" next to the boosty-dl extension.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
