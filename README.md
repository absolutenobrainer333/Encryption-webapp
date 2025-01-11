# Symmetric Encryption App

This is a web application that implements symmetric encryption and decryption using the **Fernet encryption algorithm**. Users can encrypt and decrypt messages using a passphrase, and the encrypted text can be copied to the clipboard. This app features both encryption and decryption functionalities, built with React and styled using TailwindCSS. The backend is powered by Django to handle the encryption and decryption requests.

## Features

- **Encrypt Text**: Allows the user to encrypt plaintext messages with a passphrase.
- **Decrypt Text**: Allows the user to decrypt encrypted messages with the correct passphrase.
- **Clipboard Integration**: You can paste the encrypted content or passphrase directly from your clipboard.
- **Passphrase Generation**: Generates a random passphrase for encryption if needed.
- **Dark/Light Mode**: Switch between dark and light modes for better user experience.

## Technology Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Django (Fernet Encryption API)
- **State Management**: React hooks (`useState`)
- **Routing**: React Router


## Installation

### Prerequisites

1. **Node.js** and **npm** installed on your machine.
2. **Django** setup for handling the encryption and decryption requests (API server).


## Snapshots

- **Light Mode:** 
    [Light Mode Preview](https://github.com/absolutenobrainer333/Encryption-webapp/blob/main/public/assets/snapshot/light-mode.png) 
- **Dark Mode:** 
    [Dark Mode Preview](https://github.com/absolutenobrainer333/Encryption-webapp/blob/main/public/assets/snapshot/dark-mode.png)

