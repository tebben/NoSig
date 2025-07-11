# NoSig

Tired of annoying signatures cluttering up your Outlook? This extension automatically removes your company's default signature from new emails and also cleans up detectable signatures from incoming messages, giving you a cleaner reading experience.

The only thing this extension does is polling for elements with an id containing "signature" and removing them after the mutation observer detects changes in the DOM. It does not modify any other content or functionality of Outlook.

# How to Install the 'NoSig' Chrome Extension Locally

1.  **Open Chrome Extensions:**

    - Open the Chrome browser.
    - Navigate to `chrome://extensions` in the address bar.

2.  **Enable Developer Mode:**

    - In the top right corner of the Extensions page, toggle the "Developer mode" switch to the **on** position.

3.  **Load the Extension:**

    - Click the "Load unpacked" button that appears on the left side of the page.
    - In the file dialog that opens, navigate to the directory where you saved this extension's files (the directory containing `manifest.json` and `content.js`).
    - Select the entire directory and click "Open".

4.  **Verify Installation:**

    - The "NoSig" extension should now appear in your list of extensions.

5.  **How it Works:**

    - Open Outlook (either outlook.live.com or outlook.office.com).
    - Compose a new email.
    - The extension will automatically detect and remove the default signature.
    - For incoming emails, it will clean up any detectable signatures.
