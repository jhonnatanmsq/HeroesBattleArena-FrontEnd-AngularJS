app.factory("BatalhaService", function ($http, config) {

    var opts = {
        headers: {
            'Authorization': localStorage.Authorization
        }
	};

	var _findMatch = function () {
		return $http.get(`${config.apiUrl}/batalha/buscar`, opts);
    };

    var _botBattle = function(){
        return $http.get(`${config.apiUrl}/batalha/bot`, opts);
    };

    var _playerBattle = function(id){
        return $http.get(`${config.apiUrl}/batalha/oponente/${id}`, opts);
    };

    var _findPlayer = function(id){
        return $http.get(`${config.apiUrl}/jogador/id/${id}`);
    };
    
    return {
        findMatch: _findMatch,
        botBattle: _botBattle,
        playerBattle: _playerBattle,
        findPlayer: _findPlayer
	};	
});
