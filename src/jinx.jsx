const MyComponent = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = useCallback(() => {
      // Function body
      console.log(count); // Referencing count variable
      setCount(prevCount => prevCount + 1);
    }, [count]); // count is specified as a dependency
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  };
  export default MyComponent