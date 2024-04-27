
Blockchain-Based Cryptocurrency Wallet Web Application
This document outlines the development process of a web-based cryptocurrency wallet application that utilizes various technologies, including React, Node.js, Tailwind CSS, Hardhat, and Solidity. This application allows users to send Ethereum-based transactions via a user-friendly interface and provides smart contract functionality through an Ethereum test network. The following is a detailed explanation of the workflow and key components of the application.

1. Frontend Development
1.1. Setting up React
The frontend of the application is built using React, a popular JavaScript framework for building dynamic user interfaces. To get started, Node.js was installed to enable the use of JavaScript frameworks outside the browser. Tailwind CSS was used for styling, allowing for easy application of styles through class names.

React Component Structure: A "components" folder was created to house the various parts of the web application, including:
Navbar: The top navigation bar.
Footer: The footer section.
Welcome: A welcome message or introductory section.
Services: A section describing the application's services.
Transaction: A section for sending transactions.
Loader: A loading spinner to indicate ongoing processes.
These components are imported into App.jsx, which serves as the main entry point for the application.

1.2. Tailwind CSS Integration
Tailwind CSS was chosen for styling due to its utility-first approach. With Tailwind, developers can apply styles through simple class names, reducing the need for complex CSS definitions. The Tailwind setup was straightforward and integrated into the React project.

2. Backend and Blockchain Development
2.1. Smart Contracts with Hardhat
The backend functionality was built using Hardhat, an Ethereum development environment designed for building and testing smart contracts. Solidity, a statically-typed, curly-brace programming language, was used to write the smart contract logic.

Transaction Smart Contract: A Solidity smart contract (Transactions.sol) was created to handle the main transaction functionalities. It contains methods for sending Ethereum from one address to another and capturing additional details like message, timestamp, sender, and receiver.
2.2. Interacting with the Ethereum Test Network
To deploy and test the smart contracts, a test network setup was required.

Metamask Integration: A Metamask account was created to interact with the Ethereum blockchain. The Sepolia test network was used for testing, providing a controlled environment for smart contract deployment and testing. Test Ether was obtained using a faucet for development purposes.
Hardhat Configuration: The Hardhat configuration file was modified to include the private key from the Metamask wallet and the Alchemy endpoint, allowing interaction with the Ethereum test network. Ethers.js, a JavaScript library for interacting with Ethereum, and Waffle, a smart contract testing library, were also utilized.
ABI (Application Binary Interface): After deploying the smart contract, an ABI was generated, providing a standard interface for interacting with the Ethereum blockchain from the application.
3. Context Management and Wallet Connection
3.1. Context Folder and Wallet Interaction
To manage application state and Ethereum interaction, a "context" folder was created.

Ethereum Object: The Ethereum object from Metamask is used to interact with the blockchain. The application checks if the user has Metamask installed, prompts them to connect their wallet, and manages the wallet connection state.
Transaction Context: A context file was created to centralize blockchain interaction and state management. This file provides methods to connect to Metamask, send transactions, and store transaction history.
3.2. Sending Transactions
The main functionality of the application is sending Ethereum transactions. This involves two steps: sending the transaction and adding it to the blockchain.

Transaction Logic: The application checks if the wallet is connected and sends the transaction details (receiver address, amount, message) to the smart contract's send transaction function. A loading indicator is displayed during the transaction process, and a success message is shown upon completion.
4. Additional Features
4.1. Services Section
The "Services" section was built using HTML and Tailwind CSS. A reusable "Service Card" component was created, allowing for multiple instances of service descriptions on the same page.

4.2. Transaction History and Local Storage
To track transaction history, the context file checks if a transaction exists, saves it to local storage, and retrieves it when needed. A getAllTransactions function retrieves all transactions, allowing them to be displayed in a user-friendly manner in the Transaction.jsx component.

5. Handling Issues and Version Compatibility
During development, a compatibility issue arose with Ethers.js version 6, leading to errors with the Web3Provider method. To resolve this, the version was downgraded to version 5, which provided stable functionality for the application.

Conclusion
This document summarizes the key components and processes involved in creating a blockchain-based cryptocurrency wallet web application. From frontend development with React and Tailwind CSS to backend smart contract deployment with Hardhat and Solidity, the application provides a comprehensive solution for sending and tracking Ethereum transactions. With Metamask integration, users can connect their wallets, send transactions, and view transaction history in a seamless and user-friendly manner.
