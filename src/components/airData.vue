// 空气质量
<template>
    <div class='airData'>
        空气质量
    </div>
</template>

<script>
    export default {
        name : 'airData',
        data(){
            return{
              
            }
        }
    }
</script>

<style scoped lang='less'>
@import '../baseStyle/base.less';
.airData{
    width: 100%;
    height: 10%;
    background-color: white;
    border-radius: 10px;
    box-shadow: @boxShadow ;
    // transform: translateY(-20%);
    margin-bottom: 10px;
}
</style>