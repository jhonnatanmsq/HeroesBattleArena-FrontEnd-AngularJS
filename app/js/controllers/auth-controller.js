app.controller("AuthController", function ($scope, AuthService, $location) {

    const self = this;

    self.service = AuthService;

    self.logar = function (jogador) {
        self.service.login(jogador).success((res, status, headers) => {
            self.service.jogador = res;
            localStorage.Authorization = headers("Authorization");
            $location.path("/game");
            alertify.success("Logado com sucesso!");
        }).error(data => {
            alertify.error(data.message);
        });
    };

    self.logOut = function () {
        delete localStorage.Authorization;
        self.service.jogador = null;
        $location.path("/");
        alertify.success("Até mais!");
    }

});
