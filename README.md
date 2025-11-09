# Intern-KinTechnology-Task

## Task1 
This task amis to find the maximum value in an array. There are multiple implementation approaches, the commonly used approaches are the Math.max() function and iterative loops. The former is easy to to code, but for large arrays, it may cause stack overflow. Therefore, considering the array size, I use different solutions accordingly.

```js
function findLargestNumberSafe(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    
    // 对小数组使用 Math.max，对大数组使用遍历
    if (numbers.length < 10000) {
        return Math.max(...numbers);
    } else {
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) max = numbers[i];
        }
        return max;
    }
}
```

## Task2
Task 2 aims to asynchronously fetch API data. We generally use async function and fetch() to send requests and receive data, then filter the data to extract the titles of the first five posts.

``` js
async function fetchFirstFivePosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        const posts = await response.json();
        const firstFivePosts = posts.slice(0, 5);
        
        firstFivePosts.forEach((post, index) => {
            console.log(`${post.title}`);
        });
        
        return firstFivePosts;
        
    }
}
```

## Task3
Task 3 aims to create a button component using React. When clicked, it increments the counter value by 1.

```html
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
        function Counter() {
            const [count, setCount] = React.useState(0);
            
            return (
                <div>
                    <h3>Counter: {count}</h3>
                    <button onClick={() => setCount(count + 1)}>
                        Click
                    </button>
                </div>
            );
        }

        ReactDOM.render(<Counter />, document.getElementById('root'));
    </script>
```
