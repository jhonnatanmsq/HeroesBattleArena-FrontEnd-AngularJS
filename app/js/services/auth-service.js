app.factory("AuthService", function ($http, config) {

    var jogador;

	var _login = function(jogador){
		return $http.post(`${config.apiUrl}/login`, jogador);
    };
	
	var _logout = function(){
		return $http.get(`${config.apiUrl}/jogador/logout`);
	};

    return{
        login : _login,
        logout : _logout,
        jogador
    };
});
