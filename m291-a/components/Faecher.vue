<template> 
  <section v-for="fach in faecher" :key="fach.id"> 
    {{fach.name}} 
  </section> 
     
  <input @keyup.enter="addFach" type='input' v-model='newFach'/> 
  <button @click="addFach">Add</button> 
</template> 
<script> 
export default { 
  name: 'Faecher', 
  data() { 
    return { 
      newFach: '', 
      faecher: [] 
    } 
  }, 
  methods: { 
    addFach() { 
      console.log(this.newFach); 
      this.faecher.push( 
        { id:this.newFach.toLowerCase(), 
          name:this.newFach 
        }) 
    } 
  }, 
  mounted() { 
    this.faecher = [ 
        { 
          id: 'mm', 
          name: 'Multimedia' 
        }, 
        { 
          id: 'ds', 
          name: 'Gestaltung' 
        } 
      ] 
  } 
} 
</script> 