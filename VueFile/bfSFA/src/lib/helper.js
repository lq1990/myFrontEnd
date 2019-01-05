export default {
    getTypes : function(ins){
        return Object.prototype.toString.call(ins).slice(8, -1);
    }
}