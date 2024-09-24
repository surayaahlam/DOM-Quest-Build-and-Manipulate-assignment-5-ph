document.getElementById("noakhali-donate-btn").addEventListener('click', function(){
    const noakhaliDonateInput = parseFloat(document.getElementById("noakhali-donation-input").value);
    console.log(noakhaliDonateInput);

    const currentNoakhaliAmount = parseFloat(document.getElementById("current-noakhali-amount").innerText);
    console.log(currentNoakhaliAmount);

    document.getElementById("current-noakhali-amount").innerText = currentNoakhaliAmount + noakhaliDonateInput;

    const accountBalance = parseFloat(document.getElementById("account-balance").innerText);

    document.getElementById("account-balance").innerText = accountBalance - noakhaliDonateInput;
    document.getElementById("noakhali-donation-input").value = '';

    const historyContainer = document.getElementById("history");

    const historyItem = createElement("div");
    historyItem.classList = " border border-solid rounded-2xl p-8 mb-6";
    historyItem.innerHtml = `
        <h3 class="font-bold text-xl text-font_primary mb-4">${noakhaliDonateInput} Taka is Donated for Flood Relief at Noakhali, Bangladesh</h3>
        <p class="text-base font-light text-font_secondary">Date: ${new Date().tolocalDateString()}</p>
    `;
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

