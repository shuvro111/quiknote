<template>
  <footer class="footer">
    <div class="container">
      <p href="/" class="footer-text">
        ©️ Quicknote {{ new Date().getFullYear() }} | All Rights Reserved
      </p>
      <p href="/" class="footer-text">
        Developed By <a href="https://github.com/shuvro111" class="link"> Shuvro Sarkar</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
}
.footer-text {
  color: black;
}

.footer-text .link {
  text-decoration: none;
  color: rgb(166, 2, 255);
  font-weight: 600;
}
.footer-text .link:hover {
  text-decoration: underline;
  text-decoration-color: rgb(166, 2, 255);
}
</style>
