<template>
    <footer>
        <div class="FooterContent">
            <section></section>
            <div class="FooterIcons">
                <div 
                    v-for="icon in icons" 
                    :key="icon.value" 
                    class="iconsSVG" >
                    <a :href="icon.url" :target="icon.target">
                        <i :class='icon.name' />
                    </a>
                </div>
            </div>
            <div class="FooterText">
                <p>Made by casual gaming</p>
            </div>
        </div>
    </footer> 
</template>

<script>
import Vue from 'vue';
//import "font-awesome/css/font-awesome.css";

export default class TheFooter extends Vue{
    
    
     icons = [
        {
          value: 0,
          name:'fab fa-facebook',
          url:'https://www.facebook.com/',
          target:'_blank',
        },
        {
          value: 1,
          name:'fab fa-instagram',
          url:'https://www.instagram.com/',
          target:'_blank',
        },
        {
          value: 2,
          name: 'fab fa-github',
          url:'https://github.com/',
          target:'_blank',
        },
    ]
}
</script>
<style lang="scss">
footer {
    background-color: #242943;
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 0%;
    font-size: 2em;
    color:white;
    opacity: 0.6;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: column;
}
.iconsSVG {
    flex: 100%;
    padding: 5px;
    display: inline;
    justify-content: flex-start;
    
}
.FooterIcons {
    width: 20%;
    display: flex;
    justify-items: center;
    justify-self: center;
}
.FooterText {
    display: flex;
    justify-content: center;
}
.FooterContent{
    width: 100%;
}
</style>
