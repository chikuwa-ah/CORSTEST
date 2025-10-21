const GAS_URL = "https://script.google.com/macros/s/AKfycbynwJoXaGM-rnP6K7dovPWNuz6C8KawBjZoGEH98yOKbDu3_cp2Ef2B6hsHSBZaAoik/exec";

async function fetchData() {
    const res = await fetch(GAS_URL);
    const data = await res.json();
    console.log(data);
}

async function addData() {
    const newItem = { name: "Alice", passWord: 'pass' };
    const res = await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem)
    });
    console.log("データ送信完了");
}


document.addEventListener('click', (e) => {
    if (e.target.textContent === 'GET') {
        fetchData();
    } else {
        addData();
    }
})