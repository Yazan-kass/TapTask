//---------------------------------js for toggle menu------------------------
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}
//---------------------------------js for toggle text------------------------
function toggleText() {
  var moreText = document.getElementById("more-text");
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    document.getElementById("read-more").innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    document.getElementById("read-more").innerHTML = "Read More";
  }
}

//-------------second question----------

function twoSum(nums, target) {
  const numIndexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    if (numIndexMap.hasOwnProperty(complement)) {
      return [numIndexMap[complement], i];
    }

    numIndexMap[currentNum] = i;
  }

  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
