(function () {
    let allow = null;
    try {
        allow = sessionStorage.getItem('allow_game');
    } catch (e) {}

    if (!allow) {
        location.replace('/');
        return;
    }

    try {
        sessionStorage.removeItem('allow_game');
    } catch (e) {}

    const cleanURL = "https://qulearning.github.io";

    if (location.href !== cleanURL) {
        history.replaceState({}, "", cleanURL);
    }
})();