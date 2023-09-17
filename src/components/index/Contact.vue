<template>
  <!--===== CONTACT =====-->
  <section class="contact section" id="contact">
    <h2 class="section-title">Contact</h2>

    <div class="contact__container bd-grid">
      <form action="" class="contact__form">
        <input type="text" placeholder="Name" class="contact__input">
        <input type="mail" placeholder="Email" class="contact__input">
        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
        <input type="button" value="Enviar" class="contact__button button">
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name:"Contact"
}
</script>
<style scoped>
/* ===== CONTACT =====*/
.contact__input {
  width: 100%;
  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);
  padding: 1rem;
  border-radius: .5rem;
  border: 1.5px solid var(--second-color);
  outline: none;
  margin-bottom: var(--mb-4);
}

.contact__button {
  display: block;
  border: none;
  outline: none;
  font-size: var(--normal-font-size);
  cursor: pointer;
  margin-left: auto;
}
</style>
