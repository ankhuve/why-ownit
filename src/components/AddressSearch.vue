<template>
  <div class="address-why-ownit-search">
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
<style lang="scss" scoped>
  .address-why-ownit-search {
    margin: -200px auto 4em;
    padding: 1.5em;
    background: rgba(0,0,0,.2);
    border-radius: 10px;

    > form input.form-control{
      display: block;
      width: 100%;
      line-height: 1.25;
      color: #464a4c;
      background: #fff none;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, 0.15);
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      padding: 0.7em;
      border-radius: 10px;
      font-size: 1.2em;
      font-family: CreightonPro-Book,Helvetica,Arial,sans-serif;
      margin-bottom: 1.0em;
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
