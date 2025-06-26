import {swap} from './helpers';

const selection = (array, position, arraySteps, colorSteps) => {
    let colorKey = colorSteps[colorSteps.length - 1].slice();

    for(let i=0; i<array.length-1;i++){
        let min_idx = i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[min_idx]){
                min_idx = j;
            }
            colorKey[min_idx] = 1;
            colorKey[j] = 1;
            arraySteps.push(array.slice());
            colorSteps.push(colorKey.slice());
            colorKey[min_idx] = 0;
            colorKey[j]=0;
        }
        swap(array, min_idx, i);
        colorKey[i] = 2;
        arraySteps.push(array.slice());
        colorSteps.push(colorKey.slice());
    }
    colorSteps[colorSteps.length-1] = new Array(array.length).fill(2);
}

export default selection;