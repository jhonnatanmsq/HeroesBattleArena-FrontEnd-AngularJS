app.controller("HomeController", function ($scope, HomeService, HeroiService) {
    const self = this;
    self.app = "Heroes Battle Arena";

    self.service = HomeService;

    self.jogador = {
        nickname: '',
        senha: ''
    };

    self.init = function () {
        self.carregarHerois();
    };

    self.carregarHerois = function () {
        HeroiService.getHerois().success(res => {
            self.herois = res;
        }).error(data => {
            alertify.error(data.message);
        });
    };

    self.cadastrar = function (jogador) {
        self.service.cadastrar(jogador).success(res => {
            alertify.success(res.nickname + " cadastrado com sucesso!");
            jogador.nickname = '';
            jogador.senha = '';
            jogador.heroi = '';
        }).error(data => {
            if (data.errors) {
                data.errors.forEach(error => {
                    alertify.error(error.message);
                })
            } else {
				alertify.error(data.message);
            }
        });
    }


});
