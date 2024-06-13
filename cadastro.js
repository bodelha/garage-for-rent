new Vue({
    el: '#app',
    data: {
        nome: '',
        telefone: '',
        email: '',
        senha: '',
        confirmeSenha: '',
        ehLocatario: false,
        ehLocador: false,
        signupError: '',
        signupSuccess: false,
        signupSuccessMessage: "Cadastro realizado com sucesso! Por favor, faça login."
    },
    methods: {
        async signupFormSubmit() {
            // Verificação básica de validação
            if (this.senha !== this.confirmeSenha) {
                this.signupError = "As senhas não coincidem.";
                return;
            }

            // Limpar mensagens anteriores
            this.signupError = '';
            this.signupSuccess = false;

            // Preparar dados para envio
            const data = {
                nome: this.nome,
                telefone: this.telefone,
                email: this.email,
                senha: this.senha,
                ehLocatario: this.ehLocatario,
                ehLocador: this.ehLocador
            };

            try {
                const response = await fetch('http://localhost:3000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const result = await response.json();

                if (response.status === 200) {
                    this.signupSuccess = true;
                    this.signupError = '';
                    this.signupSuccessMessage = result.message || this.signupSuccessMessage;
                    // Redireciona para a página de login após 2 segundos
                    setTimeout(() => {
                        window.location.href = "login.html";
                    }, 2000);
                } else {
                    this.signupError = result.message || "Erro ao criar conta.";
                }
            } catch (error) {
                console.error("Erro ao processar o formulário de cadastro:", error);
                this.signupError = "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.";
            }
        }
    }
});