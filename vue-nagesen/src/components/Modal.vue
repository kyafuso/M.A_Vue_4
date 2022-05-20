<template>
    <div id="overlay">
        <div id="content">
            <p>{{ val.name }}さんの残高</p>
            <p>{{ val.account }}</p>
            <button type="button" class="button is-danger is-small" @click="$emit('close')">close</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: ['val']
  }
</script>

<style>
  #overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:50%;
  padding-top: 5em;
  padding-bottom: 5em;
  background-color: #fff;
  text-align: center;
}

</style>