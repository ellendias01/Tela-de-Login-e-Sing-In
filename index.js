const login = {
    template: `
    <div class="componente">
        <h1> Login </h1>
        <input type="text" placeholder="Nome">
        <input type="password" placeholder="Senha">
        <button class= "logar"> login </button>
    </div>
    `
}

const singin = {
    template: `
    <div class="componente1">
        <h1> Cadastre-se </h1>
        <input type="text" placeholder="Nome">
        <input type="text" placeholder="Email">
        <input type="password" placeholder="Senha">
        <button class="logar"> criar conta </button>
    </div>
    `
}

const { createApp } = Vue;

createApp({

    data() {
        return {
            componenteAtual: "login",
            componentKey: 0,
            buttonText: "Criar uma conta",
            buttonTextPrefix: "Bem-vindo! Novo por aqui?"
        }
    },
    methods: {
        alterarComponentes() {
            this.componentKey++,
            this.componenteAtual = (this.componenteAtual === "login") ? "singin" : "login",
            this.buttonText = (this.componenteAtual === "login") ? "Criar uma conta" : "Fazer login";
            this.buttonTextPrefix = (this.componenteAtual === "login") ? "Bem-vindo! Novo por aqui?" : "Bem-vindo de volta! ";
        }
    },
    components: {
        login,
        singin

    },
    mounted() {
        const number_of_star = 150;
        const random_number = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const maxStarRadius = 4; // Máximo raio das estrelas
        const halfWindowWidth = windowWidth / 2;
        const halfWindowHeight = windowHeight / 2;
        const margin = 50; // Margem ao redor das bordas
      
        for (let i = 0; i < number_of_star; i++) {
          const star_rotation = Math.random() < 0.5 ? 'move_right' : 'move_left';
          const star_radius = random_number(1, maxStarRadius);
          const star_duration = random_number(6, 16);
          let star_left = random_number(-halfWindowWidth + margin, halfWindowWidth - margin) - star_radius;
          let star_top = random_number(-halfWindowHeight + margin, halfWindowHeight - margin) - star_radius;
          
          if (star_left > 1) {
            star_left = 1;
          }
          if (star_top > 100) {
            star_top = 100;
          }
      
          const star = document.createElement('div');
          star.classList.add('star');
          star.style.top = halfWindowHeight + star_top + 'px';
          star.style.left = halfWindowWidth + star_left + 'px';
          star.style.width = star_radius + 'px';
          star.style.height = star_radius + 'px';
          star.style.animationName = star_rotation;
          star.style.animationDuration = star_duration + 's';
      
          document.querySelector('.intro').appendChild(star);
        }
      }
    }).mount('#app')

