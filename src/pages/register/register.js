import { createUserWithEmail } from '../../firebase/auth.js';

export default () => {
  const container = document.createElement('div');

  const template = `
  <div class="form-wrapper">
  <img src="./assets/wifi-logo.png" id="ada-image" alt="mulher mexendo no notebook">
  <img src="./assets/ada-logo.png" id="ada-logo" alt="logo da ConectAda">
  <form>
    <div class="inputs-div">
      <input type="text" name="user-name" id="user-name" placeholder="nome completo">
      <input type="email" name="email" id="register-email" placeholder="seu@email.com">
      <input type="password" name="password" id="register-password" placeholder="senha">
    </div>

    <div>
      <button type="button" id="register-btn" href="#timeline">Registre-se</button>
    </div>

    <div>
      <button type="button" id="login-btn">Já tem uma conta? <a id="login-link" href="#login">Login</a></button>
    </div>

  </form>
</div>
`;
 
  container.innerHTML = template;

  const registerButton = container.querySelector('#register-btn');
  const registerEmail = container.querySelector('#register-email');
  const registerPassword = container.querySelector('#register-password');

  /* registerButton.addEventListener('click', () => {
    const email = registerEmail.value;
    const password = registerPassword.value;

    createUserWithEmail(email, password)
  }); */

  registerButton.addEventListener('click', () => {
    const email = registerEmail.value;
    const password = registerPassword.value;
  
    createUserWithEmail(email, password)
      .then((isCreated) => {
        console.log('Usuário cadastrado - register');
        window.location.replace('#timeline');
      })
      .catch((error) => {
        console.log('Erro de cadastro');
        window.location.replace('#register');
      })
      .finally(() => {
        console.log('Cadastro autenticado no register');
      }); 
  });

  return container;
};

