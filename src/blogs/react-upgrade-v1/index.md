---
id: 08fce572-ae0c-46f5-bcaa-2c88be47632c
title: Quick Article - Upgrade React Project!
subTitle: from 15.4 to 16.8
date: '2019-04-06'
tags: quick, react, redux, upgrade, router, manual, redux-form, proptypes, refs
category: front-end
readingTime:  4 min read
---

<div style="text-align:center;background-color:#fff">
    <img src="./assets/Atlas.jpg" alt="Atlas hold the react logo title="Atlas hold the react logo " />
</div>
<br/>

A few days ago, I was engaged in a challenge to upgrade a project written in React and Redux libraries maintained for more than 2 years and we still maintain it and add new features to extend its functionalities. From React 15.4 to 16.8 there are a lot of updates and upgrades in React itself and its ecosystem.

I will list below all what I did to make the project working again after a lot of upgrades and workarounds.



## 1- Upgrade React and React DOM

The first step ever, just install React 16.8 and React DOM 16.8, then tried to run the application. Boom, a shiny white screen opened in my browser and with a lot of error but the main error is

`React.PropTypes.string.isRequired cannot read property isRequired of undefined`

## 2- Install PropTypes package

So the second step was installing the PropTypes package because based on React Documentation, PropTypes extracted into its own package since React 15.5.0. Woow 😄

So I revisited all the components that use PropTypes and Adjust it based on PropTypes package.

### 2.1 The "Refs"

**What is the "Refs"?** Refs provide a way to access DOM nodes or React elements created in the render method.

**When to use "Refs"?** 

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

**Where is the problem?** In my project, we were used "Refs" with an old API where `ref` attribute is a **string**, like `"textInput"`, and the DOM node is accessed as `this.refs.textInput`. [[React Documentation](<https://reactjs.org/docs/refs-and-the-dom.html>)]

>My Project was used this Legacy API, the **String Refs**, so in React Documentation they recommend to use callback pattern or createRef API instead.

So, we revisited the whole project and replace the Legacy API with createRef API 

### 2.2 Redux with refs

I remember well those 3 days to know why parent component cannot access the ref of its child, Why? Because parent was contain button if user click on it, a textbox in the child will be focused 😄 and the child for some reason was connected with redux :sweat:. 

> **Note:**
>
> If you remember well how we connect react component with redux, the **connect** method will be written in your mind that introduced by react-redux library.
>
> The new wrapper component that out from the **connect** method, will not return the instance of the wrapped component by default and you need to tell him that you need to return an instance so you can access any method you created it inside this wrapper component.
>
> So to resolve this problem, `connect` accepts four different parameters, all optional. By convention, they are called:
>
> 1. `mapStateToProps?: Function`
> 2. `mapDispatchToProps?: Function | Object`
> 3. `mergeProps?: Function`
> 4. `options?: Object`
>
> and the fourth parameter is an object and you can send ` {withRef: true}` [[forwaredRef](https://react-redux.js.org/api/connect#forwardref-boolean)] to solve the problem.

Because of the upgrading of redux, `withRef` was deprecated and replaced with `forwardRef`, and this mean the accessing of this wrapper component changes too.

#### Showcase

```javascript
// Old code and remember, i am react v.15.4
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

export default class Parent extends React.Component {
    _onClick = () => {
        this.refs["childComponent"].getWrappedInstance()._handleFocus();
    }
    
    render(){
        return(
            <div>
                <input type="button" value="focus" onClick={() => this._onClick()} />
				<Child ref="childComponent" />
			</div>
        )
    }
}

class ChildComponent extends React.Component {
    
    _handleFocus = () => {
        var elementToFocus = this.refs["inputToFocus"];
        var commentDOM = ReactDOM.findDOMNode(elementToFocus);
        var elementPosition = commentDOM.getBoundingClientRect()
        elementToFocus.focus();
    }
    
    render(){
        return <input type="text" ref="inputToFocus" />
    }
}

const Child = connect(null, null, null, { withRef: true })(ChildComponent);
```



```javascript
// Old code and remember, i am react v.15.4
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

export default class Parent extends React.Component {
    _onClick = () => {
        // The new ref access
        this.child._handleFocus();
    }
    
    render(){
        return(
            <React.Fragment>
                <input type="button" value="focus" onClick={() => this._onClick()} />
				{/*the new usage of ref */}
				<Child ref={ele => this.child = ele} />
			</React.Fragment>
        )
    }
}

class ChildComponent extends React.Component {
    _handleFocus = () => {
        this.inputToFocus.focus();
    }
    
    render(){
        {/*the new usage of ref */}
        return <input type="text" ref={ele => this.inputToFocus = ele} />
    }
}

const Child = connect(null, null, null, { forwardRef: true })(ChildComponent);
```

A lot of changes, especially in accessing the wrapper component.

## 3. Upgrade most of packages

Because of most of the following packages using the **PropTypes** from React package, I updated them to latest as they Use the **PropTypes** package directly.

```json
"draft-js": "^0.10.5",
"draft-js-mention-plugin": "^3.1.3",
"draft-js-plugins-editor": "^2.1.1",
"slick-carousel": "^1.8.1",
"react-appinsights": "^2.0.2",
"react-click-outside": "^3.0.1",
"react-dropzone": "^10.0.6",
"react-notification-system": "^0.2.17",
"react-notification-system-redux": "^2.0.0",
"react-router-dom": "^5.0.0",
"react-select": "^2.4.2",
"react-textarea-autosize": "^7.1.0",
"react-tooltip": "^3.10.0",
```

But the most painful packages were **redux-form 5.3.3** and **redux-form-validation 0.0.8** :disappointed:

### 3.1 Redux-form 5.3.3

I tried to upgrade **redux-form 5.3.3** and **redux-form-validation 0.0.8** normally like the other packages but this project has almost 6 forms and if I upgrade them I will totally rewrite these forms because redux-form has been completely rewritten for v6, because of a fundamental design change. 

So what is the workaround? Simply I downloaded redux-form 5.3.3 and upgrade it manually by install **PropTypes** and change the **React.PropTypes** to be **PropTypes** directly and thanks for redux-form team for creating unit tests to make sure that everything is okay. Of course, I included redux-form code into my project until I rewrite the 6 forms and of course I installed extra packages that redux-form depends on them.

```json
"is-promise": "2.1.0"
"react-lazy-cache": "3.0.1"
"valid-url": "1.0.9"
```

## 4. React-router

The biggest nightmare, **React Router v4** is a complete rewrite, not just enhancements added to the previous version, and **react-router** changed to be **react-router-dom**, huge changes happened from **v.3** to **v.5**

I followed to main articles to upgrade from **react-router v.3** to **react-router v.5**

- [React Router v4 Unofficial Migration Guide](<https://codeburst.io/react-router-v4-unofficial-migration-guide-5a370b8905a>)

- [Migrating from v2/v3 to v4](<https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md>)

These two articles are great to follow them if you want to upgrade your react-router.

<hr/>

#### Of course, there are some crashes after this upgrade, I upgraded some packages too like react-dropzone and so on due to some configurations changes and its usage.

##### This upgrade costed me more than 30hr in 3 days continuously. When I was working on this upgrade I was thinking a lot to take a step back because of a lot of crashes.
