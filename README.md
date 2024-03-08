# react
A Code Repo For Reactjs

package.json:-

here we have project name, version,
dependencies {
    here we have our main file react, react-dom etc, we also have some testing dependencies for testing
    web-vitals:-it check our application performance fast, slow, track performance.
    react-script:- it is responsibile for load index.js in our index.html.
}
scripts {
    it make our application ready for production. 
    start:- to run our project in development environment.
    build:- our application behave diff during build time.
    test:- to run our test cases.
    eject:- 
}
eslintConfig {
    we see sometime a red line under a code but it not an error also it tell you the you can write your code in good manner.
}
browserslist {
    on what browser we can work or on what we can not.
}

vit:-
devdependencies {
    these dependencies don't go in production only used in development time.
}

Libraies:- used in manipulate react dom.
react:- core foundational library which is used to take references.
react-dom:- it's an implimentation of react on web
react-native:- it's an implimentation of react on app

JSX power you can render html element using JS.

{username}:- it's an expression and it's an evaluted expression we don't write js here we write js final outcome that is already evaluted.

Hooks:-
usestate:- it is responsible for change(dont mean update a value) in state this change propogate into our UI(DOM)

useCallBack:- is a React hook that lets you cache a function definition between re-renders.
useCallBack will try to memorise the function as much as it can(it may memorise full function) 

useEffect:- 

ReactRouterDom:- 
Link:- link is use in place of anchor(a) tag because when ever a tag is used it reload the page.
NavLink:- className{({isActive})=> {isActive ? "text-orange-700":"text-gray-700"}}; basically it tell you about currenct page you are on.


StateManagement.
ContextApi:- 
creating a global object and put all the data
create a file with UserContext.js(global object)
every context is a provider
<UserContext>
<Login />
<Card />
</UserContext>
every component inside usercontext can get access to global component

Context:- after creating context it will give a provider(bcoz context is basically providing a variable)