const historyTab = document.getElementById("history-btn");
const donationTab = document.getElementById("donation-btn");

// Toggle the active status of the History" button
historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        "bg-primary",
        "text-font_primary"
    );
    historyTab.classList.remove(
        "bg-white",
        "border-solid",
        "border-[#1111114D]",
        "text-font_secondary"
    );
    donationTab.classList.remove(
        "bg-primary",
        "text-font_primary"
    );
    donationTab.classList.add(
        "bg-white",
        "border-solid",
        "border-[#1111114D]",
        "text-font_secondary"
    )
    document.getElementById("donation").classList.add("hidden");
    document.getElementById("history").classList.remove("hidden");
})

// Toggle the active status of the "Donation" button
donationTab.addEventListener('click', function(){
    donationTab.classList.add(
        "bg-primary",
        "text-font_primary"
    );
    donationTab.classList.remove(
        "bg-white",
        "border-solid",
        "border-[#1111114D]",
        "text-font_secondary"
    );
    historyTab.classList.remove(
        "bg-primary",
        "text-font_primary"
    );
    historyTab.classList.add(
        "bg-white",
        "border-solid",
        "border-[#1111114D]",
        "text-font_secondary"
    )
    document.getElementById("history").classList.add("hidden");
    document.getElementById("donation").classList.remove("hidden");
})


// Noakhali Donate Button
document.getElementById("noakhali-donate-btn").addEventListener('click', function(){
    const noakhaliDonateInput = getInputValueById("noakhali-donation-input");
    const currentNoakhaliAmount = getInnerTextById("current-noakhali-amount");
    const accountBalance = getInnerTextById("account-balance");

    if(noakhaliDonateInput <= 0 || isNaN(noakhaliDonateInput) || document.getElementById("noakhali-donation-input").value.trim() === ''){
        document.getElementById("noakhali-amount-error").classList.remove("hidden");
        return;
    }
    if(noakhaliDonateInput > accountBalance){
        return alert("You don't have enough balance")
    }

    document.getElementById("current-noakhali-amount").innerText = currentNoakhaliAmount + noakhaliDonateInput;

    document.getElementById("account-balance").innerText = accountBalance - noakhaliDonateInput;

    document.getElementById("noakhali-donation-input").value = '';

    const donationAtNoakhali = document.getElementById("noakhali-name").innerText;

    addToHistory(noakhaliDonateInput, donationAtNoakhali);
    // alert("Your donation has been successfully completed.");
    document.getElementById("my_modal_1").showModal();
});

// Feni Donate Button
document.getElementById("feni-donate-btn").addEventListener('click', function(){
    const feniDonateInput = getInputValueById("feni-donation-input");
    const currentFeniAmount = getInnerTextById("current-feni-amount");
    const accountBalance = getInnerTextById("account-balance");

    if(feniDonateInput <= 0 || isNaN(feniDonateInput) || document.getElementById("feni-donation-input").value.trim() === ''){
        document.getElementById("feni-amount-error").classList.remove("hidden");
        return;
    }
    if(feniDonateInput > accountBalance){
        return alert("You don't have enough balance")
    }

    document.getElementById("current-feni-amount").innerText = currentFeniAmount + feniDonateInput;

    document.getElementById("account-balance").innerText = accountBalance - feniDonateInput;

    document.getElementById("feni-donation-input").value = '';

    const donationAtFeni = document.getElementById("feni-name").innerText;

    addToHistory(feniDonateInput, donationAtFeni);
    // alert("Your donation has been successfully completed.");
    document.getElementById("my_modal_1").showModal();
});

// Quota Donate Button
document.getElementById("quota-donate-btn").addEventListener('click', function(){
    const quotaDonateInput = getInputValueById("quota-donation-input");
    const currentQuotaAmount = getInnerTextById("current-quota-amount");
    const accountBalance = getInnerTextById("account-balance");

    if(quotaDonateInput <= 0 || isNaN(quotaDonateInput) || document.getElementById("quota-donation-input").value.trim() === ''){
        document.getElementById("quota-amount-error").classList.remove("hidden");
        return;
    }
    if(quotaDonateInput > accountBalance){
        return alert("You don't have enough balance")
    }

    document.getElementById("current-quota-amount").innerText = currentQuotaAmount + quotaDonateInput;

    document.getElementById("account-balance").innerText = accountBalance - quotaDonateInput;

    document.getElementById("quota-donation-input").value = '';

    const donationAtQuota = document.getElementById("quota-name").innerText;

    addToHistory(quotaDonateInput, donationAtQuota);
    // alert("Your donation has been successfully completed.");
    document.getElementById("my_modal_1").showModal();
});

