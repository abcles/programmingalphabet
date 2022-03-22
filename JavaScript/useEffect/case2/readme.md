### Initialize the dependency for useEffect using the props value as an array

```js
useEffect(() => {
  setData(initialData);
  setCount(count + 1);
}, [initialData]);
```

Initially, the page is loaded with all the data
![Initial loading print-screen](1_InitialResult.png)

If we modify the value for initialData in the Developer Components tab, **it will affect** the component behavior.
![Modify props values print-screen](2_ModifyProp.png)

This is the case if we modify the state too.
![Modify state values print-screen](3_ModifyState.png)
