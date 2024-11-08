document.getElementById("discord-login-btn").addEventListener("click", () => {
    const clientId = "1304350765976125530";
    const redirectUri = encodeURIComponent("http://localhost:63342/DiscordShopApi/sandbox/index.html?_ijt=va4daiveftot03uqkn45e017ci");
    const scope = "identify";
    const responseType = "code";

    const discordLoginUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    window.location.href = discordLoginUrl;
});

// Beispiel für das Abrufen und Senden des Codes an den Server
function handleDiscordRedirect() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
        fetch("http://localhost:8080/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
        })
            .then(response => response.json())
            .then(data => {
                console.log("User data:", data);
            })
            .catch(error => console.error("Error:", error));
    }
}

window.onload = handleDiscordRedirect;
