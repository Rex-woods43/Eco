window.onload = function() {
    if (localStorage.getItem('mode') == 'dark') {
        document.documentElement.style.setProperty("--back-colour", "#1c1c1c");
        document.documentElement.style.setProperty("--text-colour", "white");
        document. getElementById ("changeTheme").innerText = "Light Mode"
    }
    else {
        document.documentElement.style.setProperty("--back-colour", "white");
        document.documentElement.style.setProperty("--text-colour", "black");
        document. getElementById ("changeTheme").innerText = "Dark Mode"
    }
}

function darkMode () {
    var buttonStatus = document. getElementById ("changeTheme").innerText;
    if (buttonStatus == "Dark Mode") {
        document.documentElement.style.setProperty("--back-colour", "#1c1c1c");
        document.documentElement.style.setProperty("--text-colour", "white");
        document. getElementById ("changeTheme").innerText = "Light Mode"
        localStorage.setItem ('mode', 'dark')
    }
    else {
        document.documentElement.style.setProperty("--back-colour", "white");
        document.documentElement.style.setProperty("--text-colour", "black");
        document. getElementById ("changeTheme").innerText = "Dark Mode"
        localStorage.removeItem ('mode', 'dark')
    }
    }