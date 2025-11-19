(function(){
    try {
        var allow = sessionStorage.getItem('allow_game');
    } catch(e) { var allow = null; }
    if (!allow) {
        location.replace('/');
        return;
    }
    try { sessionStorage.removeItem('allow_game'); } catch(e) {}

    if (location.pathname !== '/') {
        history.replaceState({}, '', location.pathname);
    }
})();