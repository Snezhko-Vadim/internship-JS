let merge = function(nums1, m, nums2, n) {
  for(let i = m; i<m+n; i++){
    nums1[i]=nums2[i-m];
  }
  let tmp;
  for(let j = 0; j<nums1.length; j++){
    for(let i = 0; i<nums1.length; i++){
      if(nums1[i]>nums1[i+1]){
        tmp = nums1[i];
        nums1[i] = nums1[i+1];
        nums1[i+1] = tmp;
      }
    }
  }
  return nums1;
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));