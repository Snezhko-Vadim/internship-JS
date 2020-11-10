let lastStoneWeight = function(stones) {
    const maxWeightStones = (stones) => {
        let answ = [];
        for(let k = 0; k<2; k++){
            let maxWeight = 0;
            let stoneIndex = 0;
            for(let i = 0; i<stones.length; i++){
                if(maxWeight<stones[i] && i !== answ[0]){
                    maxWeight = stones[i];
                    stoneIndex = i;
                }
            }
            answ.push(stoneIndex);
        }
        return answ;
    }
    const stonesCollision = (stones, index_1, index_2) => {
        if(stones[index_1]===stones[index_2]){
            stones.splice(index_1,1);
            stones.splice(index_2,1);
        }
        else if((stones[index_1]-stones[index_2])>0){
            stones[index_1] = stones[index_1] - stones[index_2];
            stones.splice(index_2,1);
        }
        else{
            stones[index_2] = stones[index_2] - stones[index_1];
            stones.splice(index_1,1);
        }
    }
    while(stones.length!==1){
        stonesCollision(stones,maxWeightStones(stones)[0],maxWeightStones(stones)[1]);
    }
    return stones[0];
};