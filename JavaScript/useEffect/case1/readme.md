### Initialize the dependency for useEffect as an empty array

```js
useEffect(() => {
  setData(initialData);
  setCount(count + 1);
}, []);
```

Initially, the page is loaded with all the data
![Initial loading print-screen](1_InitialResult.png)

If we modify the value for initialData in the Developer Components tab, **it won't affect** the component behavior.
![Modify props values print-screen](2_ModifyProp.png)

This isn't the case if we modify the state itself.
![Modify state values print-screen](3_ModifyState.png)
