// 일반적인 빅오 알고리즘

function exampleLinear(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    };
};

// O(n2)는 2차 시간이고 O(n3)은 3차시간이다

function exampleQuadratic(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
        for (let j = i; j < n; j++) {
            console.log(j);
        };
    };  
};

function exampleCubic(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
        for (let j = i; j < n; j++) {
            console.log(j);
            for (let k = j; k < n; k++) {
                console.log(k);
            };
        };
    };
};