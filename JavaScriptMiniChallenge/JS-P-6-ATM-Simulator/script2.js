// Account details (you can add more accounts here)
const accounts = {
    "123456": { pin: "1234", balance: 1000 },
    "654321": { pin: "4321", balance: 500 }
};

// Function to display the main menu
function displayMenu() {
    const accountNumber = prompt("Enter account number:");
    const pin = prompt("Enter PIN:");

    // Check if account exists and PIN is correct
    const account = accounts[accountNumber];
    if (account && account.pin === pin) {
        let choice;
        do {
            choice = prompt(
                "Select an option:\n1. Check Balance\n2. Withdraw\n3. Deposit\n4. Exit"
            );

            switch (choice) {
                case "1":
                    checkBalance(account);
                    break;
                case "2":
                    withdraw(account);
                    break;
                case "3":
                    deposit(account);
                    break;
                case "4":
                    alert("Thank you for using the ATM.");
                    break;
                default:
                    alert("Invalid option. Please try again.");
            }
        } while (choice !== "4");
    } else {
        alert("Invalid account number or PIN.");
    }
}

// Function to check balance
function checkBalance(account) {
    alert(`Your balance is: $${account.balance}`);
}

// Function to withdraw money
function withdraw(account) {
    const amount = parseInt(prompt("Enter withdrawal amount:"));
    if (amount > 0 && amount <= account.balance) {
        account.balance -= amount;
        alert(`Withdrawal successful. Your new balance is: $${account.balance}`);
    } else {
        alert("Insufficient funds or invalid withdrawal amount.");
    }
}

// Function to deposit money
function deposit(account) {
    const amount = parseInt(prompt("Enter deposit amount:"));
    if (amount > 0) {
        account.balance += amount;
        alert(`Deposit successful. Your new balance is: $${account.balance}`);
    } else {
        alert("Invalid deposit amount.");
    }
}

// Start the ATM simulation
displayMenu();