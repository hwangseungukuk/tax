
// 싱글턴으로 로그인 구현하기 
export const singleton = ( function(){
    var instance;
    var login = false;

    function init(){
        return { publicMethod : function(){ return 'public method'; }, publicProps : 'public variable', };
    }

    return{    
        getInstance : function()
        { if(!instance){ instance = init(); } return instance; },

        check : function() { return logincheck }
    }
})();
