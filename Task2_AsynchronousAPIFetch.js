async function fetchFirstFivePosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        const firstFivePosts = posts.slice(0, 5);
        
        firstFivePosts.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
        
        return firstFivePosts;
        
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

fetchFirstFivePosts();