function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

function getInnerTextById(id){
    return parseFloat(document.getElementById(id).innerText);
}

function addToHistory(donation, name){
    const historyContainer = document.getElementById("history");
    const historyItem = document.createElement("div");

    historyItem.className = "w-11/12 mx-auto border border-solid rounded-2xl p-8 mb-6";
    historyItem.innerHTML = `
        <h3 class="font-bold text-xl text-font_primary mb-4">${donation} Taka is Donated for ${name}</h3>
        <p class="text-base font-light text-font_secondary">Date: ${new Date().toString()}</p>
    `;
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}