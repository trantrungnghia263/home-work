interface Post{
  title: string;
  content: string;
}

type Posts = Post[];

const post: Posts = [
  {
    title: 'Hello World',
    content: 'Welcome to learning Typescript'
  },
  {
    title: 'Hello TTN',
    content: 'Welcome to learning Typescript'
  }
];

const _post = post.find((post) => post.title === 'Hello World');

const postTitle = post.map((post) => post.title);

interface ButtonOptions{
  label: string;
  onClick: () => void;
}

function Button(options: ButtonOptions){
  return `<button>${options.label}</button>`;
}
Button({
  label: 'Hello World',
  onClick: () => {
    console.log('Clicked');
  }
})
//type aliases 
type FirstName = string;
type LastName = string;

const firstName : FirstName = 'David';
const lastName : LastName = 'John';

interface User{
  /**
    * Đây là tên của user
  */
  name: string; //required
  /**
    * Đây là tuổi của user
  */
  age?: number // optional
}

const user: User = {
  name: 'John',
  age: 30
}

const user2: User = {
  name: 'John'
}