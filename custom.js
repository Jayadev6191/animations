var arr=[1,3,4,5,6,15];

var stack=[];
var sumInStack=0;
var targetSum=15;

var populateSubset=function(arr,fromIndex,endIndex){
	if(sumInStack==targetSum){
		console.log(stack);
	}


	for(var i=fromIndex;i<endIndex;i++){
		// console.log(stack);
		// console.log('stack');

		if(sumInStack + arr[i] <= targetSum){
			stack.push(arr[i]);
			sumInStack += arr[i];
			// console.log(sumInStack);
			populateSubset(arr, i + 1, endIndex);
			sumInStack -= stack.pop();
		}
		
		// console.log(stack);
	}
};

populateSubset(arr,0,arr.length);