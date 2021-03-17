export const testMixins = {
    filters: {
        toUpperCase(value) {
          return value.toUpperCase();
        },
        sort(value){
          return value.split('').sort().join()
        }
      },
}// Home view inda kullandık


export const ekran= {
    data(){
    return {
     mesaj:"Merhaba"
    }
    },
    methods:{
        yazdir:function(){
    alert(this.mesaj)
    }
    }
    }// About view inda kullandık
