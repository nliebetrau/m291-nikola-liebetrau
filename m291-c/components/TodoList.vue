<template>
    <input type="text" size="50" v-model="zielEingabe">
    <button>Neu</button>
    <h2>TODO</h2>
    <p>
        <input type="radio" name="zielSelect" value="1"> JavaScriptLernen</input>
    </p>
    <button>Delete</button>
</template>
<script>

export default {
    name: 'ToDo'
    props { msg: String },
    data: function () {
        return {name,props,data}
    },
    methods: {
        neuziel() {ToDo},
        deleteZiel() {ToDo}
    }
}