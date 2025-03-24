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
* **Backend & Blockchain**: Node.js, Hardhat, Solidity, Waffle
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

## 📄 Handling Issues

### **Ethers.js Compatibility Issue:**
* Version 6 caused errors with Web3Provider.
* Downgraded to version 5 for stable performance.
