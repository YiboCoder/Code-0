const passwordScreen = document.getElementById('password-screen');
const heartScreen = document.getElementById('heart-screen');
const passwordInput = document.getElementById('password-input');
const spinner = document.getElementById('loading-spinner');
const keys = document.querySelectorAll('.key');

let inputValue = "";

keys.forEach(key => {
  key.addEventListener('click', () => {
    const value = key.textContent;
    inputValue += value;
    passwordInput.value = "*".repeat(inputValue.length);

    if (inputValue.length >= 4) {
      if (inputValue === "0704") {
        spinner.classList.remove('hide');

        setTimeout(() => {
          spinner.classList.add('hide');
          passwordScreen.classList.remove('show');
          passwordScreen.classList.add('hide');

          heartScreen.classList.remove('hide');
          heartScreen.classList.add('show');

          const music = document.getElementById('bg-music');
          music.play();
        }, 5000); // 5s loading
      } else {
        alert("Sai mật khẩu! Nhập lại nha!");
        inputValue = "";
        passwordInput.value = "";
      }
    }
  });
});
