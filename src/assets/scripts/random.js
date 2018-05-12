var Random={
    nextInt:function(min, max){
        if(min>max){
            var pocket=min;
            min=max;
            max=pocket;
        }
        return min+Math.floor(Math.random()*(max-min+1));
    },
    nextDouble:function(min,max){
        return min+Math.random()*(max-min+1);
    },
    nextBoolean:function(){
        return Math.random()>=0.5;
    }
}
