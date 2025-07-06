# Blockchain-Based Cryptocurrency Wallet Web Application

## 🚀 Overview

This application is a web-based cryptocurrency wallet built using React, Node.js, Tailwind CSS, Hardhat, and Solidity. It allows users to send Ethereum-based transactions via a user-friendly interface and provides smart contract functionality on the Sepolia Test Network.

## ✨ Features

### ✅ Smart Contract Interaction
* Built with Solidity using Hardhat.
* Supports Ethereum transactions between addresses.
* Captures transaction details like message, timestamp, sender, and receiver.

### ✅ Wallet Connection & Management
* Metamask Integration for connecting users' Ethereum wallets.
* Validates wallet connection before allowing transactions.
* Handles wallet connection state using React Context API.

### ✅ Transaction Processing
* Sends transactions to the smart contract deployed on the Sepolia Test Network.
* Displays transaction history using local storage for persistence.
* Provides a smooth user experience with loading indicators and success messages.

### ✅ User-Friendly Interface
* Built using React & Tailwind CSS for a clean, responsive UI.
* Dynamic navigation with React Router.
* Utilizes Ethers.js for interacting with the Ethereum blockchain.

## 🛠 Tech Stack

* **Frontend**: React, Tailwind CSS, Axios, Ethers.js
* **Backend & Blockchain**: Node.js, Hardhat, Solidity
* **Network**: Sepolia Test Network (via Alchemy)
* **Wallet**: Metamask
* **Environment Management**: .env files (Private Key & Alchemy Endpoint)

## 📊 Data Flow & Page Navigation

### **Home Page (Welcome Section)**
* Displays a welcome message and prompts users to connect their Metamask wallet.
* If connected, redirects to the Transaction Page.

### **Transaction Page (Send Transaction)**
* Users enter transaction details (Receiver Address, Amount, Message).
* Clicking "Send" triggers the transaction process.
* If successful, the transaction is recorded and stored in local storage.
* Redirects to the Transaction History Page.

### **Transaction History Page**
* Displays all past transactions retrieved from local storage.
* Shows transaction details like sender, receiver, timestamp, and message.

### **Services Page**
* Provides an overview of the application's services.
* Displays information cards describing each feature.

### **Footer Section**
* Contains links and additional information about the application.

## 📌 Endpoints (Backend)

* **POST /sendTransaction** - Sends a transaction from one wallet to another.
* **GET /getAllTransactions** - Fetches all stored transactions.

### ScreenShot
![Screenshot 2025-06-02 160355](https://github.com/user-attachments/assets/1407f228-fb12-4e80-91b3-de82187316c7)
![Screenshot 2025-06-02 160428](https://github.com/user-attachments/assets/ce9bf7cc-439e-459a-9330-8d3644bdf469)
![Screenshot 2025-06-02 160454](https://github.com/user-attachments/assets/3a325339-a8f8-4d99-81d6-0cbf6d0ec063)
![Screenshot 2025-06-02 160533](https://github.com/user-attachments/assets/5ea246b1-3ee1-43d8-a76a-8f80576e89e0)
![Screenshot 2025-06-02 160719](https://github.com/user-attachments/assets/d69cc9ec-40e9-406b-bf13-8049611b0325)

