const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine());
let arr = []
for (let i = 0 ; i< n ; i++){
    A = readLine().split(" ");
    for(let j = 0 ; j< A.length ; j++){
        A[j] = parseInt(A[j])
    }arr.push(A)
}
let ans = false
for (let i = 0 ; i < n ; i++){
        let Y = ((arr[i][2]) - (arr[i][0]))
        if ((arr[i][1]) > (arr[i][3])){
            if ((((arr[i][3]) + 1 ) * Y ) % (arr[i][1]) == 0 ){
                ans = true
            }
            else{ans = false}
        }
        else {ans = false}
        if (ans == false){console.log("NO")}
        else if (ans == true){console.log("YES")}
}

/*
Kangaroo
You have two kangaroos. They are standing on a number line, at maybe different positions. You want to take a snapshot such that both the kangaroo should be in the snap. (Assume this is possible only if both the kangaroos are at same x-coordinates at a particular time.)

The first kangaroo starts from location x1 and moves at the rate of v1 meters per jump.
The second kangaroo starts from location x2 and moves at the rate of v2 meters per jump.
One jump takes 1 second for both of them.
Both of them start at same time.
If it is possible to take such snapshot, print YES otherwise print NO.

For example, kangaroo 1 starts at x1 = 2 with a jump distance v1 = 1 and kangaroo 2 starts at x2 = 1 with a jump distance of v2 = 2. After one jump, they are both at x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so our answer is YES.

Input Format
First line denotes the number of testcases. For each testcase:

A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.
Constraints:
0 ≤ x1 < x2 ≤ 10000
1 ≤ v1 ≤ 10000
1 ≤ v2 ≤ 10000
Output Format
Print YES if they can land on the same location at the same time; otherwise, print NO.

Sample Input
2
0 3 4 2
0 2 5 3
Sample Output
YES
NO
 
*/