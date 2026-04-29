// Default PIN
let correctPin = "1234";

// Load saved data
let balance = localStorage.getItem("balance") 
    ? Number(localStorage.getItem("balance")) 
    : 0;

let historyList = JSON.parse(localStorage.getItem("history")) || [];//converting string to array

// Login
function login() {
    let pin = document.getElementById("pin").value;

    if (pin === correctPin) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("bankBox").style.display = "block";
        loadUI();
    } else {
        document.getElementById("loginMsg").innerText = " Wrong PIN";
    }
}

// Logout
function logout() {
    document.getElementById("bankBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("pin").value = "";
}

// Deposit
function deposit() {
    let amt = Number(document.getElementById("amount").value);

    if (amt > 0) {
        balance += amt;
        updateData("Deposited ₹" + amt);
    } else {
        showMessage("Enter valid amount");
    }
}

// Withdraw
function withdraw() {
    let amt = Number(document.getElementById("amount").value);

    if (amt > balance) {
        showMessage("Insufficient balance");
    } else if (amt > 0) {
        balance -= amt;
        updateData("Withdrawn ₹" + amt);
    } else {
        showMessage("Enter valid amount");
    }
}

// Reset
function resetAccount() {
    balance = 0;
    historyList = [];
    updateData("Account Reset");
}

// Update + Save
function updateData(text) {
    historyList.push(text);

    localStorage.setItem("balance", balance);
    localStorage.setItem("history", JSON.stringify(historyList));

    loadUI();
    showMessage(text);
}

// Load UI
function loadUI() {
    document.getElementById("balance").innerText = balance;

    let history = document.getElementById("history");
    history.innerHTML = "";

    for (let i = 0; i < historyList.length; i++) {
        let li = document.createElement("li");
        li.innerText = historyList[i];
        history.appendChild(li);
    }
}

// Message
function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}