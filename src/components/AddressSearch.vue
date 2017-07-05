<template>
  <div class="address-start-search">
    <h2>Kan du få Ownit?</h2>
    <p>Börja genom att ange din adress för att se hastighet &amp; pris.</p>

    <form method="GET" action="https://www.ownit.se/privat-bredband" accept-charset="UTF-8" autocomplete="off">
      <div class="row justify-content-center">
        <div class="col-sm-9">
          <input type="text" name="address" class="form-control" placeholder="T.ex. Storgatan 20">
        </div>
        <div class="col-sm-12">
          <button type="submit" class="btn btn-primary">Sök</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="scss">
  .address-start-search {
    margin: -200px auto 5rem;
    padding: 2rem;
    background: rgba(0,0,0,.2);
    border-radius: 10px;

    > form input{
      padding: 1rem;
      border-radius: 10px;
      font-size: 1.4rem;
      font-family: CreightonPro-Book,Helvetica,Arial,sans-serif;
      margin-bottom: 1.5rem;
    }
}
</style>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
